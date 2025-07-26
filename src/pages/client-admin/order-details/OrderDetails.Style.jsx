  import styled from "styled-components";
  import {
    paletteColors,
    fontSizes,
    fontFamilies,
    fontWeights,
  } from "../../../styles/Root";

  const Container = styled.div`
    padding: 20px;
    box-sizing: border-box;
    height: 95vh;
    background-color: #f7f9fc;
    font-family: ${fontFamilies.primary};
  `;

  const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
  `;

  const AcceptButton = styled.button`
    background-color: #28a745;
    color: ${paletteColors.white};
    border: none;
    padding: 12px;
    font-weight: ${fontWeights.bold};
    border-radius: 6px;
    cursor: pointer;
    font-family: ${fontFamilies.primary};

    &:hover {
      background-color: #218838;
    }
  `;

  const RejectButton = styled.button`
  background-color: #dc3545;
  color: ${paletteColors.white};
  border: none;
  padding: 12px;
  font-weight: ${fontWeights.bold};
  border-radius: 6px;
  cursor: pointer;
  font-family: ${fontFamilies.primary};

  &:hover {
    background-color: #c82333;
  }
`;

  const CancelButton = styled.button`
  background-color: #ff7f50;
  color: ${paletteColors.white};
  border: none;
  padding: 12px;
  font-weight: ${fontWeights.bold};
  border-radius: 6px;
  cursor: pointer;
  font-family: ${fontFamilies.primary};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0674a;
  }
`;

  const ProviderCard = styled.div`
    background: ${paletteColors.white};
    padding: 20px;
    border-radius: 10px;
    text-align: center;
  `;

  export default {
    Container,
    Header: styled.div`
    margin-bottom: 24px;
    font-family: ${fontFamilies.primary};

    h2 {
      margin: 0 0 4px;
      font-weight: ${fontWeights.extraBold};
      font-size: ${fontSizes['2xl']};
      color: ${paletteColors.black};
    }

    p {
      margin: 0;
      color: ${paletteColors.dimGray};
      font-size: ${fontSizes.base};
    }
  `,
    Title: styled.h1`
    font-family: ${fontFamilies.primary};
  `,
    Content: styled.div`
      display: flex;
      gap: 30px;
    `,
    LeftPanel: styled.div`
      flex: 2;
      background: ${paletteColors.white};
      padding: 20px;
      border-radius: 10px;
    `,
    RightPanel: styled.div`
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 20px;
    `,
    DescriptionBox: styled.div`
      margin-bottom: 20px;
      font-family: ${fontFamilies.primary};

      strong {
        font-size: ${fontSizes.base};
        display: block;
        font-weight: ${fontWeights.bold};
      }

      p {
        color: #555;
        font-size: ${fontSizes.sm};
      }
    `,
    ClientCard: styled.div`
      background: ${paletteColors.white};
      padding: 20px;
      border-radius: 10px;
      text-align: center;
    `,
    ProviderCard,
    ClientImage: styled.img`
      width: 60px;
      height: 60px;
      border-radius: 50%;
      margin-top: 10px;
    `,
    ClientName: styled.p`
      font-weight: ${fontWeights.bold};
      margin-top: 10px;
      font-family: ${fontFamilies.primary};
    `,
    ServiceDetails: styled.div`
      background: ${paletteColors.white};
      padding: 20px;
      border-radius: 10px;
      box-sizing: border-box;
    `,
    Status: styled.div`
      display: inline-block;
      padding: 4px 10px;
      margin-bottom: 10px;
      border-radius: 5px;
      background-color: #fdd;
      color: #d33;
      font-size: ${fontSizes.xs};
      font-family: ${fontFamilies.primary};
    `,
    DetailItem: styled.p`
      margin: 5px 0;
      font-family: ${fontFamilies.primary};
    `,
    Buttons,
    AcceptButton,
    RejectButton,
    CancelButton,
  };
