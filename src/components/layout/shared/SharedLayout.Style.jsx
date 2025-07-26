import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background: #f9fafb;
`;

export const MainContent = styled.main`
  flex: 1;
  padding: 24px;
`;

const SharedLayoutStyle = {
    Container,
    MainContent,
};

export default SharedLayoutStyle;
