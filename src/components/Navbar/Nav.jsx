import React, { useState } from 'react';
import styled from 'styled-components';


const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  padding-right: 20px;
  li {
    padding: 0px 10px;
  }
  li a{
    color: #fff;
    text-decoration: none;
    font-size: 1.2em;
    
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #171616;
    position: fixed;
    text-align: center;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    padding-top: 5.5rem;
    padding-right: 0px;
    transition: transform 0.3s ease-in-out;
    z-index: 1;
    margin-top: 0px;
    li {
      padding-bottom: 45px;
    }
    li a{
        color: var(--text-color--blue);
        // padding-bottom: 35px;
        text-decoration: none;
        font-size: 1.6em;
      }
  }
`;

const Nav = ({ open }) => {

  return (
    <Ul open={open}>
      <li><a href="#whoAmI">Who am I?</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#formation">Formation</a></li>
      <li><a href="#courses">Courses</a></li>
      <li><a href="#contact">Contact</a></li>
    </Ul>
  )
}

export default Nav