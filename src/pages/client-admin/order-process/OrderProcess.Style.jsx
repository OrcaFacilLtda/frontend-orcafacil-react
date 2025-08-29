import styled from "styled-components";
import {
    paletteColors,
    fontSizes,
    fontFamilies,
    fontWeights,
} from "../../../styles/Root";

// ✅ Props alteradas para '$active' e '$completed'
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

// ... O resto do arquivo de estilo permanece o mesmo ...
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

export default {
    Step,
    StepCircle,
    StepContent,
    StepTitle,
    StepDescription,
    ConfirmButton,
    PendingText,
    OrderDetailsWrapper,
    ButtonContainer
};

export { ButtonContainer };