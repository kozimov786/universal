import React from 'react';
import styled from 'styled-components';

import CarImg from '../../images/car.svg';
import avatarWomen from '../../images/avatar-women.svg';
import Comment from '../../images/comment.svg';
import carBg from '../../images/card-bg-hand.png';
import hearBg from '../../images/Heart.svg';
import Avatar1 from '../../images/avatar1.png';
import Avatar2 from '../../images/avatar2.png';
import Avatar3 from '../../images/avatar3.png';
import catImg from '../../images/cat.png';
import QuoteImg from '../../images/quote.svg'


export default function Infos() {
  return (
    <div className="container">
      <GridBox>
        <div className="div1">
          <p className='column'>Columns</p>
          <ul>
            <li>
              <h4>Architecture is the thoughtful making of space</h4>
              <div className='flex'>
                <img className='avatar' src={Avatar1} alt="" />
                <p>
                  <span>David Williams</span>
                  <span>Architect</span>
                </p>
              </div>
            </li>
            <li>
              <h4>The details are not the details. They make the design.</h4>
              <div className='flex'>
                <img className='avatar' src={Avatar2} alt="" />
                <p>
                  <span>Alexandra Green</span>
                  <span>Interior designer</span>
                </p>
              </div>
            </li>
            <li>
              <h4>Live life to the fullest, and focus on the positive</h4>
              <div className='flex'>
                <img className='avatar' src={Avatar3} alt="" />
                <p>
                  <span>Olivia Thompson</span>
                  <span>Coacher</span>
                </p>
              </div>
            </li>
          </ul>
          <button className='more-read_btn'>Read more</button>
        </div>

        <div className="div2">
          <div className='flex'>
            <div className='info'>
              <span>Cars</span>
              <h4>The joy of replicas: A $ 5 million car for $ 50,000</h4>
              <p>The 31-year-old self-taught engineer and former amateur racer spends his days building artful recreations of one of most iconic sports cars</p>
            </div>
            <img className='car' src={CarImg} alt="" />
          </div>
          <div className='bottom flex'>
            <img className='avatar' src={avatarWomen} alt="" />
            <h3>Jessica Miller:</h3>
            <p>Even as the ride-hailing service’s future remem…</p>
            <img src={Comment} alt="" />
            <span>342</span>
          </div>
        </div>
        <div className="div3">
          <span className='popular'>Popular</span>
          <span className='art'>Art & Design</span>
          <h3>Invisible ink: the weird world of tattoo removal – in pictures</h3>
          <div className='flex'>
            <img className='avatar' src={avatarWomen} alt="" />
            <div>
              <p className='author'>By Sarah Jenkins</p>
              <div className='flex times'>
                <time>Sept 26</time>
                <img src={Comment} alt="" />
                <span>23</span>
                <img src={hearBg} alt="" />
                <span>232</span>
              </div>
            </div>
          </div>
        </div>
        <div className="div4">
          <img src={catImg} alt="" />
          <h4>200+ Doomed Cats Saved From Euthanization</h4>
        </div>

        <div className="div5">
          <h4 className='heading'>Is Coffee Bad for Bones?</h4>
          <p>Coffee drinkers may excrete more calcium, but it doesn’t appear to weaken bones</p>
          <time className='time'>Oct 15</time>
        </div>
        <div className="div6">
          <h4 className='heading'>It’s a Stressful World</h4>
          <p>Can a cruise skeptic enjoy four days on the seas with his family and a bunch of princesses?</p>
          <time className='time'>Oct 15</time>
        </div>
        <div className="div7">
          <h4 className='heading'>What We Manufacture</h4>
          <p>A global history of the factory and the modern world that all should read</p>
          <time className='time'>Oct 14</time>
        </div>
        <div className="div8">
          <h4 className='heading'>A Treat for Lemon Lovers</h4>
          <p>This tangerine, ginger and chocolate tart has verve, depth and a hint of spice</p>
          <time className='time'>Oct 15</time>
        </div>
      </GridBox>
    </div>
  )
}

