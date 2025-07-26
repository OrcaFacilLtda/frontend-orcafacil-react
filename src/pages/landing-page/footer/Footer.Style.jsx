import styled from "styled-components";
import {fontSizes, paletteColors, fontFamilies} from "../../../styles/Root.jsx";

const FooterWrapper = styled.footer`
    background-color: ${paletteColors.primary};
    padding: 20px 0;
    text-align: center;
    color: white;
    font-family: ${fontFamilies.primary};
`;


const FooterText = styled.p`
    font-size: ${fontSizes.sm};
    margin: 0;
`;
export default {
    FooterWrapper,
    FooterText
};