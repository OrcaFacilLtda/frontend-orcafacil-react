import styled, { css } from "styled-components";
import { paletteColors, fontSizes, fontFamilies } from "../../../styles/Root";

// Tamanhos
const sizeVariants = {
  small: css`
    padding: 6px 12px;
    font-size: ${fontSizes.sm};
    height: 36px;
  `,
  medium: css`
    padding: 10px 20px;
    font-size: ${fontSizes.base};
    height: 48px;
  `,
  large: css`
    padding: 14px 28px;
    font-size: ${fontSizes.lg};
    height: 56px;
  `,

    xlarge: css`
    padding: 18px 36px;
    font-size: ${fontSizes.xl};
    height: 64px;
    `,
    
};

const variantStyles = {
  filled: css`
    background-color: ${paletteColors.primary};
    color: ${paletteColors.primaryText};
    border: none;

    &:hover {
      background-color: ${paletteColors.darkBlue};
    }
  `,
  outlined: css`
    background-color: transparent;
    color: ${paletteColors.primaryText};
    border: 2px solid ${paletteColors.primaryText};

    &:hover {
      background-color: ${paletteColors.primaryText};
      color: ${paletteColors.primary};
    }
  `,
};

export const Button = styled.button`
  font-family: ${fontFamilies.primary};
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  width: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.3s ease;

  ${({ size = "medium" }) => sizeVariants[size]}
  ${({ variant = "filled" }) => variantStyles[variant]}
`;

export default {
  Button,
};
