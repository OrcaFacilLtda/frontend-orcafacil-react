// src/pages/admin/category/Category.jsx
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import CategoryStyle from './Category.Style.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import EditCategoryModal from '../../../components/ui/modals/edit-category-modal/EditCategoryModal';
import {
    getAllCategories,
    createCategory,
    updateCategory,
    deleteCategory
} from '../../../services/api/categoryService';

export default function Category() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [newCategory, setNewCategory] = useState({ name: '', description: '' });

    const fetchCategories = async () => {
        try {
            setLoading(true);
            const data = await getAllCategories();
            setCategories(data || []);
        } catch (error) {
            Swal.fire('Erro!', 'Não foi possível carregar as categorias.', 'error');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    const handleEditClick = (category) => {
        setSelectedCategory(category);
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        setSelectedCategory(null);
    };

    const handleCategoryUpdate = async (updatedCategory) => {
        try {
            await updateCategory(updatedCategory.id, updatedCategory);
            Swal.fire('Sucesso!', 'Categoria atualizada.', 'success');
            fetchCategories(); // Recarrega a lista
            handleModalClose();
        } catch (error) {
            Swal.fire('Erro!', 'Não foi possível atualizar a categoria.', 'error');
        }
    };

    const handleDeleteCategory = (id) => {
        Swal.fire({
            title: 'Tem certeza?',
            text: "Você não poderá reverter isso!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Sim, apagar!',
            cancelButtonText: 'Cancelar'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await deleteCategory(id);
                    Swal.fire('Apagada!', 'A categoria foi apagada.', 'success');
                    fetchCategories();
                } catch (error) {
                    Swal.fire('Erro!', 'Não foi possível apagar a categoria.', 'error');
                }
            }
        });
    };

    const handleCreateCategory = async () => {
        const { name, description } = newCategory;
        if (!name.trim()) {
            Swal.fire('Atenção', 'O nome da categoria é obrigatório.', 'warning');
            return;
        }

        try {
            await createCategory({ name, description });
            Swal.fire('Criada!', 'Nova categoria adicionada com sucesso.', 'success');
            setNewCategory({ name: '', description: '' });
            fetchCategories();
        } catch (error) {
            Swal.fire('Erro!', 'Não foi possível criar a categoria.', 'error');
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewCategory((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <CategoryStyle.Container>
            <CategoryStyle.Header>
                <h2>Categorias</h2>
                <p>Crie e gerencie as categorias de serviço da plataforma</p>
            </CategoryStyle.Header>

            <CategoryStyle.InfoCards>
                <CategoryStyle.Card>
                    <CategoryStyle.CardInfo>
                        <span>Categorias existentes</span>
                        <strong>{categories.length}</strong>
                    </CategoryStyle.CardInfo>
                    <CategoryStyle.IconWrapper>
                        <FontAwesomeIcon icon={faUsers} />
                    </CategoryStyle.IconWrapper>
                </CategoryStyle.Card>
            </CategoryStyle.InfoCards>

            <CategoryStyle.Sections>
                <CategoryStyle.Section>
                    <CategoryStyle.SectionHeader>
                        <h2>Categorias existentes</h2>
                    </CategoryStyle.SectionHeader>
                    {loading ? <p>Carregando categorias...</p> : (
                        <CategoryStyle.List>
                            {categories.map((category) => (
                                <CategoryStyle.ListItem key={category.id}>
                                    <div>
                                        <strong>{category.name}</strong>
                                        <p>{category.description}</p>
                                    </div>
                                    <CategoryStyle.ButtonsWrapper>
                                        <button onClick={() => handleEditClick(category)}>Editar</button>
                                        <button onClick={() => handleDeleteCategory(category.id)}>Apagar</button>
                                    </CategoryStyle.ButtonsWrapper>
                                </CategoryStyle.ListItem>
                            ))}
                        </CategoryStyle.List>
                    )}
                </CategoryStyle.Section>

                <CategoryStyle.Section>
                    <h2>Nova Categoria</h2>
                    <CategoryStyle.Form>
                        <CategoryStyle.FormGroup>
                            <label>Nome da Categoria</label>
                            <input
                                type="text" name="name"
                                value={newCategory.name} onChange={handleInputChange}
                                placeholder="Ex: Eletricista"
                            />
                        </CategoryStyle.FormGroup>

                        <CategoryStyle.FormGroup>
                            <label>Descrição</label>
                            <input
                                type="text" name="description"
                                value={newCategory.description} onChange={handleInputChange}
                                placeholder="Ex: Serviços de instalação e reparo elétrico"
                            />
                        </CategoryStyle.FormGroup>

                        <CategoryStyle.ButtonCreate type="button" onClick={handleCreateCategory}>
                            Criar Categoria
                        </CategoryStyle.ButtonCreate>
                    </CategoryStyle.Form>
                </CategoryStyle.Section>
            </CategoryStyle.Sections>

            <EditCategoryModal
                isOpen={isModalOpen}
                onClose={handleModalClose}
                category={selectedCategory}
                onSubmit={handleCategoryUpdate}
            />
        </CategoryStyle.Container>
    );
}