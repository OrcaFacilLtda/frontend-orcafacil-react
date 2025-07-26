import styled from 'styled-components';
import {
    paletteColors,
    fontSizes,
    fontFamilies,
    fontWeights,
} from "../../../styles/Root";

const Container = styled.div`
    padding: 24px;
    font-family: ${fontFamilies.primary};

    h2 {
        margin: 0 0 4px;
        font-weight: ${fontWeights.extraBold};
        font-size: ${fontSizes['2xl']}; // 26px não tem no root, '2xl' (24px) é o mais próximo
        color: ${paletteColors.terciaryText};
    }
`;

const Form = styled.div`
    display: flex;
    background: ${paletteColors.white};
    border: 1px solid ${paletteColors.lightGrayBorder};
    border-radius: 8px;
    padding: 24px;
    gap: 32px;
    flex-wrap: wrap;
    font-family: ${fontFamilies.primary};
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
        font-size: ${fontSizes.sm};
        color: ${paletteColors.terciaryText};
        margin-bottom: 4px;
        font-family: ${fontFamilies.primary};
    }
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid ${paletteColors.lightGrayBorder};
  border-radius: 6px;
  font-size: ${fontSizes.sm};
  background-color: ${paletteColors.iptBackground};
  font-family: ${fontFamilies.primary};

  &:focus {
    border-color: ${paletteColors.roy};
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
    font-size: ${fontSizes.sm};
    font-family: ${fontFamilies.primary};
    font-weight: ${fontWeights.medium};
    border: none;
    cursor: pointer;

    &.primary {
      background-color: ${paletteColors.roy};
      color: ${paletteColors.white};
    }

    &:disabled {
      background-color: ${paletteColors.lightGrayBorder};
      color: #9ca3af;
      cursor: not-allowed;
    }
  }
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid ${paletteColors.lightGrayBorder};
  border-radius: 6px;
  font-size: ${fontSizes.sm};
  font-family: ${fontFamilies.primary};
  background-color: ${paletteColors.white};
  resize: none;
  min-height: 80px;

  &:focus {
    border-color: ${paletteColors.roy};
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
