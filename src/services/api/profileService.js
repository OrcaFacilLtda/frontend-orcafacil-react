import api from './api';

export const getUserProfile = async (userId) => {
    try {
        const response = await api.get(`/api/users/${userId}`);
        return response.data.data;
    } catch (error) {
        console.error("Erro ao buscar dados do usuário:", error);
        throw error;
    }
};

export const getProviderProfile = async (providerId) => {
    try {
        const response = await api.get(`/api/providers/${providerId}`);
        return response.data.data;
    } catch (error) {
        console.error("Erro ao buscar dados do prestador:", error);
        throw error;
    }
};

export const updateClientProfile = async (userId, userData) => {
    try {
        const response = await api.put(`/api/users/${userId}`, userData);
        return response.data.data;
    } catch (error) {
        console.error("Erro ao atualizar perfil do cliente:", error);
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



export const getProfileByEmail = async (email) => {
    try {
        const response = await api.get(`/api/users/email/${email}`);
        return response.data.data;
    } catch (error) {
        console.error("Erro ao buscar perfil por email:", error);
        throw error;
    }
}