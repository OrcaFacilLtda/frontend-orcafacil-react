import api from './api';


export const createProvider = async (providerData) => {
    try {
        const response = await api.post('/api/providers', providerData);
        return response.data.data;
    } catch (error) {
        console.error("Erro ao criar prestador:", error);
        throw error;
    }
};

export const updateProviderProfile = async (providerId, providerData) => {
    try {
        const response = await api.put(`/api/providers/${providerId}`, providerData);
        return response.data.data;
    } catch (error) {
        console.error("Erro ao atualizar perfil do prestador:", error);
        throw error;
    }
};


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


export const getProviderStats = async (companyId) => {
    try {
        const response = await api.get(`/api/statistics/provider/${companyId}`);
        return response.data.data;
    } catch (error) {
        console.error("Erro ao buscar estatísticas do prestador:", error);
        throw error;
    }
};




export const getProviderProfile = async (providerId) => {
    try {
        const response = await api.get(`/api/providers/${providerId}`);
        return response.data.data;
    } catch (error) {
        console.error("Erro ao buscar perfil do prestador:", error);
        throw error;
    }
};




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
        return response.data.data;
    } catch (error) {
        console.error("Erro ao buscar KPIs do prestador:", error);
        throw error;
    }
};