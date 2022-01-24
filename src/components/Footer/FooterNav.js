import React from 'react';
import styled from 'styled-components';

import FooterLogo from '../../images/unv-logo.png';
import Instagram from '../../images/instagram.png';
import youtube from '../../images/youtube.png';
import twitter from '../../images/twitter.png';
import facebook from '../../images/facebook.png';



export default function FooterNav() {
  return (
    <Wrapper>
      <a href="/">
        <img className='logo-footer' src={FooterLogo} alt="" />
      </a>
      <ul>
        <li>
          <a href="/">Contact Us</a>
        </li>
        <li>
          <a href="/">Work with Us</a>
        </li>
        <li>
          <a href="/">Advertise</a>
        </li>
        <li>
          <a href="/">Your Ad Choise</a>
        </li>
      </ul>
      <div className='flex'>
        <a href="/">
          <img src={facebook} alt="" />
        </a>
        <a href="/">
          <img src={twitter} alt="" />
        </a>
        <a href="/">
          <img src={youtube} alt="" />
        </a>
        <a href="/">
          <img src={Instagram} alt="" />
        </a>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
   display: flex;
   align-items: center;
   padding-top: 30px;
   padding-bottom: 30px;
   border-top: 1px solid #D9DADB;
   border-bottom: 1px solid #D9DADB;
   margin-top: 50px;


   ul{
     display: flex;
     align-items: center;
     li{
       &:not(:last-child){
         margin-right: 30px;
       }
       a{
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        color: #262D33;
        font-weight: bold;
        &:hover{
          opacity: 0.8;
        }
       }
     }
   }
   .flex{
     display: flex;
     align-items: center;
     margin-left: auto;
     img{
       margin-left: 15px;
       width: 40px;
       height: 40px;
     }
   }

  .logo-footer{
    width: 50px;
    height: 50px;
    margin-right: 30px;
  }
`
