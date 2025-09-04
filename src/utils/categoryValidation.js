export function validateRequiredFields(fields, requiredFields) {
    const missingFields = requiredFields.filter(field => {
        const value = fields[field];
        return value === undefined || value === null || value.toString().trim() === '';
    });

    return {
        isValid: missingFields.length === 0,
        missingFields
    };
}
