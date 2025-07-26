import styled from "styled-components";

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
`;

const ModalContainer = styled.div`
    background-color: #fff;
    width: 100%;
    max-width: 600px;
    border-radius: 8px;
    padding: 24px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;

    h3 {
        margin: 0;
        font-size: 1.25rem;
    }
`;

const CloseButton = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    color: #333;
    font-size: 1.2rem;

    &:hover {
        color: #000;
    }
`;

const Body = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const InputRow = styled.div`
    display: flex;
    gap: 16px;
    flex-wrap: wrap;

    > div {
        flex: 1;
        min-width: 45%;
    }
`;

const SubmitButton = styled.button`
    margin-top: 12px;
    padding: 12px 16px;
    background-color: #2563eb;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #1d4ed8;
    }
`;

export default {
    Overlay,
    ModalContainer,
    Header,
    CloseButton,
    Body,
    InputRow,
    SubmitButton
};
