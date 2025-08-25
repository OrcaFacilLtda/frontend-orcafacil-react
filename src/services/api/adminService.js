import api from './api';

/**
 * Busca todos os usuários cadastrados no sistema.
 */
export const getAllUsers = async () => {
    try {
        const response = await api.get('/api/users');
        return response.data.data;
    } catch (error) {
        console.error("Erro ao buscar todos os usuários:", error);
        throw error;
    }
};

/**
 * Busca usuários por um status específico (ex: PENDING).
 */
export const getUsersByStatus = async (status) => {
    try {
        // O enum no backend é em maiúsculas (PENDING, APPROVED, etc.)
        const response = await api.get(`/api/users/status/${status.toUpperCase()}`);
        return response.data.data;
    } catch (error) {
        console.error(`Erro ao buscar usuários com status ${status}:`, error);
        throw error;
    }
};

/**
 * Atualiza o status de um usuário (para aprovar ou rejeitar).
 * VERSÃO AJUSTADA E MAIS EFICIENTE
 */
export const updateUserStatus = async (userId, newStatus) => {
    try {
        // Envia apenas o novo status para o endpoint PATCH, que é mais seguro e eficiente.
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

/**
 * Deleta um usuário do sistema.
 */
export const deleteUser = async (userId) => {
    try {
        await api.delete(`/api/users/${userId}`);
    } catch (error) {
        console.error(`Erro ao deletar usuário ${userId}:`, error);
        throw error;
    }
}

/**
 * Busca as estatísticas para os cartões do dashboard do administrador.
 */
export const getAdminDashboardStats = async () => {
    try {
        const response = await api.get('/api/statistics/admin');
        return response.data.data;
    } catch (error) {
        console.error("Erro ao buscar estatísticas do dashboard:", error);
        throw error;
    }
};

/**
 * Busca os dados para os gráficos do dashboard do administrador.
 */
export const getAdminChartData = async () => {
    try {
        const response = await api.get('/api/statistics/admin/charts');
        return response.data.data;
    } catch (error) {
        console.error("Erro ao buscar dados dos gráficos do dashboard:", error);
        throw error;
    }
};