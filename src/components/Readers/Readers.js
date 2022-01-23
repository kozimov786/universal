import React from 'react';
import styled from 'styled-components';

import cardBg from '../../images/card-bg-ocean.png';
import gallery from '../../images/gallery.png';
import girlBg from '../../images/girl-bg.png';
import dots from '../../images/dots.svg';
import AvatarImg from '../../images/avatar-women.svg';

export default function Readers() {
  return (
    <Wrapper>
      <div className="container">
        <Grid>
          <div className="div1">

            <div className="profile">
              <img src={AvatarImg} alt="" />
              <p>By Sarah Jenkins</p>
              <span>Photographer</span>
            </div>

            <h3>
              Readers' Choice winners: Your wine country favorites
            </h3>

            <button>
              <div className='flex'>
                <img src={gallery} alt="" /> Watch photos <span>26</span>
              </div>
            </button>

            <div className='dots' >
              <img src={dots} alt="" />
            </div>

          </div>
          <div className="div2"> </div>
          <div className="div3"> </div>
          <div className="div4"> </div>
        </Grid>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
  background-color: #262D33;
 `

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 30px;



    .div1 {
       grid-area: 1 / 1 / 4 / 3;
       width: 555px;
       height: 570px;
       background-color: #fff;
       border-radius: 10px;
       background-image: url(${cardBg});
       color: #fff;

       h3{
         color: #fff;
         font-weight: bold;
          font-size: 40px;
          line-height: 50px;
          width: 455px;
          margin: 0 auto;
        text-align: center;
        margin-bottom: 45px;
      }

       button{
         border: none;
         margin-left: 185px;
         margin-bottom: 75px;
         background: #4592FF;
         border-radius: 20px;
         padding: 10px 20px;
         color: #fff;
         span{
           color: #C5E4FC;
           margin-left: 5px;
         }
         img{
          width: 20px;
          height: 20px;
          margin-right: 5px;
         }
       }
       .dots{
         width: 108px;
         height: 60px;
         margin: 0 auto;
         img{
           width: 100%;
           height: 100%;
         }
       }

       .flex{
         display: flex;
         align-items: center;
       }

       .profile{
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
         margin-top: 50px;
         margin-bottom: 30px;

         span{
           opacity: 0.4;
         }

         img{
          width: 45px;
          height: 45px;
          margin-bottom: 8px;
         }
       }


     }


    .div2 {
      grid-area: 1 / 3 / 3 / 5;
      width: 555px;
       height: 370px;
       background-color: #fff;
       border-radius: 10px;


    }
    .div3 {
      grid-area: 3 / 3 / 4 / 4;
      width: 263px;
       height: 170px;
       background-color: #fff;
       border-radius: 10px;


    }
    .div4 {
      grid-area: 3 / 4 / 4 / 5;
      width: 263px;
       height: 170px;
       background-color: #fff;
       border-radius: 10px;


    }

 `