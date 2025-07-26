import styled from 'styled-components';
import { paletteColors, fontSizes, fontFamilies,fontWeights} from '../../styles/Root.jsx';

const Container = styled.div`
    min-height: 100vh;
    font-family: ${fontFamilies.primary};
    background: ${paletteColors.aliceBlue};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    box-sizing: border-box;
`;

const Card = styled.div`
    background: white;
    border-radius: 12px;
    box-shadow: 0 8px 16px rgb(0 0 0 / 0.1);
    width: 100%;
    max-width: 1200px;
    min-height: 75vh;
    display: flex;
    gap: 4rem;
    align-items: center;
    justify-content: center;
    padding: 3rem;
    position: relative;
    flex-wrap: wrap;
`;

const BackButton = styled.button`
    position: absolute;
    top: 1.5rem;
    left: 2rem;
    background: transparent;
    border: none;
    color: ${paletteColors.secondaryText};
    font-size: 1.25rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
        text-decoration: underline;
    }
`;

const Illustration = styled.div`
    flex: 1 1 600px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Image = styled.img`
    width: 100%;
    max-width: 100%;
    height: 750px;
    object-fit: cover;
    border-radius: 12px;
`;

const FormSection = styled.div`
    flex: 1 1 400px;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h2`
    color: ${paletteColors.secondaryText};
    font-size: ${fontSizes['2xl']};
    margin-bottom: 1.5rem;
    text-align: center;
`;

const Button = styled.button`
    background: ${paletteColors.backgroundBlueImage};
    color: ${paletteColors.white};
    padding: 0.75rem;
    border: none;
    border-radius: 6px;
    font-size: ${fontSizes.base};
    cursor: pointer;
    width: 100%;
    height: 45px;
    max-width: 700px;
    margin-top: 0.5rem;

    &:hover {
        opacity: 0.95;
    }
`;

const Link = styled.p`
    margin-top: 15px;
    text-align: center;
    font-size: ${fontSizes.base};
    color: ${paletteColors.secondaryText};
    font-family: ${fontFamilies.primary};

    a {
        color: ${paletteColors.roy};
        text-decoration: none;
        font-weight: ${fontWeights.bold};
        margin-left: 5px;
        cursor: pointer;

        &:hover {
            text-decoration: underline;
        }
    }
`;

export default {
    Container,
    Card,
    BackButton,
    Illustration,
    Image,
    FormSection,
    Title,
    Button,
    Link,
};
