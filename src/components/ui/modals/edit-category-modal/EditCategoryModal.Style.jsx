import styled from 'styled-components';


const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1500;
`;

const ModalContainer = styled.div`
    background: white;
    border-radius: 8px;
    width: 90%;
    max-width: 500px; 
    padding: 24px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
`;

const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid #e5e7eb;

    h3 {
        font-weight: 600;
        font-size: 1.1rem;
        margin: 0;
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
        color: #6b7280;
        transition: color 0.2s;
        &:hover {
            color: #111827;
        }
    }
`;

const ModalBody = styled.div``;


const FormRow = styled.div`
    margin-bottom: 16px;
`;

const FormControl = styled.div`
    display: flex;
    flex-direction: column;
`;

const Label = styled.label`
  font-size: 0.9rem;
  margin-bottom: 6px;
  color: #374151;
  font-weight: 500;
`;

const Input = styled.input`
  padding: 8px 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 0.95rem;
  &:focus {
    outline: 2px solid #3b82f6;
    border-color: #3b82f6;
  }
`;

const Textarea = styled.textarea`
  padding: 8px 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 0.95rem;
  min-height: 80px;
  resize: vertical;
  &:focus {
    outline: 2px solid #3b82f6;
    border-color: #3b82f6;
  }
`;


const ButtonWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: flex-end;
`;

const SubmitButton = styled.button`
  font-weight: 600;
  font-size: 0.9rem;
  padding: 9px 20px;
  border-radius: 6px;
  cursor: pointer;
  border: none;
  background: #2563eb;
  color: white;
  transition: background-color 0.3s;
  &:hover {
    background: #1d4ed8;
  }
`;

const CategoryStyle = {
    ModalOverlay,
    ModalContainer,
    ModalHeader,
    ModalBody,
    FormRow,
    FormControl,
    Label,
    Input,
    Textarea,
    ButtonWrapper,
    SubmitButton,
};

export default CategoryStyle;