import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo-purple.svg';

import Notification from '../Notifications';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notification />
          <Profile>
            <div>
              <strong>Geovani Cavalcante</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Geovani"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
