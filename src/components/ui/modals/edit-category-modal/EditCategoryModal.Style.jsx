import styled from 'styled-components';
import {
    paletteColors,
    fontWeights,
    fontFamilies,
    fontSizes,
} from '../../../../styles/Root.jsx';

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalContainer = styled.div`
    background: ${paletteColors.white};
    border-radius: 8px;
    width: 500px;
    max-width: 90%;
    padding: 24px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    font-family: ${fontFamilies.primary};
`;

const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
        margin: 0;
        font-size: ${fontSizes.lg};
        color: #333;
        font-family: ${fontFamilies.primary};
        font-weight: ${fontWeights.semiBold};
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
        color: #007bff;
        font-family: ${fontFamilies.primary};
    }
`;

const ModalBody = styled.div`
    margin-top: 20px;
`;

const FormRow = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
`;

const FormControl = styled.div`
    width: ${({ fullWidth }) => (fullWidth ? '100%' : '100%')};
`;

const Label = styled.label`
    font-size: ${fontSizes.sm};
    color: #333;
    margin-bottom: 6px;
    display: block;
    font-family: ${fontFamilies.primary};
`;

const sharedInputStyles = `
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: ${fontSizes.sm};
  line-height: 1.4;
  box-sizing: border-box;
  outline: none;
  font-family: ${fontFamilies.primary};

  &:focus {
    border-color: #3d73dd;
  }
`;

const Input = styled.input`
    ${sharedInputStyles}
    height: 44px;
`;

const Textarea = styled.textarea`
    ${sharedInputStyles}
    resize: vertical;
    min-height: 80px;
`;

const Select = styled.select`
    ${sharedInputStyles}
    height: 44px;
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const SubmitButton = styled.button`
    background-color: #3d73dd;
    color: ${paletteColors.white};
    padding: 10px 24px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: ${fontWeights.medium};
    font-size: ${fontSizes.sm};
    font-family: ${fontFamilies.primary};

    &:hover {
        background-color: #345fcc;
    }
`;

export default {
    ModalOverlay,
    ModalContainer,
    ModalHeader,
    ModalBody,
    FormRow,
    FormControl,
    Label,
    Input,
    Textarea,
    Select,
    ButtonWrapper,
    SubmitButton,
};
