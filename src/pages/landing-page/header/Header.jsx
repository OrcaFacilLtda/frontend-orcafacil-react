import React from 'react';
import { useNavigate } from 'react-router-dom'; // <- Importa o hook de navegação
import Logo from '../../../assets/logo/OrcaFacil.svg';
import HeaderStyle from './Header.Style.jsx';
import DefaultButton from '../../../components/ui/default-button/Button.jsx';

function Header() {
  const navigate = useNavigate();

  return (
      <>
        <HeaderStyle.Container>
          <HeaderStyle.Logo src={Logo} alt="OrcaFacil Logo" />
          <HeaderStyle.Title>OrcaFacil</HeaderStyle.Title>
          <HeaderStyle.Nav>
            <HeaderStyle.Link href="#">Home</HeaderStyle.Link>
            <HeaderStyle.Link href="#">About</HeaderStyle.Link>
            <HeaderStyle.Link href="#">Services</HeaderStyle.Link>
            <HeaderStyle.Link href="#">Contact</HeaderStyle.Link>
          </HeaderStyle.Nav>
          <HeaderStyle.LoginAndRegisterConteiner>
            <DefaultButton text="Registre-se" onClick={() => navigate('/register')} />
            <DefaultButton text="Entre" onClick={() => navigate('/login')} />
          </HeaderStyle.LoginAndRegisterConteiner>
        </HeaderStyle.Container>
      </>
  );
}

export default Header;
