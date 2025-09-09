export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

export const validateCPF = (cpf) => {
    const digits = cpf.replace(/\D/g, '');
    const regex = /^\d{11}$/;
    return regex.test(digits);
};

export const validateCNPJ = (cnpj) => {
    const digits = cnpj.replace(/\D/g, ''); 
    const regex = /^\d{14}$/;
    return regex.test(digits);
};

export const validatePassword = (password) => {
    if (password.length < 6) return false;

    let hasLetter = false;
    let hasNumber = false;

    for (let i = 0; i < password.length; i++) {
        const char = password[i];
        if (char >= '0' && char <= '9') {
            hasNumber = true;
        } else if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')) {
            hasLetter = true;
        }
        if (hasLetter && hasNumber) return true;
    }

    return false;
};

export const validatePhone = (phone) => {
    const digits = phone.replace(/\D/g, '');
    return digits.length === 10 || digits.length === 11;
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
