import React from 'react';
import styled from 'styled-components';
import Category from './Category';
import Recommend from './Recommend';

export default function Categories() {
  return (
    <Wrapper className='container'>
      <Category />
      <Recommend />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 60px;
`
