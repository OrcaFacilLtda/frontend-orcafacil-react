import React from 'react';
import Logo from '../../../assets/logo/OrcaFacil.svg';
import HeaderStyle from './Header.Style';
function Header() {
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
          <HeaderStyle.Button>Register</HeaderStyle.Button>
          <HeaderStyle.Button>Login</HeaderStyle.Button>
        </HeaderStyle.LoginAndRegisterConteiner>
      </HeaderStyle.Container>
    </>
  );
}

export default Header;