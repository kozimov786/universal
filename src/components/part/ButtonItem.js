import styled from 'styled-components';
import React from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


export default function ButtonItem({ text }) {
  return (
    <ButtonWrapper text={text}>
      <button>
        <span>
          <span>{text}</span>
          <span><ArrowRightAltIcon /></span>
        </span>
      </button>
    </ButtonWrapper>
  )
}


const ButtonWrapper = styled.div`
  button{
    border: none;
    background: #4592FF;
    border-radius: 20px;
    margin-right: 30px;
    color: #fff;
    padding: 10px 25px;
    span{
      display: flex;
      align-items: center;
    }
  }

`