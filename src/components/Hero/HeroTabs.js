import React from 'react';
import styled from 'styled-components';
import TabItem from './TabItem';
import TabList from './TabList';

export default function HeroTabs() {
  return (
    <TabsBox>
      <TabItem />
      <TabList />
    </TabsBox>
  )
}

const TabsBox = styled.div`
  height: 570px;
  background-color: #fff;
  margin-top: 30px;
  overflow: hidden;
  display: flex;
  border-radius: 10px;
`