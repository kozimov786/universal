import React, { useState } from 'react';
import styled from 'styled-components';
import TabItem from './TabItem';
import TabList from './TabList';


export default function HeroTabs() {

  const [toggle, setToggle] = useState(1)

  return (
    <TabsBox>
      <TabItem toggle={toggle} setToggle={setToggle} />
      <TabList toggle={toggle} setToggle={setToggle} />
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