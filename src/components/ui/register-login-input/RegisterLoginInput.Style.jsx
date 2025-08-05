import styled from 'styled-components';
import {
    paletteColors,
    fontSizes,
    fontFamilies,
} from '../../../styles/Root.jsx';

export const Container = styled.div`
    width: 100%;
    margin-bottom: 1rem;
    font-family: ${fontFamilies.primary};
`;

export const Label = styled.label`
    display: block;
    margin-bottom: 0.3rem;
    font-size: ${fontSizes.sm};
    color: ${paletteColors.secondaryText};
    font-family: ${fontFamilies.primary};
`;

export const InputWrapper = styled.div`
    position: relative;
`;

export const Input = styled.input`
    width: 100%;
    height: 5px;
    padding: 1rem;
    border: 1.5px solid ${paletteColors.roy};
    border-radius: 8px;
    font-size: ${fontSizes.base};
    outline: none;
    font-family: ${fontFamilies.primary};

    &:focus {
        border-color: #2563eb;
    }
`;

export const Icon = styled.span`
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: ${paletteColors.secondaryText};
    cursor: pointer;
    font-size: 1.2rem;
`;

export default {
    Container,
    Label,
    InputWrapper,
    Input,
    Icon,
};
