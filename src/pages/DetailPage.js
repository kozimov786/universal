import React from 'react';
import styled from 'styled-components';
import DetailHero from '../components/DetailPage/DetailHero';
import Carousel from '../components/Readers/Carousel/Carousel';
import Comments from '../components/Readers/Comments';
import Information from '../components/Readers/Information';
import Material from '../components/Readers/Material';
import Parts from '../components/Readers/Parts';

export default function DetailPage() {
  return (
    <DetailWrapper>
      <DetailHero />
      <Information />
      <Carousel />
      <Material />
      <Parts />
      <Comments />
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
 background-color: #fff;
`