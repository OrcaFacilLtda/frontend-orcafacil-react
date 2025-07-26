import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import DashboardStyle from './Dashboard.Syle.jsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHammer, faCheckSquare } from '@fortawesome/free-solid-svg-icons';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const Dashboard = () => {
    const lineData = {
        labels: ['1ª Semana', '2ª Semana', '3ª Semana', '4ª Semana'],
        datasets: [
            {
                label: 'Novos Usuários',
                data: [30, 150, 90, 90],
                borderColor: '#3b82f6',
                backgroundColor: 'rgba(59, 130, 246, 0.2)',
                fill: true,
                tension: 0.3,
            },
        ],
    };

    const barData = {
        labels: ['Eletricista', 'Encanador', 'Marceneiro', 'Pintor', 'Jardineiro'],
        datasets: [
            {
                label: 'Serviços',
                data: [120, 200, 150, 80, 110],
                backgroundColor: '#3b82f6',
            },
        ],
    };

    return (
        <DashboardStyle.Container>
            <DashboardStyle.Header>
                <h2>Dashboard</h2>
                <p>Gerência o fluxo do seu sistema</p>
            </DashboardStyle.Header>

            <DashboardStyle.SummaryCards>
                <DashboardStyle.Card>
                    <DashboardStyle.CardInfo>
                        <span>Novos Usuários Cadastrados (mês atual)</span>
                        <strong>12</strong>
                    </DashboardStyle.CardInfo>
                    <DashboardStyle.IconWrapper>
                        <FontAwesomeIcon icon={faUser} />
                    </DashboardStyle.IconWrapper>
                </DashboardStyle.Card>

                <DashboardStyle.Card>
                    <DashboardStyle.CardInfo>
                        <span>Prestadores Ativos (%)</span>
                        <strong>8</strong>
                    </DashboardStyle.CardInfo>
                    <DashboardStyle.IconWrapper>
                        <FontAwesomeIcon icon={faHammer} />
                    </DashboardStyle.IconWrapper>
                </DashboardStyle.Card>

                <DashboardStyle.Card>
                    <DashboardStyle.CardInfo>
                        <span>Total de Serviços Concluídos (mês atual)</span>
                        <strong>3</strong>
                    </DashboardStyle.CardInfo>
                    <DashboardStyle.IconWrapper>
                        <FontAwesomeIcon icon={faCheckSquare} />
                    </DashboardStyle.IconWrapper>
                </DashboardStyle.Card>
            </DashboardStyle.SummaryCards>

            <DashboardStyle.ChartsContainer>
                <DashboardStyle.ChartCard>
                    <Line data={lineData} options={{ responsive: true, plugins: { legend: { display: false } } }} />
                    <DashboardStyle.ChartFooter>
                        <strong>Evolução Semanal de Novos Usuários</strong>
                        <p>Mostra quantos usuários se cadastraram a cada semana.</p>
                    </DashboardStyle.ChartFooter>
                </DashboardStyle.ChartCard>

                <DashboardStyle.ChartCard>
                    <Bar data={barData} options={{ responsive: true, plugins: { legend: { display: false } } }} />
                    <DashboardStyle.ChartFooter>
                        <strong>Top 5 Categorias de Serviços Mais Solicitadas</strong>
                        <p>Exibe as categorias de serviço mais contratadas na plataforma.</p>
                    </DashboardStyle.ChartFooter>
                </DashboardStyle.ChartCard>
            </DashboardStyle.ChartsContainer>
        </DashboardStyle.Container>
    );
};

export default Dashboard;
