import styled from 'styled-components';

export const Container = styled.div`
    padding: 24px;
    background: #f7f9fc;
    min-height: 100vh;
    box-sizing: border-box;
`;

export const Header = styled.div`
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

export const InfoCards = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 34px;
`;

export const Card = styled.div`
  background: white;
  border-radius: 8px;
  padding: 16px 20px;
  flex: 1;
  max-width:15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 3px rgb(0 0 0 / 0.1);
`;

export const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
  span {
    font-size: 18px;
      font-weight: 500;
    color: #374151;
  }

  strong {
    font-size: 22px;
    display: block;
    margin-top: 4px;
  }
`;


export const IconWrapper = styled.div`
  background: #ffecb5;
  border-radius: 8px;
  padding: 8px;
  font-size: 20px;
  color: #d97706;
`;

export const Sections = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
`;

export const Section = styled.div`
    background: white;
    border-radius: 8px;
    padding: 45px;
    flex: 1;
    min-width: 720px;
    min-height: 600px;
    max-height: 600px;
    box-shadow: 0 1px 3px rgb(0 0 0 / 0.1);
    box-sizing: border-box;
`;

export const SectionHeader = styled.div`
  margin-bottom: 12px;
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

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ListItem = styled.div`
  border: 1px solid #000;
  border-radius: 8px;
  padding: 12px 16px;

  strong {
    display: block;
    margin-bottom: 4px;
    font-weight: 600;
  }

  p {
    margin: 0 0 8px 0;
    font-size: 13px;
    color: #555;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 8px;

  button {
    padding: 4px 12px;
    border-radius: 4px;
    border: none;
    font-size: 12px;
    cursor: pointer;
  }

  button:first-child {
    background: #c67c00;
    color: white;
  }

  button:last-child {
    background: #c0c0c0;
    color: #444;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 6px;
    font-weight: 600;
    font-size: 14px;
  }

  input {
    border: 1px solid #ccc;
    border-radius: 6px;
    padding: 8px 12px;
    font-size: 14px;
    outline: none;

    &:focus {
      border-color: #3b82f6;
    }
  }
`;

export const ButtonCreate = styled.button`
  margin-top: 12px;
  padding: 10px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #2563eb;
  }
`;

const CategoryStyle = {
    Container,
    Header,
    InfoCards,
    Card,
    CardInfo,
    IconWrapper,
    Sections,
    Section,
    SectionHeader,
    SearchInputWrapper,
    List,
    ListItem,
    ButtonsWrapper,
    Form,
    FormGroup,
    ButtonCreate,
};

export default CategoryStyle;
