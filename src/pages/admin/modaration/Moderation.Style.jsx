import styled from 'styled-components';

 const Container = styled.div`
    padding: 24px;
    background: #f9fafb;
    min-height: 100vh;
    box-sizing: border-box;
`;

 const Header = styled.div`
    margin-bottom: 24px;

    h3 {
        margin: 0 0 6px;
        font-weight: 700;
        font-size: 20px;
    }

    p {
        margin: 0;
        color: #6b7280;
        font-size: 14px;
    }
`;

 const InfoCards = styled.div`
    display: flex;
    gap: 16px;
    margin-bottom: 44px;
    flex-wrap: wrap;
`;

 const Card = styled.div`
    background: #fff;
    border-radius: 8px;
    padding: 16px 20px;
    flex: 1;
    min-width: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 1px 3px rgb(0 0 0 / 0.1);
    color: ${({ color }) => color || '#333'};

    > div:first-child {
        font-weight: 600;
        font-size: 16px;

        span {
            font-size: 22px;
            font-weight: 700;
            margin-left: 5px;
            color: ${({ numberColor }) => numberColor || '#333'};
        }
    }

    > div.icon {
        background: ${({ bg }) => bg || '#eee'};
        padding: 8px;
        border-radius: 8px;
        font-size: 20px;
        color: ${({ color }) => color || '#333'};
    }
`;

 const Sections = styled.div`
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
`;

 const Section = styled.div`
    background: #fff;
    border-radius: 10px;
    flex: 1;
    min-width: 420px;
    padding: 40px;
    box-shadow: 0 1px 4px rgb(0 0 0 / 0.05);
    Box-sizing: border-box;
`;

 const SectionHeader = styled.div`
    margin-bottom: 16px;

    input {
        width: 100%;
        padding: 10px 12px;
        border-radius: 6px;
        border: 1px solid #ddd;
        font-size: 14px;
        outline: none;

        &::placeholder {
            color: #bbb;
        }
    }
`;

 const ReportCard = styled.div`
    background: ${({ bg }) => bg || '#fff'};
    border: ${({ border }) => border || 'none'};
    color: ${({ color }) => color || '#333'};
    margin-bottom: 16px;
    padding: 12px 15px;
    border-radius: 8px;
    font-size: 14px;
    line-height: 1.4;
    position: relative;

    small {
        position: absolute;
        top: 12px;
        right: 15px;
        font-weight: 600;
        font-size: 12px;
        color: ${({ timeColor }) => timeColor || '#999'};
    }

    strong {
        display: block;
        margin-bottom: 6px;
    }

    p {
        margin: 0;
    }
`;

 const ButtonsWrapper = styled.div`
    margin-top: 12px;

    button {
        font-size: 12px;
        border: none;
        border-radius: 5px;
        padding: 6px 12px;
        margin-right: 8px;
        cursor: pointer;
        font-weight: 700;
        transition: background-color 0.3s ease;
    }

    button.analyze {
        background: #e74c3c;
        color: #fff;

        &:hover {
            background: #c0392b;
        }
    }

    button.reject {
        background: #bdc3c7;
        color: #fff;

        &:hover {
            background: #95a5a6;
        }
    }

    button.review {
        background: #27ae60;
        color: #fff;

        &:hover {
            background: #1e8449;
        }
    }
`;

 export default  {
    Container,
    Header,
    InfoCards,
    Card,
    Sections,
    Section,
    SectionHeader,
    ReportCard,
    ButtonsWrapper,
};

