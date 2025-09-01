import api from './api';


export const getAllUsers = async () => {
    try {
        const response = await api.get('/api/users');
        return response.data.data;
    } catch (error) {
        console.error("Erro ao buscar todos os usuários:", error);
        throw error;
    }
};


export const getUsersByStatus = async (status) => {
    try {
        const response = await api.get(`/api/users/status/${status.toUpperCase()}`);
        return response.data.data;
    } catch (error) {
        console.error(`Erro ao buscar usuários com status ${status}:`, error);
        throw error;
    }
};


export const updateUserStatus = async (userId, newStatus) => {
    try {
        const payload = {
            status: newStatus.toUpperCase()
        };
        const response = await api.patch(`/api/users/${userId}/status`, payload);
        return response.data.data;

    } catch (error) {
        console.error(`Erro ao atualizar status do usuário ${userId}:`, error);
        throw error;
    }
};


export const deleteUser = async (userId) => {
    try {
        await api.delete(`/api/users/${userId}`);
    } catch (error) {
        console.error(`Erro ao deletar usuário ${userId}:`, error);
        throw error;
    }
}


export const getAdminDashboardStats = async () => {
    try {
        const response = await api.get('/api/statistics/admin');
        return response.data.data;
    } catch (error) {
        console.error("Erro ao buscar estatísticas do dashboard:", error);
        throw error;
    }
};


export const getAdminChartData = async () => {
    try {
        const response = await api.get('/api/statistics/admin/charts');
        return response.data.data;
    } catch (error) {
        console.error("Erro ao buscar dados dos gráficos do dashboard:", error);
        throw error;
    }
};