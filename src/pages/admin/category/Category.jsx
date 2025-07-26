import React, { useState } from 'react';
import CategoryStyle from './Category.Style.jsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faSearch } from '@fortawesome/free-solid-svg-icons';

import EditCategoryModal from '../../../components/ui/modals/edit-category-modal/EditCategoryModal.jsx';
export default function Category() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const [categories, setCategories] = useState([
        { id: 1, name: 'Negócios', description: 'Categoria de negócios', status: 'ativo' },
        { id: 2, name: 'Eletricista', description: 'Serviços elétricos', status: 'inativo' },
        { id: 3, name: 'Fernando Henrique', description: 'Outros serviços', status: 'ativo' },
    ]);

    const [newCategory, setNewCategory] = useState({
        name: '',
        description: '',
        status: '',
    });

    const handleEditClick = (category) => {
        setSelectedCategory(category);
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        setSelectedCategory(null);
    };

    const handleCategoryUpdate = (updatedCategory) => {
        setCategories((prev) =>
            prev.map((cat) => (cat.id === updatedCategory.id ? updatedCategory : cat))
        );
        handleModalClose();
    };

    const handleDeleteCategory = (id) => {
        const confirmed = window.confirm('Tem certeza que deseja apagar esta categoria?');
        if (confirmed) {
            setCategories((prev) => prev.filter((cat) => cat.id !== id));
        }
    };

    const handleCreateCategory = () => {
        const { name, description, status } = newCategory;
        if (!name || !status) {
            alert('Preencha todos os campos obrigatórios.');
            return;
        }

        const newCat = {
            id: categories.length + 1,
            name,
            description,
            status,
        };

        setCategories([...categories, newCat]);

        // Limpa o formulário
        setNewCategory({ name: '', description: '', status: '' });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewCategory((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <CategoryStyle.Container>
            <CategoryStyle.Header>
                <h2>Categorias</h2>
                <p>Crie categorias de serviço</p>
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
                        <CategoryStyle.SearchInputWrapper>
                            <FontAwesomeIcon icon={faSearch} />
                            <input type="text" placeholder="Pesquisar por nome" />
                        </CategoryStyle.SearchInputWrapper>
                    </CategoryStyle.SectionHeader>

                    <CategoryStyle.List>
                        {categories.map((category) => (
                            <CategoryStyle.ListItem key={category.id}>
                                <strong>{category.name}</strong>
                                <CategoryStyle.ButtonsWrapper>
                                    <button onClick={() => handleEditClick(category)}>Editar</button>
                                    <button onClick={() => handleDeleteCategory(category.id)}>Apagar</button>
                                </CategoryStyle.ButtonsWrapper>
                            </CategoryStyle.ListItem>
                        ))}
                    </CategoryStyle.List>
                </CategoryStyle.Section>

                <CategoryStyle.Section>
                    <h2>Nova Categoria</h2>
                    <CategoryStyle.Form>
                        <CategoryStyle.FormGroup>
                            <label>Nome da Categoria *</label>
                            <input
                                type="text"
                                name="name"
                                value={newCategory.name}
                                onChange={handleInputChange}
                                placeholder="Nome"
                            />
                        </CategoryStyle.FormGroup>

                        <CategoryStyle.FormGroup>
                            <label>Descrição</label>
                            <input
                                type="text"
                                name="description"
                                value={newCategory.description}
                                onChange={handleInputChange}
                                placeholder="Descrição"
                            />
                        </CategoryStyle.FormGroup>

                        <CategoryStyle.FormGroup>
                            <label>Status *</label>
                            <input
                                type="text"
                                name="status"
                                value={newCategory.status}
                                onChange={handleInputChange}
                                placeholder="Status (ativo/inativo)"
                            />
                        </CategoryStyle.FormGroup>

                        <CategoryStyle.ButtonCreate onClick={handleCreateCategory}>
                            Criar Categoria
                        </CategoryStyle.ButtonCreate>
                    </CategoryStyle.Form>
                </CategoryStyle.Section>
            </CategoryStyle.Sections>

            {/* Modal de edição */}
            <EditCategoryModal
                isOpen={isModalOpen}
                onClose={handleModalClose}
                category={selectedCategory}
                onSubmit={handleCategoryUpdate}
            />
        </CategoryStyle.Container>
    );
}
