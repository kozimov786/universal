import React from 'react';
import styled from 'styled-components';


import TabBg from '../../images/tab-bg.png';
import avatarImg from '../../images/avatar.png'
import playImg from '../../images/Play.svg'
import ButtonItem from '../part/ButtonItem';

export default function TabItem() {
  return (
    <TabBox>
      <User>
        <img src={avatarImg} alt="" />
        <p>
          <p>By Benjamin Turner</p>
          <span>Traveler</span>
        </p>
      </User>
      <div>
        <span className='destionation'>Destionation</span>
        <h2>In Southeast England, White Cliffs and Fish</h2>
        <Wrapper>
          <ButtonItem text='Read more' />
          <MusicBox>
            <img className='play' src={playImg} alt="" />
            <p>
              <span>The chalk cliff of Beachy Head</span>
              <span className='time'>18:05</span>
            </p>
          </MusicBox>
        </Wrapper>
      </div>
    </TabBox>
  )
}

const TabBox = styled.div`
  background: url(${TabBg});
  padding: 50px 55px 100px 55px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width:877px;
  height: 570px;

  .destionation{
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: #4592FF;
  }

  h2{
    font-weight: bold;
    font-size: 40px;
    line-height: 50px;
    width: 590px;
    margin-top: 25px;
    margin-bottom: 45px;
    color: #fff;
  }
`
const User = styled.div`
display: flex;
align-items: center;
color: #fff;
 p{
   display: flex;
   flex-direction: column;
 }
 span{
   opacity: 0.4;
 }
 img{
   width: 45px;
   height: 45px;
   margin-right: 10px;
 }
`

const Wrapper = styled.div`
display: flex;
align-items: center;
  .play{
    width: 40px;
  }

`

const MusicBox = styled.div`
 display: flex;
 align-items: center;

 p{
   margin-left: 10px;
   display: flex;
   flex-direction: column;
   color: #fff;
   .time{
     opacity: 0.4;
   }
 }
`