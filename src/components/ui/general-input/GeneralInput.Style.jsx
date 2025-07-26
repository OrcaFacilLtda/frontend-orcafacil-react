import styled from 'styled-components';
import {
    paletteColors,
    fontFamilies,
    fontSizes,
} from '../../../styles/Root.jsx';

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;

    label {
        font-size: ${fontSizes.sm};
        color: #374151;
        margin-bottom: 4px;
        font-family: ${fontFamilies.primary};
    }
`;

const InputField = styled.input`
    padding: 10px;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    font-size: ${fontSizes.sm};
    background-color: ${paletteColors.white};
    font-family: ${fontFamilies.primary};

    &:focus {
        border-color: ${paletteColors.roy.trim()};
        outline: none;
    }
`;

const InputStyle = {
    InputWrapper,
    InputField,
};

export default InputStyle;