const GridBox = styled.div`
margin-top: 310px;
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(1, 1fr);
grid-column-gap: 30px;
grid-row-gap: 30px;

.time{
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: #939699;
}

.heading{
  font-weight: bold;
font-size: 16px;
line-height: 25px;
margin-bottom: 5px;
}

img{
      width: 15px;
      height: 15px;
    }
.avatar{
      width: 30px;
      height: 30px;
    }
.times{
  margin-left: 10px;
  justify-content: space-between;
  width: 100%;
}
.flex{
  display: flex;
  align-items: center;
}

.div1 {
  grid-area: 1 / 4 / 4 / 5;
  width: 263px;
  height: 770px;
  background-color: #6E99AE;
  border-radius: 10px;
  color: #fff;
  z-index: -4;

   .more-read_btn{
     width: 100%;
     border: none;
     background: transparent;
     color: #fff;
     padding-top: 11px;
     border-top: 1px solid #B4D1E0;
    }
  .column{
    padding: 20px 25px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    font-size: 14px;
    line-height: 20px;
    border-bottom: 1px solid #B4D1E0;
  }
  ul{
    display: flex;
    flex-direction: column;
    padding: 0 25px;
    li{
      padding: 44px 0;
      position: relative;
      &:not(:last-child){
        border-bottom: 1px solid #B4D1E0;
      }
      &:before{
        content: '';
        width: 40px;
        height: 40px;
        display: block;
        position: absolute;
        top: 30px;
        z-index: -1;
        left: -10px;
        background-image: url(${QuoteImg});
      }
      p{
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        span{
          color: #D1E2EB;
        }
      }

      h4{
        font-weight: bold;
        font-size: 20px;
        line-height: 25px;
        z-index: 9999;
        color: #fff;
        margin-bottom: 15px;
      }
    }
  }
}

.div2 {
  grid-area: 1 / 1 / 2 / 3;
  width: 555px;
  height: 370px;
  background-color: #FFF;
  border-radius: 10px;
  padding-top: 15px;
  .bottom{
    padding-left: 35px;
    padding-top: 10px;
    border-top: 1px solid #D9DADB;


  }
  .info{
    margin-left: 35px;
    span{
     color: #6E99AE;
     font-size: 12px;
      line-height: 15px;
      letter-spacing: 0.5px;
    }
  }
  h4{
    font-weight: bold;
    font-size: 25px;
    line-height: 30px;
    margin-top: 20px;
    margin-bottom: 25px;
  }
  .car{
    width: 290px;
    height: 300px;
  }
}
.div3 {
  grid-area: 1 / 3 / 2 / 4;
  width: 263px;
  height: 370px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 18px 18px 24px 18px;
  background-color: #FFF;
  background: url(${carBg});
  .author{
   color: #fff;
   margin-left: 10px;
  }
  h3{
    font-weight: bold;
    font-size: 16px;
    line-height: 25px;
    letter-spacing: 0.5px;
    color: #fff;
    text-transform: uppercase;
    margin-bottom: auto;
  }
   .art{
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.5px;
    margin-bottom: 10px;
    text-transform: uppercase;
    color: #E7D9FF;
   }

  .popular{
    padding: 5px 11px;
    background-color: #3DC47E;
    border-radius: 3px;
    color: #fff;
    margin-bottom: 117px;
    width: 66px;
  }

}


.div4 {
  grid-area: 2 / 1 / 4 / 2;
  width: 263px;
  height: 370px;
  background-color: #FFF;
  border-radius: 10px;
  overflow: hidden;
  img{
    width: 100%;
    height: 275px;
  }
   h4{
    font-weight: bold;
font-size: 16px;
line-height: 25px;
padding: 15px 25px;
   }
}

.div5 {
  grid-area: 2 / 2 / 3 / 3;
  width: 263px;
  height: 170px;
  background-color: #FFF;
  border-radius: 10px;
  padding: 25px;
}
.div6 {
  grid-area: 2 / 3 / 3 / 4;
  width: 263px;
  height: 170px;
  background-color: #FFF;
  border-radius: 10px;
  padding: 25px;

 }
.div7 {
  grid-area: 3 / 2 / 4 / 3;
  width: 263px;
  height: 170px;
  background-color: #FFF;
  border-radius: 10px;
  padding: 25px;


 }
.div8 {
  grid-area: 3 / 3 / 4 / 4;
  width: 263px;
  height: 170px;
  background-color: #FFF;
  padding: 25px;

  border-radius: 10px;
  }
`
