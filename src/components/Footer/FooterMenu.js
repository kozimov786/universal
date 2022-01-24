import React from 'react';
import styled from 'styled-components';

export default function FooterMenu() {
  return (
    <MenuWrapper>
      <News>
        <li>
          <h3>News</h3>
        </li>
        <li>
          <a href="/">Nation</a>
        </li>
        <li>
          <a href="/">World</a>
        </li>
        <li>
          <a href="/">Politics</a>
        </li>
        <li>
          <a href="/">Solar Eclipse</a>
        </li>
      </News>

      <Arts>
        <li>
          <h3>Arts</h3>
        </li>
        <li>
          <a href="/">Art & Design</a>
        </li>
        <li>
          <a href="/">Movies</a>
        </li>
        <li>
          <a href="/">People</a>
        </li>
        <li>
          <a href="/">Video: Arts</a>
        </li>
        <li>
          <a href="/">Theater</a>
        </li>
      </Arts>

      <Travel>
        <li>
          <h3>Travel</h3>
        </li>
        <li>
          <a href="/">Destinations</a>
        </li>
        <li>
          <a href="/">Flights</a>
        </li>
        <li>
          <a href="/">Business Travel</a>
        </li>
      </Travel>

      <Sports>
        <li>
          <h3>Sports</h3>
        </li>
        <li>
          <a href="/">Olympics</a>
        </li>
        <li>
          <a href="/">Motor Sports</a>
        </li>
        <li>
          <a href="/">Volleyball</a>
        </li>
        <li>
          <a href="/">MMA</a>
        </li>
        <li>
          <a href="/">Cycling</a>
        </li>
      </Sports>

      <Tech>
        <li>
          <h3>Tech</h3>
        </li>
        <li>
          <a href="/">Tech</a>
        </li>
        <li>
          <a href="/">Tech Columnists</a>
        </li>
        <li>
          <a href="/">Tech Reviews</a>
        </li>
        <li>
          <a href="/">Talking Tech</a>
        </li>
      </Tech>

      <Moneys>
        <li>
          <h3>Moneys</h3>
        </li>
        <li>
          <a href="/">Markets</a>
        </li>
        <li>
          <a href="/">Business</a>
        </li>
        <li>
          <a href="/">Personal Finance</a>
        </li>
        <li>
          <a href="/">Retirement</a>
        </li>
        <li>
          <a href="/">Careers</a>
        </li>
      </Moneys>

    </MenuWrapper>
  )
}

const MenuWrapper = styled.div`
  display: flex;
  align-items: start;
  h3{
    margin-top: 30px;
    font-family: "Lato","Arial",sans-serif;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 25px;
  }
  a{
    margin-bottom: 15px;
    display: inline-block;
    transition: all .3s ease-in;
    &:hover{
      text-decoration: underline;
      opacity: 0.8;
    }
  }

  `
const News = styled.ul`
border-top: 5px solid #FF4F52;
width: 195px;

`
const Arts = styled.ul`
border-top: 5px solid #AC8EE3;
width: 195px;

`
const Travel = styled.ul`
border-top: 5px solid #4592FF;
width: 195px;

`
const Sports = styled.ul`
border-top: 5px solid #FFA34D;
width: 195px;

`
const Tech = styled.ul`
border-top: 5px solid #3DC47E;
width: 195px;

`
const Moneys = styled.ul`
border-top: 5px solid #6E99AE;
width: 195px;

`
