import styled from 'styled-components';

export const Container = styled.div`
    width: 240px;
    background: white;
    min-height: 100vh;
    box-shadow: 2px 0 4px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
`;

export const Header = styled.div`
    padding: 24px 16px 16px;
    display: flex;
    align-items: center;
    gap: 12px;
    border-bottom: 1px solid #f3f4f6;
`;

export const Logo = styled.div`
    background: #3b82f6;
    color: white;
    width: 36px;
    height: 36px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    flex-shrink: 0;
`;

export const TitleBlock = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.span`
    font-weight: 900;
    font-size: 24px;
    color: #111827;
    line-height: 1.2;
`;

export const Role = styled.span`
    font-size: 13px;
    font-weight: 500;
    color: #6b7280;
    margin-top: 2px;
`;

export const Nav = styled.ul`
    list-style: none;
    padding: 16px 0 0;
    margin: 0;

    li {
        margin: 6px 0;

        a {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 16px;
            border-radius: 8px;
            text-decoration: none;
            color: #111827;
            font-weight: 500;
            font-size: 14px;

            &:hover {
                background: #f0f0f0;
            }

            &.active,
            &:focus {
                background: #3b82f6;
                color: white;
            }
        }
    }
`;

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Footer = styled.div`
    padding: 16px;
    background: #f9fafb;
    display: flex;
    align-items: center;
    gap: 12px;

    img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }

    strong {
        font-size: 14px;
        display: block;
        color: #111;
    }

    span {
        font-size: 12px;
        color: #6b7280;
    }
`;

export const LogoutWrapper = styled.div`
    padding: 10px 16px 16px;
    border-top: 1px solid #f3f8f8;
    background: #f9fafb;

    button {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px 0;
        border: none;
        background: transparent;
        font-weight: 500;
        font-size: 14px;
        color: #111827;
        cursor: pointer;
        border-radius: 8px;

        &:hover {
            background: #f0f0f0;
        }
    }
`;

const SidebarStyle = {
    Container,
    Header,
    Logo,
    TitleBlock,
    Title,
    Role,
    Nav,
    FooterContainer,
    Footer,
    LogoutWrapper,
};

export default SidebarStyle;
