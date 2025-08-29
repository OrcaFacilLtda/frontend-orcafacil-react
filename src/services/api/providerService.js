import api from './api';

/**
 * Busca todos os prestadores de serviço que estão com o status ATIVO.
 * Usado na tela do cliente para listar profissionais.
 */
export const getActiveProviders = async () => {
    try {
        const response = await api.get('/api/providers/active');
        return response.data.data;
    } catch (error) {
        console.error("Erro ao buscar prestadores ativos:", error);
        throw error;
    }
};


export const getProvidersById = async (userId) => {
    try {
        const response = await api.get(`/api/providers/${userId}`);
        return response.data.data;
    } catch (error) {
        console.error("Erro ao buscar prestador:", error);
        throw error;
    }
};

/**
 * Busca as estatísticas de desempenho para um prestador específico.
 * Usado no Dashboard de Performance e na tela de Serviços do prestador.
 * @param {number} companyId - O ID da empresa associada ao prestador.
 */
export const getProviderStats = async (companyId) => {
    try {
        const response = await api.get(`/api/statistics/provider/${companyId}`);
        return response.data.data;
    } catch (error) {
        console.error("Erro ao buscar estatísticas do prestador:", error);
        throw error;
    }
};

/**
 * Cria um novo cadastro de prestador (usuário + empresa).
 * Usado na tela de Registro.
 * @param {object} providerData - O payload completo com userRequest, companyRequest e categoryId.
 */
export const createProvider = async (providerData) => {
    try {
        const response = await api.post('/api/providers', providerData);
        return response.data.data;
    } catch (error) {
        console.error("Erro ao criar prestador:", error);
        throw error;
    }
};

/**
 * Busca os dados completos de um prestador pelo seu ID de usuário.
 * Usado na tela de Perfil do prestador.
 * @param {number} providerId - O ID do usuário do prestador.
 */
export const getProviderProfile = async (providerId) => {
    try {
        const response = await api.get(`/api/providers/${providerId}`);
        return response.data.data;
    } catch (error) {
        console.error("Erro ao buscar perfil do prestador:", error);
        throw error;
    }
};

/**
 * Atualiza os dados de um prestador.
 * Usado na tela de Perfil do prestador.
 * @param {number} providerId - O ID do usuário do prestador.
 * @param {object} providerData - O payload de atualização.
 */
export const updateProviderProfile = async (providerId, providerData) => {
    try {
        const response = await api.put(`/api/providers/${providerId}`, providerData);
        return response.data.data;
    } catch (error) {
        console.error("Erro ao atualizar perfil do prestador:", error);
        throw error;
    }
};

/**
 * Busca os dados para os gráficos do dashboard de performance.
 * @param {number} companyId - O ID da empresa do prestador.
 */
export const getProviderChartData = async (companyId) => {
    try {
        const response = await api.get(`/api/statistics/provider/${companyId}/charts`);
        return response.data.data;
    } catch (error) {
        console.error("Erro ao buscar dados dos gráficos do prestador:", error);
        throw error;
    }
};

export const getProviderStatsKPI = async (companyId) => {
    try {
        const response = await api.get(`/api/statistics/provider/${companyId}`);
        return response.data.data; // já com novos pedidos, aceites, pendentes, taxa de aceitação
    } catch (error) {
        console.error("Erro ao buscar KPIs do prestador:", error);
        throw error;
    }
};