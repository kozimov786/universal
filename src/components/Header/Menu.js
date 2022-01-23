import React from 'react';
import styled from 'styled-components';

export default function Menu() {
  return (
    <Nav>
      <div className="container">
        <MenuList>
          <li>
            <a href="/">NEWS</a>
          </li>
          <li>
            <a href="/">OPINION</a>
          </li>
          <li>
            <a href="/">SCIENCE</a>
          </li>
          <li>
            <a href="/">LIFE</a>
          </li>
          <li>
            <a href="/">TRAVEL</a>
          </li>
          <li>
            <a href="/">MONEYS</a>
          </li>
          <li>
            <a href="/">ART & DESIGN</a>
          </li>
          <li>
            <a href="/">SPORTS</a>
          </li>
          <li>
            <a href="/">PEOPLE</a>
          </li>
          <li>
            <a href="/">HEALTH</a>
          </li>
          <li>
            <a href="/">EDUCATION</a>
          </li>
        </MenuList>
      </div>
    </Nav>
  )
}

const Nav = styled.nav`
 background-color: #262D33;
 padding-top: 18px;
 padding-bottom: 18px;
`
const MenuList = styled.ul`
 display: flex;
 align-items: center;
 justify-content: space-between;
 a{
   color: #fff;
   &:hover{
     opacity: 0.6;
   }
 }
`