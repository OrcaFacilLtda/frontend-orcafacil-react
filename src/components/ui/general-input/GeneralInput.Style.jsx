import styled from 'styled-components';

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  label {
    font-size: 14px;
    color: #374151;
    margin-bottom: 4px;
  }
`;

const InputField = styled.input`
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


const InputStyle = {
    InputWrapper,
    InputField,
};

export default InputStyle;
