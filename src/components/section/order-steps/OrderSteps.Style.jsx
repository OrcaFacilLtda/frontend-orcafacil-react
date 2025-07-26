import styled from "styled-components";
import {
    paletteColors,
    fontWeights,
    fontFamilies,
    fontSizes,
} from '../../../styles/Root.jsx';

const OrderDetailsWrapper = styled.div`
    padding: 30px;
    background-color: ${paletteColors.white};
    border-radius: 10px;
    font-family: ${fontFamilies.primary};
`;

const Step = styled.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;
    opacity: ${({ active, completed }) => (active || completed ? 1 : 0.5)};
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
    font-family: ${fontFamilies.primary};
`;

const StepTitle = styled.div`
    font-weight: ${fontWeights.bold};
    margin-bottom: 5px;
    font-family: ${fontFamilies.primary};
`;

const StepDescription = styled.div`
    color: #777;
    font-family: ${fontFamilies.primary};
`;

const ActionBox = styled.div`
    background: #fff3cd;
    border: 1px solid #ffeeba;
    padding: 12px 15px;
    border-radius: 8px;
    margin-top: 10px;
    font-family: ${fontFamilies.primary};
`;

const CalendarWrapper = styled.div`
    margin-top: 10px;
    background: ${paletteColors.white};
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 10px;
    width: fit-content;
    font-family: ${fontFamilies.primary};
`;

const ConfirmButton = styled.button`
    background-color: #28a745;
    color: ${paletteColors.white};
    padding: 8px 16px;
    border: none;
    margin-right: 10px;
    border-radius: 5px;
    font-weight: ${fontWeights.bold};
    cursor: pointer;
    font-family: ${fontFamilies.primary};
`;

const SecondaryButton = styled.button`
    margin-inline: 5px;
    background-color: #dee2e6;
    padding: 8px 16px;
    border: none;
    border-radius: 5px;
    color: #333;
    display: inline-flex;
    align-items: center;
    gap: 15px;
    cursor: pointer;
    font-family: ${fontFamilies.primary};
`;

const PendingText = styled.p`
    margin-top: 10px;
    color: #28a745;
    font-weight: ${fontWeights.semiBold};
    font-family: ${fontFamilies.primary};
`;

const DateRangeWrapper = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
    margin-top: 10px;
    font-family: ${fontFamilies.primary};
`;

const DateLabel = styled.label`
    font-weight: ${fontWeights.semiBold};
    font-size: ${fontSizes.sm};
    color: #333;
    font-family: ${fontFamilies.primary};
`;

const DateInput = styled.input`
    padding: 10px 14px;
    border-radius: 8px;
    border: 1.8px solid #ccc;
    font-size: 15px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    box-shadow: inset 0 1px 3px rgba(0,0,0,0.1);
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
    width: 160px;

    &:focus {
        border-color: #ff9800;
        box-shadow: 0 0 8px rgba(255, 152, 0, 0.5);
        outline: none;
    }

    &::-webkit-calendar-picker-indicator {
        cursor: pointer;
        filter: invert(40%) sepia(80%) saturate(600%) hue-rotate(35deg);
    }
`;

export default {
    OrderDetailsWrapper,
    Step,
    StepCircle,
    StepContent,
    StepTitle,
    StepDescription,
    ActionBox,
    CalendarWrapper,
    ConfirmButton,
    SecondaryButton,
    PendingText,
    DateRangeWrapper,
    DateLabel,
    DateInput,
};
