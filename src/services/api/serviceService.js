// src/services/api/serviceService.js
import api from './api';

export const getServicesByProvider = async (companyId) => {
    try {
        const response = await api.get(`/api/services/provider/${companyId}`);
        return response.data.data;
    } catch (error) {
        console.error("Erro ao buscar serviços do prestador:", error);
        throw error;
    }
};

export const getServicesByClient = async (userId) => {
    try {
        const response = await api.get(`/api/services/user/${userId}`);
        return response.data.data;
    } catch (error) {
        console.error("Erro ao buscar serviços do cliente:", error);
        throw error;
    }
};