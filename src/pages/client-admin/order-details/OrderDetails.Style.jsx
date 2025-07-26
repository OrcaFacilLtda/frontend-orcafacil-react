import styled from "styled-components";

const Container = styled.div`
    padding: 20px;
    box-sizing: border-box;
    height: 95vh;
    background-color: #f7f9fc;
    font-family: 'Arial', sans-serif;
`;


const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const AcceptButton = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  padding: 12px;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

const RejectButton = styled.button`
    background-color: #dc3545;
    color: white;
    border: none;
    padding: 12px;
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
        background-color: #c82333;
    }
`;

const CancelButton = styled.button`
    background-color: #ff7f50; /* coral */
    color: white;
    border: none;
    padding: 12px;
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #e0674a;
    }
`;

// Card do prestador para o cliente (lado direito)
const ProviderCard = styled.div`
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
  
`;

export default {
    Container,
    Header: styled.div`
    margin-bottom: 24px;

    h2 {
      margin: 0 0 4px;
      font-weight: 800;
      font-size: 24px;
    }

    p {
      margin: 0;
      color: #6b7280;
      font-size: 16px;
    }
  `,
    Title: styled.h1``,
    Content: styled.div`
    display: flex;
    gap: 30px;
  `,
    LeftPanel: styled.div`
    flex: 2;
    background: #fff;
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

    strong {
      font-size: 16px;
      display: block;
    }

    p {
      color: #555;
    }
  `,
    ClientCard: styled.div`
    background: #fff;
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
    font-weight: bold;
    margin-top: 10px;
  `,
    ServiceDetails: styled.div`
    background: #fff;
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
    font-size: 12px;
  `,
    DetailItem: styled.p`
    margin: 5px 0;
  `,
    Buttons,
    AcceptButton,
    RejectButton,
    CancelButton,
};
