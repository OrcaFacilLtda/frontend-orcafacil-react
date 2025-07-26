// ContactUs.style.js
import styled from "styled-components";
import { fontSizes, paletteColors, fontFamilies } from "../../../styles/Root.jsx";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  padding: 140px 120px;
  background-color: ${paletteColors.lightBackground};
  width: 100%;
  box-sizing: border-box;
`;

const Section = styled.div`
  flex: 1;
  width: 80%;
`;

const Title = styled.h2`
  font-size: ${fontSizes["5xl"]};
  font-family: ${fontFamilies.primary};
  margin-bottom: 30px;
  font-weight: 500;
  color: ${paletteColors.terciaryText};
`;

const InfoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  background-color: #fff;
  padding: 25px 30px;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const IconCircle = styled.div`
  background-color: ${paletteColors.primary};
  color: #fff;
  padding: 12px;
  border-radius: 50%;
  font-size: 18px;
`;

const InfoText = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.span`
  font-weight: 600;
  color: ${paletteColors.terciaryText};
`;

const Value = styled.span`
  font-size: ${fontSizes.base};
  color: ${paletteColors.secondaryText};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 12px 25px;
  font-size: ${fontSizes.lg};
  border: 1px solid ${paletteColors.lightGrayBorder};
  border-radius: 6px;
  height: 50px;
  `;

const TextArea = styled.textarea`
  padding: 12px 25px;
  font-size: ${fontSizes.lg};
  border-radius: 6px;
  resize: none;
  border: 1px solid ${paletteColors.lightGrayBorder};
`;

const Button = styled.button`
  align-self: flex-start;
  padding: 12px 25px;
  font-size: ${fontSizes.base};
  color: #fff;
  background-color: ${paletteColors.primary};
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;

export default {
  Wrapper,
  Section,
  Title,
  InfoBox,
  IconCircle,
  InfoText,
  Label,
  Value,
  Form,
  Input,
  TextArea,
  Button,
};
