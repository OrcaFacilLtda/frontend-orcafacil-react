import styled from "styled-components";

const Container = styled.div`
  padding: 24px;
  background: #f9fafb;
  min-height: 95vh;
  box-sizing: border-box;
`;

 const Header = styled.div`
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
`;


const FilterArea = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  background: white;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 24px;
  flex-wrap: wrap;
`;


export const SearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  color: #6b7280;

  input {
    border: none;
    outline: none;
    width: 100%;
    font-size: 14px;
  }
`;


const Input = styled.input`
  flex: 1;
  padding: 10px 14px;
  font-size: 16px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  outline: none;
`;

const Select = styled.select`
  padding: 10px 14px;
  font-size: 16px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  outline: none;
`;

const Button = styled.button`
  background: #2563eb;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.2s;

  &:hover {
    background: #1d4ed8;
  }
`;

const Card = styled.div`
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 16px;
`;

const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    margin: 0;
    font-size: 18px;
    font-weight: 700;
  }
`;

const Status = styled.span`
  background-color: ${({ status }) =>
    status === "Em andamento"
        ? "#fef08a"
        : status === "Finalizado"
            ? "#4ade80"
            : "#fca5a5"};
  color: ${({ status }) =>
    status === "Em andamento"
        ? "#92400e"
        : status === "Finalizado"
            ? "#064e3b"
            : "#7f1d1d"};
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 14px;
`;

const Info = styled.p`
  color: #6b7280;
  font-size: 14px;
  margin: 8px 0;
`;

const Description = styled.p`
  font-size: 15px;
  color: #374151;
  margin-bottom: 12px;
`;

const ActionButton = styled.button`
  background: #2563eb;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #1d4ed8;
  }
`;

const ServiceStyle = {
    Container,
    Header,
    FilterArea,
    SearchInputWrapper,
    Input,
    Select,
    Button,
    Card,
    TitleRow,
    Status,
    Info,
    Description,
    ActionButton,
};

export default ServiceStyle;
