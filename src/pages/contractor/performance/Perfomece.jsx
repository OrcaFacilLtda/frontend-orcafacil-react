import React, { useState, useEffect } from "react";
import PerformanceStyle from "./Perfomece.Style.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faCheckCircle, faStar } from "@fortawesome/free-solid-svg-icons";
import { Bar, Line } from "react-chartjs-2";
import { getProviderStats, getProviderChartData } from "../../../services/api/providerService.js";
import {
    Chart as ChartJS,
    CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

const PerformanceDashboard = () => {
    const [stats, setStats] = useState(null);
    const [chartData, setChartData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const MOCKED_COMPANY_ID = 1;

    useEffect(() => {
        const fetchPerformanceData = async () => {
            try {
                setLoading(true);
                const [statsData, charts] = await Promise.all([
                    getProviderStats(MOCKED_COMPANY_ID),
                    getProviderChartData(MOCKED_COMPANY_ID)
                ]);
                setStats(statsData);
                setChartData(charts);
                setError('');
            } catch (err) {
                setError("Falha ao carregar os dados de desempenho.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchPerformanceData();
    }, []);

    const barData = {
        labels: chartData?.servicesByMonthLabels || [],
        datasets: [{
            label: "Serviços Concluídos",
            data: chartData?.servicesByMonthData || [],
            backgroundColor: "#3B82F6"
        }]
    };

    const lineData = {
        labels: chartData?.earningsByMonthLabels || [],
        datasets: [{
            label: "Ganhos (R$)",
            data: chartData?.earningsByMonthData || [],
            borderColor: "#10B981",
            backgroundColor: "#10B981",
            fill: false
        }]
    };

    if (loading) {
        return <PerformanceStyle.Container>A carregar...</PerformanceStyle.Container>;
    }
    if (error) {
        return <PerformanceStyle.Container>{error}</PerformanceStyle.Container>;
    }

    return (
        <PerformanceStyle.Container>
            <PerformanceStyle.Header>
                <h2>Desempenho</h2>
                <p>Acompanhe as suas métricas e resultados</p>
            </PerformanceStyle.Header>

            <PerformanceStyle.SummaryCards>
                <PerformanceStyle.Card>
                    <PerformanceStyle.CardInfo>
                        <span>Total de Serviços</span>
                        <strong>{stats?.totalServices ?? 0}</strong>
                    </PerformanceStyle.CardInfo>
                    <PerformanceStyle.IconWrapper bg="#DBEAFE" color="#1D4ED8">
                        <FontAwesomeIcon icon={faBriefcase} />
                    </PerformanceStyle.IconWrapper>
                </PerformanceStyle.Card>
                <PerformanceStyle.Card>
                    <PerformanceStyle.CardInfo>
                        <span>Taxa de Aceitação</span>
                        <strong>{stats?.acceptanceRate.toFixed(1) ?? 0}%</strong>
                    </PerformanceStyle.CardInfo>
                    <PerformanceStyle.IconWrapper bg="#D1FAE5" color="#047857">
                        <FontAwesomeIcon icon={faCheckCircle} />
                    </PerformanceStyle.IconWrapper>
                </PerformanceStyle.Card>
                <PerformanceStyle.Card>
                    <PerformanceStyle.CardInfo>
                        <span>Nota Média</span>
                        <strong>{stats?.averageRating?.toFixed(1) ?? 'N/A'}</strong>
                    </PerformanceStyle.CardInfo>
                    <PerformanceStyle.IconWrapper bg="#FEF9C3" color="#CA8A04">
                        <FontAwesomeIcon icon={faStar} />
                    </PerformanceStyle.IconWrapper>
                </PerformanceStyle.Card>
            </PerformanceStyle.SummaryCards>

            <PerformanceStyle.ChartsContainer>
                <PerformanceStyle.ChartCard>
                    <Bar data={barData} />
                    <PerformanceStyle.ChartFooter>
                        <strong>Serviços Concluídos por Mês</strong>
                        <p>Histórico dos últimos meses</p>
                    </PerformanceStyle.ChartFooter>
                </PerformanceStyle.ChartCard>
                <PerformanceStyle.ChartCard>
                    <Line data={lineData} />
                    <PerformanceStyle.ChartFooter>
                        <strong>Ganhos Mensais</strong>
                        <p>Em reais (R$)</p>
                    </PerformanceStyle.ChartFooter>
                </PerformanceStyle.ChartCard>
            </PerformanceStyle.ChartsContainer>
        </PerformanceStyle.Container>
    );
};

export default PerformanceDashboard;