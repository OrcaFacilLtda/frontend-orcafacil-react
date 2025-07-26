import styled from 'styled-components';

const Container = styled.div`
  padding: 24px;
    
    h2 {
        margin: 0 0 4px;
        font-weight: 800;
        font-size: 26px;
    }
`;

const Form = styled.div`
  display: flex;
  background: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 24px;
  gap: 32px;
  flex-wrap: wrap;
`;

const Column = styled.div`
  flex: 1;
  min-width: 300px;
`;

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  label {
    font-size: 14px;
    color: #374151;
    margin-bottom: 4px;
  }
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 14px;
  background-color: #fff;

  &:focus {
    border-color: #3b82f6;
    outline: none;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 16px;

  button {
    padding: 10px 20px;
    border-radius: 6px;
    font-size: 14px;
    border: none;
    cursor: pointer;

    &.primary {
      background-color: #3b82f6;
      color: white;
    }

    &:disabled {
      background-color: #e5e7eb;
      color: #9ca3af;
      cursor: not-allowed;
    }
  }
`;
export const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 14px;
  background-color: #fff;
  resize: none;
  min-height: 80px;

  &:focus {
    border-color: #3b82f6;
    outline: none;
  }
`;


export default {
    Container,
    Form,
    Column,
    SelectWrapper,
    Select,
    ButtonsWrapper,
    TextArea,
};
