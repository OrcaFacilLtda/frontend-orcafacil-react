import styled from "styled-components";
import {
    paletteColors,
    fontSizes,
    fontFamilies,
    fontWeights,
} from "../../../styles/Root";

const Step = styled.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;
    opacity: ${({ $active, $completed }) => ($active || $completed ? 1 : 0.5)};
    font-family: ${fontFamilies.primary};
`;

const StepCircle = styled.div`
    min-width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${({ status }) =>
            status === "completed" ? "#4caf50" :
                    status === "active" ? "#ff9800" : "#e0e0e0"};
    color: ${paletteColors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
    font-weight: ${fontWeights.bold};
    font-family: ${fontFamilies.primary};
`;

const StepContent = styled.div`
    flex: 1;
`;

const StepTitle = styled.h4`
    font-size: 1.1rem;
    margin: 0 0 0.5rem;
`;

const StepDescription = styled.p`
    font-size: 0.95rem;
    color: #666;
`;

const ConfirmButton = styled.button`
    background-color: #4caf50;
    color: white;
    padding: 10px 16px;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
`;

const PendingText = styled.p`
    color: #4caf50;
    font-weight: bold;
    margin-top: 10px;
`;

const OrderDetailsWrapper = styled.div`
    max-width: 800px;
    margin: auto;
    padding: 30px;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 15px;
`;

const MaterialForm = styled.div`
    margin-top: 1rem;
    padding: 1rem;
    background-color: #f9f9f9;
    border-radius: 8px;
    border: 1px solid #eee;
`;

const MaterialInputGroup = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 10px;

    @media (max-width: 600px) {
        flex-direction: column;
    }
`;

const StyledInput = styled.input`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-family: ${fontFamilies.primary};
    font-size: 0.95rem;
    transition: border-color 0.2s;

    &:focus {
        outline: none;
        border-color: ${paletteColors.primary};
    }

    &::placeholder {
        color: #999;
    }

    &[placeholder*="Nome"] {
        flex: 3;
        min-width: 200px;
    }

    &[type="number"] {
        flex: 1;
        min-width: 80px;
    }
`;

const MaterialList = styled.div`
    margin-top: 1rem;
    padding: 1rem;
    background-color: #f0f8ff;
    border-radius: 8px;
    border: 1px solid #d4e8ff;

    /* ✅ ESTAS DUAS LINHAS FORAM ADICIONADAS */
    max-height: 300px; /* Define uma altura máxima de 300 pixels */
    overflow-y: auto; /* Adiciona a barra de rolagem vertical quando o conteúdo ultrapassar a altura máxima */
`;

const MaterialListItem = styled.li`
    display: flex;
    justify-content: space-between;
    padding: 4px 0;
    border-bottom: 1px solid #eee;
    list-style-type: none;
`;

export default {
    Step,
    StepCircle,
    StepContent,
    StepTitle,
    StepDescription,
    ConfirmButton,
    PendingText,
    OrderDetailsWrapper,
    ButtonContainer,
    MaterialForm,
    MaterialInputGroup,
    StyledInput,
    MaterialList,
    MaterialListItem
};

export { ButtonContainer };