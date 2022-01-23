import React from 'react';
import styled from 'styled-components';

import menuImg from '../../images/hamburger-menu.svg';
import searchImg from '../../images/Search.svg';
import ImgTop from '../../images/topheader-image.svg';
import SignImg from '../../images/Man.svg';

export default function HeaderTop() {
  return <Wrapper>
    <div className="container top_container flex">
      <Left>
        <img src={menuImg} alt="" />
        <p className='section'>Section</p>
        <div className='top_nav__search'>
          <img src={searchImg} alt="" />
          <input type="search" placeholder='Search' required />
        </div>
      </Left>
      <Right>
        <div className='subscribe_box'>
          <img className='top_img' src={ImgTop} alt="" />
          <p>
            <span className='subscribe'>Subscribe Now</span>
            <span>3 month for $19</span>
          </p>
        </div>
        <div className='flex sign'>
          <img src={SignImg} alt="" />
          <span>Sign In</span>
        </div>
      </Right>
    </div>
  </Wrapper>;
}

const Wrapper = styled.div`
   background-color: #fff;
   padding-top: 7px;
   .top_container{
     border-bottom: 1px solid #D9DADB;
   }
   .flex{
     display: flex;
     align-items: center;
     justify-content: space-between;
   }

   img{
     width: 20px;
     height: 20px;
   }
`
const Left = styled.div`
     display: flex;
     align-items: center;
     .section{
       margin-left: 15px;
       color: #262D33;
       margin-right: 25px;
     }
     .top_nav__search{
     display: flex;
     align-items: center;
     border-left: 1px solid #D9DADB;
     height: 43px;
     padding-left: 25px;
     img{
       margin-right: 10px;
     }
     input{
       border: none;
       outline: none;
       width: 80%;
     }
   }
`

const Right = styled.div`
     display: flex;
     align-items: center;
     .subscribe_box{
       display: flex;
       align-items: center;
       margin-right: 25px;
     }
     .top_img{
       width: 66px;
       height: 44px;
     }
     p{
       display: flex;
       flex-direction: column;
       margin-left: 5px;
     }
     .subscribe{
      color:#262D33 ;
     }
     span{
       color: #939699;
       font-size: 12px;
       line-height: 15px;
     }
     .sign{
       span{
         margin-left: 10px;
       }
     }

`