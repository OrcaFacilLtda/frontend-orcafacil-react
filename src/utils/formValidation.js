
export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

export const validateCPF = (cpf) => {
    const regex = /^\d{11}$/;
    return regex.test(cpf);
};

export const validateCNPJ = (cnpj) => {
    const regex = /^\d{14}$/;
    return regex.test(cnpj);
};

export const validatePassword = (password) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    return regex.test(password);
};

export const validatePhone = (phone) => {
    const regex = /^\d{10,11}$/;
    return regex.test(phone);
};

export const validateRegisterForm = (formData, userType) => {
    if (!formData.name) return "O nome é obrigatório.";
    if (!validateEmail(formData.email)) return "Email inválido.";
    if (!validatePassword(formData.password)) return "A senha deve ter no mínimo 6 caracteres e conter letras e números.";
    if (!validatePhone(formData.phone)) return "Telefone inválido.";
    if (!validateCPF(formData.cpf)) return "CPF inválido.";

    if (userType === "PROVIDER") {
        if (!formData.legalName) return "A razão social é obrigatória.";
        if (!validateCNPJ(formData.cnpj)) return "CNPJ inválido.";
        if (!formData.categoryId) return "Selecione uma categoria.";
    }

    return null;
};
