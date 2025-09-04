
const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

export const validateLoginForm = (formData) => {
    if (!formData.email || formData.email.trim() === "") {
        return "O email é obrigatório.";
    }
    if (!validateEmail(formData.email)) {
        return "Email inválido.";
    }
    if (!formData.password || formData.password.trim() === "") {
        return "A senha é obrigatória.";
    }
    return null; // null = sem erros
};
