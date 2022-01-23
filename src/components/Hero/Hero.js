import React from 'react';
import styled from 'styled-components';
import HeroCard from './HeroCard';
import HeroTabs from './HeroTabs';


export default function Hero() {
  return (
    <HeroWrapper>
      <div className="container">
        <HeroCard />
        <HeroTabs />
      </div>
    </HeroWrapper>
  )
}
const HeroWrapper = styled.div`
 background-color: #262D33;
 height: 475px;
 padding-top: 30px;
`
