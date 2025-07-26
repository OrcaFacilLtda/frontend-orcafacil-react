import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1500;
`;

const ModalContainer = styled.div`
  background: white;
  border-radius: 6px;
  width: 90%;
  max-width: 900px;
  max-height: 90vh;
  overflow-y: auto;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.15);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  h3 {
    font-weight: 600;
    font-size: 1.2rem;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    color: #555;
    transition: color 0.2s;

    &:hover {
      color: #000;
    }
  }
`;

const Body = styled.div``;

const FormGrid = styled.div`
  display: flex;
  gap: 40px;

  > div {
    flex: 1;
    display: flex;
    flex-direction: column;

    label {
      font-size: 0.9rem;
      margin-bottom: 6px;
      margin-top: 12px;
      color: #444;
      font-weight: 500;
    }

    input, select, textarea {
      padding: 8px 12px;
      border: 1.5px solid #ccc;
      border-radius: 4px;
      font-size: 0.95rem;
      color: #333;
      outline-offset: 2px;

      &:focus {
        outline: 2px solid #2563EB; /* azul padrão */
        border-color: #2563EB;
      }
    }

    textarea {
      resize: vertical;
    }
  }

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const Buttons = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: flex-end;
  gap: 16px;

  button {
    font-weight: 600;
    font-size: 0.9rem;
    padding: 8px 18px;
    border-radius: 5px;
    cursor: pointer;
    border: none;
    min-width: 90px;
    transition: background-color 0.3s;

    &.btn-delete {
      background: #f3f4f6;
      color: #555;
      border: 1.5px solid #ddd;

      &:hover {
        background: #e5e7eb;
      }
    }

    &.btn-save {
      background: #2563EB;
      color: white;

      &:hover {
        background: #1e40af;
      }
    }
  }
`;

export default {
    Overlay,
    ModalContainer,
    Header,
    Body,
    FormGrid,
    Buttons,
};
