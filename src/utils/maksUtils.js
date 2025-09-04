
export function maskPhone(value) {
    if (!value) return '';
    const digits = value.replace(/\D/g, '');
    if (digits.length <= 10) {
        return digits.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3').replace(/-$/, '');
    }
    return digits.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3').replace(/-$/, '');
}


export function maskCPF(value) {
    if (!value) return '';
    const digits = value.replace(/\D/g, '').slice(0, 11);

    if (digits.length <= 3) {
        return digits;
    } else if (digits.length <= 6) {
        return digits.replace(/(\d{3})(\d+)/, '$1.$2');
    } else if (digits.length <= 9) {
        return digits.replace(/(\d{3})(\d{3})(\d+)/, '$1.$2.$3');
    } else {
        return digits.replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/, '$1.$2.$3-$4');
    }
}


export function maskCNPJ(value) {
    if (!value) return '';
    const digits = value.replace(/\D/g, '');
    return digits
        .replace(/^(\d{2})(\d)/, '$1.$2')
        .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
        .replace(/\.(\d{3})(\d)/, '.$1/$2')
        .replace(/(\d{4})(\d)/, '$1-$2');
}


export function maskCEP(value) {
    if (!value) return '';
    const digits = value.replace(/\D/g, '');
    return digits.replace(/(\d{5})(\d)/, '$1-$2');
}

export function unmask(value) {
    if (!value) return '';
    return value.replace(/\D/g, '');
}
