import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../../assets/logo/OrcaFacil.svg';
import HeaderStyle from './Header.Style.jsx';
import DefaultButton from '../../../components/ui/default-button/Button.jsx';

function Header() {
  const navigate = useNavigate();

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
      <HeaderStyle.Container>
        <HeaderStyle.Logo src={Logo} alt="OrcaFacil Logo" />
        <HeaderStyle.Title>OrcaFacil</HeaderStyle.Title>
        <HeaderStyle.Nav>
          <HeaderStyle.Link as="button" onClick={() => handleScroll("home")}>Home</HeaderStyle.Link>
          <HeaderStyle.Link as="button" onClick={() => handleScroll("about")}>Nossa História</HeaderStyle.Link>
          <HeaderStyle.Link as="button" onClick={() => handleScroll("services")}>Serviços</HeaderStyle.Link>
          <HeaderStyle.Link as="button" onClick={() => handleScroll("contact")}>Contato</HeaderStyle.Link>
        </HeaderStyle.Nav>
        <HeaderStyle.LoginAndRegisterConteiner>
          <DefaultButton text="Registre-se" onClick={() => navigate('/register')} />
          <DefaultButton text="Entre" onClick={() => navigate('/login')} />
        </HeaderStyle.LoginAndRegisterConteiner>
      </HeaderStyle.Container>
  );
}

export default Header;
