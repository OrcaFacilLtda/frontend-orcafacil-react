
const isEmpty = (v) => !v || String(v).trim() === "";

export const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email || "").trim());
};

export const validatePhone = (phone) => {
    if (isEmpty(phone)) return true;
    const re = /^\d{10,11}$/;
    return re.test(String(phone));
};

export const validateCEP = (cep) => {
    if (isEmpty(cep)) return true;
    const re = /^\d{8}$/;
    return re.test(String(cep));
};

export const validateProfileForm = (formData, isClient) => {
    if (isEmpty(formData.name)) return "O campo Nome é obrigatório.";
    if (!validateEmail(formData.email)) return "Informe um e-mail válido.";

    if (!validatePhone(formData.phone)) {
        return "O telefone deve conter apenas números e ter 10 ou 11 dígitos.";
    }

    if (!validateCEP(formData.zipCode)) {
        return "O CEP deve conter exatamente 8 números.";
    }


    if (!isEmpty(formData.newPassword)) {
        if (isEmpty(formData.currentPassword)) {
            return "Informe a senha atual para alterar a senha.";
        }
        if (String(formData.newPassword).length < 6) {
            return "A nova senha deve ter pelo menos 6 caracteres.";
        }
    }

    if (!isClient) {
        if (isEmpty(formData.legalName)) {
            return "A Razão Social é obrigatória para prestadores.";
        }
    }

    return null;
};
