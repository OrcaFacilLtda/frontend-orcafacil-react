// src/services/api/profileService.js
import api from './api';

// Busca os dados de um usuário (serve para cliente e para a parte 'user' do prestador)
export const getUserProfile = async (userId) => {
    try {
        const response = await api.get(`/api/users/${userId}`);
        return response.data.data;
    } catch (error) {
        console.error("Erro ao buscar dados do usuário:", error);
        throw error;
    }
};

// Busca os dados completos de um prestador (user + company + category)
export const getProviderProfile = async (providerId) => {
    try {
        const response = await api.get(`/api/providers/${providerId}`);
        return response.data.data;
    } catch (error) {
        console.error("Erro ao buscar dados do prestador:", error);
        throw error;
    }
};


// Atualiza o perfil de um CLIENTE
export const updateClientProfile = async (userId, userData) => {
    try {
        const response = await api.put(`/api/users/${userId}`, userData);
        return response.data.data;
    } catch (error) {
        console.error("Erro ao atualizar perfil do cliente:", error);
        throw error;
    }
};

// Atualiza o perfil de um PRESTADOR
export const updateProviderProfile = async (providerId, providerData) => {
    try {
        const response = await api.put(`/api/providers/${providerId}`, providerData);
        return response.data.data;
    } catch (error) {
        console.error("Erro ao atualizar perfil do prestador:", error);
        throw error;
    }
};