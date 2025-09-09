import api from './api';


export const getServiceDetails = async (serviceId) => {
    try {
        const response = await api.get(`/api/services/${serviceId}`);
        return response.data.data;
    } catch (error) {
        console.error(`Erro ao buscar detalhes do serviço ${serviceId}:`, error);
        throw error;
    }
};

export const acceptServiceRequest = async (serviceId, providerId) => {
    try {
        const response = await api.post(`/api/services/${serviceId}/provider/${providerId}/accept`);
        return response.data.data;
    } catch (error) {
        console.error(`Erro ao aceitar o serviço ${serviceId}:`, error);
        throw error;
    }
};

export const rejectServiceRequest = async (serviceId, providerId) => {
    try {
        const response = await api.post(`/api/services/${serviceId}/provider/${providerId}/reject`);
        return response.data.data;
    } catch (error) {
        console.error(`Erro ao recusar o serviço ${serviceId}:`, error);
        throw error;
    }
};

export const confirmVisitStep = async (serviceId, userId) => {
    try {
        const response = await api.post(`/api/services/${serviceId}/confirm-visit/${userId}`, {});
        return response.data.data;
    } catch (error) {
        console.error(`Erro ao confirmar visita para o serviço ${serviceId}:`, error);
        throw error;
    }
};

export const confirmDatesStep = async (serviceId, userId) => {
    try {
        const response = await api.post(`/api/services/${serviceId}/confirm-dates/${userId}`, {});
        return response.data.data;
    } catch (error) {
        console.error(`Erro ao confirmar datas para o serviço ${serviceId}:`, error);
        throw error;
    }
};

export const confirmMaterialsStep = async (serviceId, userId) => {
    try {
        const response = await api.post(`/api/services/${serviceId}/confirm-materials/${userId}`, {});
        return response.data.data;
    } catch (error) {
        console.error(`Erro ao confirmar materiais para o serviço ${serviceId}:`, error);
        throw error;
    }
};

export const confirmServiceStep = async (serviceId, userId, step) => {
    switch (step) {
        case "visit":
            return confirmVisitStep(serviceId, userId);
        case "dates":
            return confirmDatesStep(serviceId, userId);
        case "materials":
            return confirmMaterialsStep(serviceId, userId);
        default:
            throw new Error(`Etapa inválida: ${step}`);
    }
};



export const getVisitProposals = async (serviceId) => {
    try {
        const response = await api.get(`/api/services/${serviceId}/visit-proposals`);
        return response.data.data;
    } catch (error) {
        console.error(`Erro ao buscar propostas de visita para o serviço ${serviceId}:`, error);
        throw error;
    }
};

export const getDateProposals = async (serviceId) => {
    try {
        const response = await api.get(`/api/services/${serviceId}/date-proposals`);
        return response.data.data;
    } catch (error) {
        console.error(`Erro ao buscar propostas de data para o serviço ${serviceId}:`, error);
        throw error;
    }
};

export const sendVisitProposal = async (serviceId, date, proposerRole) => {
    try {
        const response = await api.post(`/api/services/${serviceId}/propose-visit`, {
            date,
            proposerRole,
        });
        return response.data.data;
    } catch (error) {
        console.error(`Erro ao enviar proposta de visita para o serviço ${serviceId}:`, error);
        throw error;
    }
};

export const sendDateProposal = async (serviceId, startDate, endDate, proposerRole) => {
    try {
        const response = await api.post(`/api/services/${serviceId}/propose-dates`, {
            startDate,
            endDate,
            proposerRole,
        });
        return response.data.data;
    } catch (error) {
        console.error(`Erro ao enviar proposta de datas para o serviço ${serviceId}:`, error);
        throw error;
    }
};

export const sendMaterialList = async (serviceId, materials = []) => {
    try {
        const payload = {
            materials: materials,
        };
        const response = await api.post(`/api/services/${serviceId}/materials`, payload);
        return response.data.data;
    } catch (error) {
        console.error(`Erro ao enviar lista de materiais para o serviço ${serviceId}:`, error);
        throw error;
    }
};

export const getMaterialList = async (serviceId) => {
    try {
        const response = await api.get(`/api/services/${serviceId}/materials`);
        return response.data.data;
    } catch (error) {
        console.error(`Erro ao buscar a lista de materiais do serviço ${serviceId}:`, error);
        throw error;
    }
};


export const requestBudgetRevision = async (serviceId, userId) => {
    try {
        const response = await api.post(`/api/services/${serviceId}/request-revision?clientId=${userId}`);
        return response.data.data;
    } catch (error) {
        console.error(`Erro ao solicitar revisão do orçamento do serviço ${serviceId}:`, error);
        throw error;
    }
};

export const submitEvaluation = async (serviceId, userId, rating) => {
    try {
        const response = await api.post(`/api/services/${serviceId}/evaluate?clientId=${userId}`, {
            stars: rating,
        });
        return response.data.data;
    } catch (error) {
        console.error(`Erro ao enviar avaliação do serviço ${serviceId}:`, error);
        throw error;
    }
};