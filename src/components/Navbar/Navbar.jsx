import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  // @media (min-width: 768px){
  //   position: fixed;
  // }

  z-index: 1;
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: space-between;
  background-color: var(--text-color--blue);
  .logo {
    margin: auto 10px;
    padding-left: 20px;
  }
  .logo-text{
    font-size: 1.3em;
    color: #000;
    font-weight: bold;
  }

`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <label class="logo-text">&lt;<span>Jhonatan /</span>&gt;</label>
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar