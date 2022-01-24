import React from 'react';
import TopFooter from './TopFooter';
import FooterMenu from './FooterMenu';
import FooterNav from './FooterNav'
import FooterBottom from './FooterBottom'
import styled from 'styled-components';

export default function Footer() {
  return (
    <FooterWrapper>
      <div className="container">
        <TopFooter />
        <FooterMenu />
        <FooterNav />
        <FooterBottom />
      </div>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
 background-color: #fff;
 padding-top: 60px;
 padding-bottom: 55px;
`