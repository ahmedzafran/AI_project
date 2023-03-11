import React from 'react';
import NavLeft from './NavLeft';
import { Container } from 'react-bootstrap';

const Layout = ({ children }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Container>
          <NavLeft />
        </Container>
      </nav>
      <Container>
        <main>{children}</main>
      </Container>
    </div>
  );
};

export default Layout;