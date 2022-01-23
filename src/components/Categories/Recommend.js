import React from 'react';
import styled from 'styled-components';


import rec1 from '../../images/rec1.png';
import rec2 from '../../images/rec2.png';
import rec3 from '../../images/rec3.png';
import rec4 from '../../images/rec4.png';
import rec5 from '../../images/rec5.png';
import rec6 from '../../images/rec6.png';
import rec7 from '../../images/rec7.png';



export default function Recommend() {
  return (
    <Card>
      <h6>Recommend for you</h6>
      <CardList>
        <CardItem className='one'>
          <img src={rec1} alt="" />
          <div>
            <p>Office Meetings Leave the Office</p>
            <span>15 minuts ago</span>
          </div>
        </CardItem>
        <CardItem className='two'>
          <img src={rec2} alt="" />
          <div>
            <p>Experimental Vocal Music in Brooklyn</p>
            <span>15 minuts ago</span>
          </div>
        </CardItem>
        <CardItem className='three'>
          <img src={rec3} alt="" />
          <div>
            <p>Google’s Influence Over Think Tanks</p>
            <span>15 minuts ago</span>
          </div>
        </CardItem>
        <CardItem className='four'>
          <img src={rec4} alt="" />
          <div>
            <p>Homes for Sale in NYC and Connecticut</p>
            <span>15 minuts ago</span>
          </div>
        </CardItem>
        <CardItem className='five'>
          <img src={rec5} alt="" />
          <div>
            <p>Are You There, Dad? It’s Me, Alice</p>
            <span>15 minuts ago</span>
          </div>
        </CardItem>
        <CardItem className='six'>
          <img src={rec6} alt="" />
          <div>
            <p>The New Punk Look: Lacy and Colorful</p>
            <span>15 minuts ago</span>
          </div>
        </CardItem>
        <CardItem className='seven'>
          <img src={rec7} alt="" />
          <div>
            <p>Sunday Best in Harlem and Brooklyn</p>
            <span>15 minuts ago</span>
          </div>
        </CardItem>
      </CardList>
      <button>Read more</button>
    </Card>
  )
}

const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  margin-left: 29px;
  button{
    border: none;
    background-color: transparent;
    padding:11px 20px 14px;
    font-weight: 900;
    text-align: center;
    width: 100%;
    border-top: 1px solid #D9DADB;
  }
  img{
    width: 60px;
    height: 60px;
    margin-right: 10px;
  }
  h6{
    padding: 25px;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    font-weight: 900;
    border-bottom: 1px solid #D9DADB;
  }
`

const CardItem = styled.li`
 padding: 25px 0;
 display: flex;
 align-items: center;
 position: relative;
 p{
   width: 143px;
   font-weight: 500;
 }

 &::before{
   content: '1';
   font-size: 70px;
   line-height: 50px;
   color: #262D33;
   opacity: 0.08;
   position: absolute;
   top: 30px;
   right: 0;
  }


 span{
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: #939699;
 }
 &:not(:last-child){
   border-bottom: 1px solid #D9DADB;
 }

`
const CardList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0 25px;

  .one::before{
     content: '1';
  }
  .two::before{
     content: '2';
  }
  .three::before{
     content: '3';
  }
  .four::before{
     content: '4';
  }
  .five::before{
     content: '5';
  }
  .six::before{
     content: '6';
  }
  .seven::before{
     content: '7';
  }
`