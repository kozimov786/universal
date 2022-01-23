import React from 'react';
import styled from 'styled-components';

import flowerBg from '../../images/flower.png'
import ButtonItem from '../part/ButtonItem';

export default function Middle() {
  return (
    <Wrapper>
      <div className="container box">
        <h2>The Big Bloom or «How Flowering
          Plants Changed the World»</h2>
        < ButtonItem />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 60px;
  margin-bottom: 59px;
  padding-top: 50px;
  padding-bottom: 55px;
  background-image: url(${flowerBg});
  text-align: center;
  h2{
    color: #fff;
    width: 900px;
    margin: 0 auto 25px;
    font-weight: bold;
font-size: 40px;
line-height: 50px;
  }
`
