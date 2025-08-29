import api from './api';

/**
 * Busca os detalhes de um serviço específico pelo ID.
 */
export const getServiceDetails = async (serviceId) => {
    try {
        const response = await api.get(`/api/services/${serviceId}`);
        console.log(response.data.data);
        return response.data.data;
    } catch (error) {
        console.error(`Erro ao buscar detalhes do serviço ${serviceId}:`, error);
        throw error;
    }
};

/**
 * Prestador aceita uma solicitação de serviço.
 */
export const acceptServiceRequest = async (serviceId, providerId) => {
    try {
        const response = await api.post(`/api/services/${serviceId}/provider/${providerId}/accept`);
        return response.data.data;
    } catch (error) {
        console.error(`Erro ao aceitar o serviço ${serviceId}:`, error);
        throw error;
    }
};

/**
 * Prestador recusa uma solicitação de serviço.
 */
export const rejectServiceRequest = async (serviceId, providerId) => {
    try {
        const response = await api.post(`/api/services/${serviceId}/provider/${providerId}/reject`);
        return response.data.data;
    } catch (error) {
        console.error(`Erro ao recusar o serviço ${serviceId}:`, error);
        throw error;
    }
};

// --- NOVAS FUNÇÕES ADICIONADAS ---

/**
 * Confirma a etapa de visita técnica.
 * @param {number} serviceId - ID do serviço.
 * @param {number} userId - ID do usuário (cliente ou prestador) confirmando.
 */
export const confirmVisitStep = async (serviceId, userId) => {
    try {
        const response = await api.post(`/api/services/${serviceId}/confirm-visit/${userId}`);
        return response.data.data;
    } catch (error) {
        console.error(`Erro ao confirmar visita para o serviço ${serviceId}:`, error);
        throw error;
    }
};

/**
 * Confirma a etapa de datas da obra.
 * @param {number} serviceId -
 * @param {number} userId
 */
export const confirmDatesStep = async (serviceId, userId) => {
    try {
        const response = await api.post(`/api/services/${serviceId}/confirm-dates/${userId}`);
        return response.data.data;
    } catch (error) {
        console.error(`Erro ao confirmar datas para o serviço ${serviceId}:`, error);
        throw error;
    }
};

/**
 * Confirma a etapa de materiais/orçamento.
 * @param {number} serviceId
 * @param {number} userId
 */
export const confirmMaterialsStep = async (serviceId, userId) => {
    try {
        const response = await api.post(`/api/services/${serviceId}/confirm-materials/${userId}`);
        return response.data.data;
    } catch (error) {
        console.error(`Erro ao confirmar materiais para o serviço ${serviceId}:`, error);
        throw error;
    }
};