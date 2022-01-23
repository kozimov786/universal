import React from 'react';
import styled from 'styled-components';

import guitarImg from '../../images/Image.png';
import Img2 from '../../images/image-174.png';
import manImg from '../../images/image-175.png';
import stadionImg from '../../images/image-176.png';


export default function HeroCard() {
  return <HeroBox>
    <CardList>
      <li>
        <h3>25 Songs That Tell Us Where Music Is Going</h3>
        <img src={guitarImg} alt="" />
      </li>
      <li>
        <h3>25 Songs That Tell Us Where Music Is Going</h3>
        <img src={Img2} alt="" />
      </li>
      <li>
        <h3>25 Songs That Tell Us Where Music Is Going</h3>
        <img src={manImg} alt="" />
      </li>
      <li>
        <h3>25 Songs That Tell Us Where Music Is Going</h3>
        <img src={stadionImg} alt="" />
      </li>
    </CardList>
  </HeroBox>;
}

const HeroBox = styled.div`
 width: 100%;
 padding: 25px;
 background-color: #30363D;
 border-radius: 10px;
`

const CardList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  li{
    display: flex;
    align-items: center;
    h3{
      width: 154px;
      margin-right: 15px;
      color: #fff;
      font-weight: bold;
      font-size: 16px;
      line-height: 25px;
    }
   &:not(:last-child){
     border-right: 1px solid #4B5157;
    padding-right: 25px;

   }
  }
  img{
    width: 65px;
    height: 65px;
  }
`