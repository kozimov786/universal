import React from 'react';
import styled from 'styled-components';


import HeroBg from '../../images/story-hero-bg.png';
import HomeIcon from '../../images/homeIcon.svg';
import ArrowRight from '../../images/arrow-right.svg';
import ArrowLeft from '../../images/arrow-left.svg';
import ClockIcon from '../../images/clock.svg';
import CommentIcon from '../../images/comment.svg';
import HeartIcon from '../../images/Heart.svg';
import BookmarkIcon from '../../images/bookmark.svg'
import ShareIcon from '../../images/share.svg';

export default function DetailHero() {
  return (
    <Wrapper>
      <div className="container">
        <HeroNav>
          <span className='destionation'>Destinations</span>
          <Box>
            <a className='flex back-to-home' href='/'>
              <img src={HomeIcon} alt="" />
              <span>Back to Home</span>
            </a>
            <div className='flex'>
              <span className='flex prev'>
                <img src={ArrowLeft} alt="" />
                <span>Prev</span>
              </span>
              <span className='flex'>
                <span>Next</span>
                <img src={ArrowRight} alt="" />
              </span>
            </div>
          </Box>
        </HeroNav>
        <Heading>
          <img className='bookmark' src={BookmarkIcon} alt="" />
          <h1>Five Travel Stories From 2017 to Help You Escape Into the World</h1>
        </Heading>
        <p className='decr'>From the coastlines of Europe to remote Kodiak Island, Alaska, here are five of our favorite stories to help you explore the world</p>
        <HeroFooter>

          <p className='flex time'>
            <img src={ClockIcon} alt="" />
            <span>Aug 6, 10:23 pm</span>
          </p>
          <p className='flex comment'>
            <img src={CommentIcon} alt="" />
            <span>830</span>
          </p>
          <p className='flex'>
            <img src={HeartIcon} alt="" />
            <span>19</span>
          </p>

          <button>
            <span className='flex'>
              <img src={ShareIcon} alt="" />
              <span>142 shares</span>
            </span>
          </button>

        </HeroFooter>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
  background-image: url(${HeroBg});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  .decr{
    width: 556px;
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
    color: #FFFFFF;
    opacity: 0.85;
    margin-left: 97px;
    margin-bottom: 60px;
  }

  .flex{
    display: flex;
    align-items: center;
  }
`

const HeroNav = styled.div`
  width: 946px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 52px;
  color: #fff;
  .destionation{
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: #4592FF;

}
 `

const Box = styled.div`
  display: flex;
  align-items: center;
  .prev{
    margin-right: 20px;
  }
  .back-to-home{
    color: #fff;
    font-size: 14px;
line-height: 20px;
margin-right: 30px;
    img{
      width: 20px;
      height: 20px;
      margin-right: 5px;
    }
  }
 `

const HeroFooter = styled.div`
display: flex;
align-items: center;
margin-left: 97px;
.time,
.comment{
  margin-right: 20px;
}
button{
  background-color: transparent;
  padding: 10px 25px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 20px;
  color: #fff;
  margin-left: 30px;
}
  img{
    width: 15px;
    height: 15px;
    margin-right: 5px;
  }
 `

const Heading = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px;
  h1{
    font-weight: bold;
    width: 750px;
    font-size: 55px;
    line-height: 70px;
    color: #FFFFFF;

  }
  .bookmark{
    width: 30px;
    height: 30px;
    margin-right: 67px;
    margin-top: 15px;
  }
 `