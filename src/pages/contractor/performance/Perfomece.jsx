import React from "react";
import PerformanceStyle from "./Perfomece.Style.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBriefcase,
    faCheckCircle,
    faStar
} from "@fortawesome/free-solid-svg-icons";
import { Bar, Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const PerformanceDashboard = () => {
    const barData = {
        labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
        datasets: [
            {
                label: "Serviços",
                data: [18, 22, 15, 28, 24, 31],
                backgroundColor: "#3B82F6"
            }
        ]
    };

    const lineData = {
        labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
        datasets: [
            {
                label: "Ganhos (R$)",
                data: [3200, 4100, 2800, 5200, 4800, 6100],
                borderColor: "#10B981",
                backgroundColor: "#10B981",
                fill: false
            }
        ]
    };

    return (
        <PerformanceStyle.Container>
            <PerformanceStyle.Header>
                <h2>Desempenho</h2>
                <p>Acompanhe suas métricas e resultados</p>
            </PerformanceStyle.Header>

            <PerformanceStyle.SummaryCards>
                <PerformanceStyle.Card>
                    <PerformanceStyle.CardInfo>
                        <span>Total de Serviços</span>
                        <strong>127</strong>
                    </PerformanceStyle.CardInfo>
                    <PerformanceStyle.IconWrapper bg="#DBEAFE" color="#1D4ED8">
                        <FontAwesomeIcon icon={faBriefcase} />
                    </PerformanceStyle.IconWrapper>
                </PerformanceStyle.Card>

                <PerformanceStyle.Card>
                    <PerformanceStyle.CardInfo>
                        <span>Taxa de Aceitação</span>
                        <strong>84%</strong>
                    </PerformanceStyle.CardInfo>
                    <PerformanceStyle.IconWrapper bg="#D1FAE5" color="#047857">
                        <FontAwesomeIcon icon={faCheckCircle} />
                    </PerformanceStyle.IconWrapper>
                </PerformanceStyle.Card>

                <PerformanceStyle.Card>
                    <PerformanceStyle.CardInfo>
                        <span>Nota Média</span>
                        <strong>4.8</strong>
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
                        <strong>Serviços por Mês</strong>
                        <p>Histórico dos últimos 6 meses</p>
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
