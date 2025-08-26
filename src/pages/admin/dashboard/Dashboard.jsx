import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import Swal from 'sweetalert2';
import DashboardStyle from './Dashboard.Syle.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHammer, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { getAdminDashboardStats, getAdminChartData } from '../../../services/api/adminService';

import {
    Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
    const [stats, setStats] = useState(null);
    const [chartData, setChartData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                setLoading(true);
                const [statsData, charts] = await Promise.all([
                    getAdminDashboardStats(),
                    getAdminChartData()
                ]);
                setStats(statsData);
                setChartData(charts);
            } catch (error) {
                console.error("Falha ao carregar dados do dashboard:", error);
                Swal.fire('Erro!', 'Não foi possível carregar os dados do dashboard.', 'error');
            } finally {
                setLoading(false);
            }
        };
        fetchDashboardData();
    }, []);

    const lineData = {
        labels: chartData?.userRegistrationLabels || [],
        datasets: [{
            label: 'Novos Utilizadores',
            data: chartData?.userRegistrationData || [],
            borderColor: '#3b82f6',
            backgroundColor: 'rgba(59, 130, 246, 0.2)',
            fill: true,
            tension: 0.3,
        }],
    };

    const barData = {
        labels: chartData?.servicesByCategoryLabels || [],
        datasets: [{
            label: 'Serviços por Categoria',
            data: chartData?.servicesByCategoryData || [],
            backgroundColor: '#3b82f6',
        }],
    };

    if (loading) {
        return <DashboardStyle.Container><h2>A carregar Dashboard...</h2></DashboardStyle.Container>;
    }

    return (
        <DashboardStyle.Container>
            <DashboardStyle.Header>
                <h2>Dashboard</h2>
                <p>Gerencie o fluxo do seu sistema</p>
            </DashboardStyle.Header>

            <DashboardStyle.SummaryCards>
                <DashboardStyle.Card>
                    <DashboardStyle.CardInfo>
                        <span>Total de Utilizadores</span>
                        <strong>{stats?.totalUsers ?? 0}</strong>
                    </DashboardStyle.CardInfo>
                    <DashboardStyle.IconWrapper><FontAwesomeIcon icon={faUser} /></DashboardStyle.IconWrapper>
                </DashboardStyle.Card>
                <DashboardStyle.Card>
                    <DashboardStyle.CardInfo>
                        <span>Prestadores Ativos</span>
                        <strong>{stats?.activeProviders ?? 0}</strong>
                    </DashboardStyle.CardInfo>
                    <DashboardStyle.IconWrapper><FontAwesomeIcon icon={faHammer} /></DashboardStyle.IconWrapper>
                </DashboardStyle.Card>
                <DashboardStyle.Card>
                    <DashboardStyle.CardInfo>
                        <span>Serviços Concluídos</span>
                        <strong>{stats?.completedServicesThisMonth ?? 0}</strong>
                    </DashboardStyle.CardInfo>
                    <DashboardStyle.IconWrapper><FontAwesomeIcon icon={faCheckSquare} /></DashboardStyle.IconWrapper>
                </DashboardStyle.Card>
            </DashboardStyle.SummaryCards>

            <DashboardStyle.ChartsContainer>
                <DashboardStyle.ChartCard>
                    <Line data={lineData} options={{ responsive: true, plugins: { legend: { display: false } } }} />
                    <DashboardStyle.ChartFooter>
                        <strong>Evolução de Novos Utilizadores</strong>
                        <p>Mostra quantos utilizadores se registaram por período.</p>
                    </DashboardStyle.ChartFooter>
                </DashboardStyle.ChartCard>
                <DashboardStyle.ChartCard>
                    <Bar data={barData} options={{ responsive: true, plugins: { legend: { display: false } } }} />
                    <DashboardStyle.ChartFooter>
                        <strong>Serviços por Categoria</strong>
                        <p>Exibe os serviços mais contratados na plataforma.</p>
                    </DashboardStyle.ChartFooter>
                </DashboardStyle.ChartCard>
            </DashboardStyle.ChartsContainer>
        </DashboardStyle.Container>
    );
};

export default Dashboard;