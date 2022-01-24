import React from 'react';
import styled from 'styled-components';

export default function FooterBottom() {
  return <Wrapper>
    <p>Universal’s business concept is to offer fashion and quality at the best price in a sustainable way. Universal has since it was founded in 2015 grown into one of the world's leading fashion companies. </p>
    <span>
      © 2019 Universal UI Kit
    </span>
  </Wrapper>;
}
const Wrapper = styled.div`
 display: flex;
 align-items: center;
 margin-top: 40px;
 justify-content: space-between;
 color: #939699;
 p{
   width: 750px;
 }
`