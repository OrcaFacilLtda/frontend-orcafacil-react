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

/**
 * Cria uma nova solicitação de serviço.
 * @param {object} serviceData - Dados da solicitação.
 */
export const createServiceRequest = async (serviceData) => {
    try {
        const response = await api.post('/api/services', serviceData);
        return response.data.data;
    } catch (error) {
        console.error("Erro ao criar solicitação de serviço:", error);
        throw error;
    }
};