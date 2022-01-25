import React from 'react';
import styled from 'styled-components';

import GirafeImg from '../../images/girafe.png';
import CommentIcon from '../../images/comment.svg';
import eyeIcon from '../../images/eye.png';
import WilliamImg from '../../images/william.png';
import QuoteImg from '../../images/quote.svg';

export default function Material() {
  return (
    <div className='container'>
      <Content>
        <div className='info'>
          <p>The oldest known world maps date back to ancient Babylon from the 9th century BC. The best known Babylonian world map, however, is the Imago Mundi of 600 BC. The map as reconstructed by Eckhard Unger shows Babylon on the Euphrates, surrounded by a circular landmass showing Assyria, Urartu and several cities, in turn surrounded by a "bitter river" (Oceanus), with seven islands arranged around it so as to form a seven-pointed star.
          </p>
          <p className='middle'>
            The accompanying text mentions seven outer regions beyond the encircling ocean. The descriptions of five of them have survived. In contrast to the Imago Mundi, an earlier Babylonian world map dating back to the 9th century BC depicted Babylon as being further north from the center of the world, though it is not certain what that center was supposed to represent.
          </p>
          <p>
            The ideas of Anaximander: considered by later Greek writers to be the true founder of geography, come to us through fragments quoted by his successors. Anaximander is credited with the invention of the gnomon, the simple, yet efficient Greek instrument that allowed the early measurement of latitude. Thales is also credited with the prediction of eclipses. The foundations of geography can be traced to the ancient cultures, such as the ancient, medieval, and early modern Chinese.
          </p>
          <Quote>
            <h3>Names of places... are not geography... know by heart a whole gazetteer full of them would not, in itself, constitute anyone a geographer. Geography has higher aims than this: it seeks to classify phenomena.</h3>
            <div className='user'>
              <img src={WilliamImg} alt="" />
              <p>William Peterson</p>
              <span>Travel Agent</span>
            </div>
          </Quote>
          <p>
            The Greeks, who were the first to explore geography as both art and science, achieved this through Cartography, Philosophy, and Literature, or through Mathematics. There is some debate about who was the first person to assert that the Earth is spherical in shape, with the credit going either to Parmenides or Pythagoras. Anaxagoras was able to demonstrate that the profile of the Earth was circular by explaining eclipses. However, he still believed that the Earth was a flat disk, as did many of his contemporaries.
          </p>
          <p className='last'>
            The first rigorous system of latitude and longitude lines is credited to Hipparchus. He employed a sexagesimal system that was derived from Babylonian mathematics.
          </p>
          <Hashtags>
            <a href="/">
              Travel
            </a>
            <a href="/">
              Destinations
            </a>
            <a href="/">
              Nature
            </a>
            <a href="/">
              World
            </a>
            <a href="/">
              Alaska
            </a>
          </Hashtags>
          <Support>
            <h3>Show Your Support</h3>
            <div className="buttons">
              <button>
                <div>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.1187 3.94706C16.2268 2.94916 15.041 2.40002 13.7794 2.40002C12.5178 2.40002 11.459 2.94916 10.5667 3.94706L9.99997 4.85223L9.43333 3.94706C8.5413 2.94916 7.48219 2.40002 6.22076 2.40002C4.95938 2.40002 3.7731 2.94916 2.88115 3.94706C1.03962 6.00735 1.03962 9.35953 2.88115 11.419L9.47989 17.7609C9.58778 17.8821 9.72209 17.9563 9.86242 17.9848C9.90948 17.9952 9.95681 18 10.0042 18C10.1909 18 10.3779 17.9204 10.5201 17.7609L17.1188 11.419C18.9604 9.35953 18.9604 6.00735 17.1187 3.94706Z" fill="white" />
                  </svg>
                  <p>Like it</p>
                  <span>42</span>
                </div>
              </button>
              <button className='facebook'>
                <div>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M14.6234 1.00375L12.2249 1C9.5302 1 7.78878 2.73871 7.78878 5.42982V7.47227H5.37715C5.16875 7.47227 5 7.63668 5 7.83949V10.7988C5 11.0016 5.16895 11.1658 5.37715 11.1658H7.78878V18.633C7.78878 18.8358 7.95753 19 8.16593 19H11.3124C11.5208 19 11.6896 18.8356 11.6896 18.633V11.1658H14.5093C14.7177 11.1658 14.8865 11.0016 14.8865 10.7988L14.8876 7.83949C14.8876 7.74211 14.8478 7.64886 14.7772 7.57994C14.7066 7.51103 14.6103 7.47227 14.5103 7.47227H11.6896V5.74086C11.6896 4.90868 11.8933 4.48622 13.0073 4.48622L14.623 4.48566C14.8312 4.48566 15 4.32124 15 4.11863V1.37077C15 1.16835 14.8314 1.00412 14.6234 1.00375Z" fill="white" />
                  </svg>
                  <p>Facebook</p>
                  <span>452</span>
                </div>
              </button>

              <button className='twitter'>
                <div>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M18.979 4.36284C18.9532 4.33213 18.9106 4.32171 18.8743 4.33846C18.3361 4.57945 17.77 4.7527 17.1869 4.85505C17.8059 4.38498 18.2672 3.73403 18.5037 2.98761C18.5151 2.95188 18.5033 2.9128 18.4744 2.88954C18.4453 2.86628 18.4049 2.8633 18.373 2.88247C17.6758 3.29987 16.9206 3.59409 16.1276 3.75729C15.4248 3.0211 14.4435 2.59998 13.4278 2.59998C11.3623 2.59998 9.68211 4.29603 9.68211 6.38083C9.68211 6.63299 9.70626 6.88273 9.75419 7.12521C6.89336 6.94693 4.21836 5.56053 2.3995 3.30862C2.38088 3.28554 2.35268 3.2727 2.32318 3.27568C2.29387 3.27791 2.26769 3.29466 2.25294 3.32016C1.9211 3.89481 1.74578 4.55228 1.74578 5.2211C1.74578 6.38027 2.2675 7.46408 3.15591 8.17924C2.69853 8.12378 2.25183 7.97844 1.84902 7.75271C1.82192 7.73727 1.78818 7.73745 1.76108 7.75327C1.73398 7.7689 1.71683 7.79793 1.7161 7.82957L1.71573 7.87795C1.71573 9.54274 2.8025 11.0045 4.3487 11.4898C3.94145 11.5561 3.51891 11.5516 3.10356 11.4716C3.07295 11.4658 3.04088 11.4764 3.01986 11.5003C2.99903 11.5241 2.99202 11.5574 3.00161 11.5875C3.46526 13.0484 4.75354 14.0728 6.25309 14.2005C5.00224 15.1255 3.5237 15.6129 1.96147 15.6129C1.67369 15.6129 1.38389 15.5956 1.09998 15.5619C1.05942 15.5573 1.01923 15.5817 1.00522 15.6209C0.991209 15.6606 1.00614 15.7049 1.04117 15.7274C2.73171 16.8218 4.68643 17.4 6.69425 17.4C13.2619 17.4 17.1865 12.0148 17.1865 6.80866C17.1865 6.66369 17.1837 6.51947 17.178 6.37562C17.8865 5.85251 18.4947 5.21217 18.9851 4.47096C19.007 4.43783 19.0046 4.39373 18.979 4.36284Z" fill="white" />
                  </svg>
                  <p>Twitter</p>
                  <span>22</span>
                </div>
              </button>
              <button className='dots'>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M39.5 20C39.5 30.7696 30.7696 39.5 20 39.5C9.23045 39.5 0.5 30.7696 0.5 20C0.5 9.23045 9.23045 0.5 20 0.5C30.7696 0.5 39.5 9.23045 39.5 20Z" stroke="#D9DADB" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C10.8954 22 10 21.1046 10 20C10 18.8954 10.8954 18 12 18C13.1046 18 14 18.8954 14 20C14 21.1046 13.1046 22 12 22ZM20 22C18.8954 22 18 21.1046 18 20C18 18.8954 18.8954 18 20 18C21.1046 18 22 18.8954 22 20C22 21.1046 21.1046 22 20 22ZM28 22C26.8954 22 26 21.1046 26 20C26 18.8954 26.8954 18 28 18C29.1046 18 30 18.8954 30 20C30 21.1046 29.1046 22 28 22Z" fill="#BCBFC2" />
                </svg>
              </button>
            </div>
          </Support>
        </div>

        <RightSide>
          <h3>Material on Theme</h3>
          <img src={GirafeImg} alt="" />
          <h4>Application of Postcolonial Theory in the Middle East</h4>
          <p>In the essays "Overstating the Arab State", by Nazih Ayubi, and "Is Jordan Palestine?", by Raphael Israel, the authors deal with the psychologically fragmented postcolonial identity.</p>
          <div className='action'>
            <img src={eyeIcon} alt="" />
            <span>1,623</span>
            <img src={CommentIcon} alt="" />
            <span>12</span>
          </div>
        </RightSide>
      </Content>
    </div>
  )
}

