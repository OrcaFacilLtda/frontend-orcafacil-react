import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
    box-sizing: border-box;
`;

export const MainContent = styled.main`
  flex-grow: 1;
    box-sizing: border-box;
`;

const AdminLayoutStyle = {
    Container,
    MainContent,
};

export default AdminLayoutStyle;
