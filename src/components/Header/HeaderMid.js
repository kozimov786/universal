import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import freedom from '../../images/freedom.png';
import LogoImg from '../../images/logo.svg';
import SunImg from '../../images/Sun.svg'

export default function HeaderMid() {
  return (
    <Middle>
      <div className="container flex">
        <div className='flex'>
          <img className='freedom' src={freedom} alt="" />
          <p>Boston and New York Bear Brunt</p>
        </div>
        <Link to='/'>
          <img className='logo' src={LogoImg} alt="" />
        </Link>
        <div className='flex'>
          <time>Monday, January 1, 2018</time>
          <div className='flex'>
            <img className='sun' src={SunImg} alt="" />
            <span>- 23 °C</span>
          </div>
        </div>
      </div>
    </Middle>
  )
}
const Middle = styled.div`
  background-color: #fff;
  p,time,span{
    color: #4B5157;
  }
  .sun{
    width: 20px;
    height: 20px;
    margin-right: 10px;
    margin-left: 23px;
  }
  .logo{
    width: 184px;
    height: 40px;
  }
  .flex{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .freedom{
    width:100px;
    height: 84px;
    margin-left: 25px;
    margin-right: 15px;
  }
`