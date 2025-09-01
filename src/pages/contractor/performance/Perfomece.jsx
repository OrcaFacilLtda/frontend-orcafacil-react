import React, { useState, useEffect } from "react";
import PerformanceStyle from "./Perfomece.Style.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faCheckCircle, faStar } from "@fortawesome/free-solid-svg-icons";
import { Bar } from "react-chartjs-2"; // ✅ Line foi removido
import { getProviderStats, getProviderChartData } from "../../../services/api/providerService.js";
import { useAuth } from "../../../hooks/useAuth.js";
import {
    Chart as ChartJS,
    CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend // ✅ PointElement e LineElement foram removidos
} from "chart.js";

// ✅ Registro de componentes do ChartJS atualizado
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const PerformanceDashboard = () => {
    const { user, providerData } = useAuth();
    const [stats, setStats] = useState(null);
    const [chartData, setChartData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        if (!user || user.userType !== 'PROVIDER' || !providerData) {
            setLoading(false);
            return;
        }

        const fetchPerformanceData = async () => {
            try {
                setLoading(true);
                const companyId = providerData.company.id;

                if (!companyId) {
                    setError("ID da empresa não encontrado.");
                    setLoading(false);
                    return;
                }

                const [statsData, charts] = await Promise.all([
                    getProviderStats(companyId),
                    getProviderChartData(companyId)
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
    }, [user, providerData]);

    const barData = {
        labels: chartData?.servicesByMonthLabels || [],
        datasets: [{
            label: "Serviços Concluídos",
            data: chartData?.servicesByMonthData || [],
            backgroundColor: "#3B82F6"
        }]
    };

    // ✅ Gráfico de linha e 'lineData' foram removidos

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
            </PerformanceStyle.ChartsContainer>
        </PerformanceStyle.Container>
    );
};

export default PerformanceDashboard;