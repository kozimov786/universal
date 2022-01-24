import React from 'react';
import styled from 'styled-components';

export default function TopFooter() {
  return (
    <TopContent>
      <h3>Subscribe now and get 20% off</h3>
      <div className='flex'>
        <input type="email" placeholder='Enter your email' required />
        <button>Subscribe</button>
      </div>
    </TopContent>
  )
}

const TopContent = styled.div`
  text-align: center;
  margin-bottom: 70px;
  h3{
    font-weight: bold;
    font-size: 40px;
    line-height: 50px;
    margin-bottom: 25px;
  }
  .flex{
    display: flex;
    align-items: center;
    justify-content: center;
    input{
      padding: 10px 15px;
      border: 1px solid #D9DADB;
      border-radius: 5px;
      margin-right: 5px;
      width: 313px;

      &::placeholder{
        color: #939699;
      }
    }
    button{
      padding: 10px 30px;
      background: #4592FF;
      border-radius: 20px;
      border: none;
      color: #fff;
      cursor: pointer;
    }
  }
`