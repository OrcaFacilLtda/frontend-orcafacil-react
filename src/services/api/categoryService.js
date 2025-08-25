// src/services/api/categoryService.js
import api from './api';

export const getAllCategories = async () => {
    try {
        const response = await api.get('/api/categories');
        return response.data.data;
    } catch (error) {
        console.error("Erro ao buscar categorias:", error);
        throw error;
    }
};

export const createCategory = async (categoryData) => {
    try {
        // O backend espera um objeto com name e description, o ID é gerado lá
        const payload = {
            name: categoryData.name,
            description: categoryData.description
        };
        const response = await api.post('/api/categories', payload);
        return response.data.data;
    } catch (error) {
        console.error("Erro ao criar categoria:", error);
        throw error;
    }
};

export const updateCategory = async (categoryId, categoryData) => {
    try {
        const response = await api.put(`/api/categories/${categoryId}`, categoryData);
        return response.data.data;
    } catch (error) {
        console.error("Erro ao atualizar categoria:", error);
        throw error;
    }
};

export const deleteCategory = async (categoryId) => {
    try {
        await api.delete(`/api/categories/${categoryId}`);
    } catch (error) {
        console.error("Erro ao deletar categoria:", error);
        throw error;
    }
};