const Content = styled.div`
   width: 100%;
    max-width: 963px;
    margin-top: 30px;
    padding-bottom: 90px;
    margin-left: 97px;
    margin-right: 94px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    .last{
      margin-top: 15px;
    }
    .middle{
      margin: 30px 0;
    }
    .info{
      width: 623px;
      margin-right: 60px;
      font-weight: normal;
      font-size: 18px;
      line-height: 30px;
    }
`

const RightSide = styled.div`
  width: 263px;
  margin-top: 150px;
  h3{
    font-weight: bold;
font-size: 20px;
line-height: 25px;
margin-bottom: 20px;
  }
  h4{
    font-weight: bold;
font-size: 16px;
line-height: 25px;
margin-top: 15px;
margin-bottom: 5px;
  }
  .action{
    display: flex;
    align-items: center;
    width: 100px;
    justify-content: space-between;
    margin-top: 20px;
    color: rgba(147, 150, 153, 1);
    img{
      width: 15px;
      height: 15px;
    }
  }
`

const Quote = styled.div`
 display: flex;
 margin-top: 65px;
 margin-bottom: 30px;
 .user{
   p{
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
    white-space: nowrap;
   }
   span{
   color: #939699;
   }
   img{
     width: 60px;
     height: 60px;
   }
 }
 h3{
   width: 458px;
   margin-right: 30px;
   font-weight: bold;
  font-size: 25px;
  line-height: 30px;
  position: relative;
  &::before{
    content: '';
    width: 70px;
    height: 70px;
    display: block;
    opacity: 0.75;
    position: absolute;
    top: -10px;
    left: -10px;
    background-image: url(${QuoteImg});
    background-repeat: no-repeat;
  }
 }
`
const Hashtags = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
  a{
    padding: 5px 14px;
    border: 1px solid #D9DADB;
    border-radius: 5px;
    font-size: 14px;
line-height: 20px;
margin-right: 10px;

  }
`

const Support = styled.div`
  padding-top: 30px;
  border-top: 1px solid #000;
  .buttons{
    display: flex;
    align-items: center;
  }
  .dots{
    padding: 0;
    background-color: transparent;
  }
  .facebook{
    background-color: #4267B2;
    margin:0 10px;
    span{
      color: rgba(187, 198, 255, 1);
    }
  }
  .twitter{
    margin-right: 10px;
    background-color: #1DA1F2;
    span{
      color: rgba(197, 228, 252, 1);
    }
  }
  h3{
    margin-bottom: 25px;
  }
  button{
    background: #FF4F52;
    border-radius: 20px;
    border: none;
    padding: 10px 20px;
    p{
      margin-left: 10px;
    }
    span{
     color: #FFC4C9;
     margin-left: 5px;
    }
    div{
      display: flex;
      align-items: center;
      color: #fff;
    }
  }
`