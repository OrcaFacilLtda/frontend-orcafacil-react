import styled from 'styled-components';

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
    background: #fff;
    border-radius: 8px;
    width: 500px;
    max-width: 90%;
    padding: 24px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
        margin: 0;
        font-size: 18px;
        color: #333;
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
        color: #007bff;
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
    font-size: 14px;
    color: #333;
    margin-bottom: 6px;
    display: block;
`;

const sharedInputStyles = `
    width: 100%;
    padding: 10px 12px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 14px;
    line-height: 1.4;
    box-sizing: border-box;
    outline: none;

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
    color: white;
    padding: 10px 24px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 500;
    font-size: 14px;

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
