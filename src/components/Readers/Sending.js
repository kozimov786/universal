import React from 'react';
import styled from 'styled-components';
import ButtonItem from '../part/ButtonItem'
import sendingGirl from '../../images/scarf-girl.png'

export default function Sending() {
  return (
    <Wrapper>
      <img src={sendingGirl} alt="" />
      <div>
        <h2>What do you think ?</h2>
        <textarea type="text" />
        <ButtonItem text='Submit' />
      </div>

    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 30px;
  background: #F5F5F5;
  border-radius: 10px;
  display: flex;
  align-items: center;
  h2{
    font-weight: bold;
font-size: 20px;
line-height: 25px;
margin-bottom: 15px;
  }
  img{
   width: 75px;
   height: 75px;
   margin-right: 10px;
   margin-top: -50px;
  }
  textarea{
    background: #FFFFFF;
    border: 1px solid #D9DADB;
    width: 595px;
    padding: 10px;
    border-radius: 10px;
    height: 130px;
    margin-bottom: 15px;
   resize: none;
  }
`