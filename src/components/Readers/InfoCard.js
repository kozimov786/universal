import React from 'react';
import styled from 'styled-components';



import avatarImg from '../../images/avatar3.png';
import instaIcon from '../../images/insta-light.svg';
import facebookIcon from '../../images/facebool-light.svg';
import twitterIcon from '../../images/twitter-light.svg'

export default function InfoCard() {
  return <CardUser>
    <img className='avatar' src={avatarImg} alt="" />
    <h3>Mira Anderson</h3>
    <p>Traveler & Photographer</p>
    <span>82 articles</span>
    <div className='flex'>
      <a href="/">
        <img src={facebookIcon} alt="" />
      </a>
      <a href="/">
        <img src={twitterIcon} alt="" />
      </a>
      <a href="/">
        <img src={instaIcon} alt="" />
      </a>
    </div>
    <a className='follow' href="/">Follow on Universal</a>
  </CardUser>
}

const CardUser = styled.div`
  background: #FFFFFF;
border: 1px solid #D9DADB;
border-radius: 10px;
width: 264px;
text-align: center;
margin-top: -150px;
padding-top: 35px;
h3{
  font-weight: bold;
  font-size: 20px;
  line-height: 25px;
  margin-bottom: 5px;
}
p{
  margin-bottom: 15px;
}
span{
  color: #262D33;
  font-weight: bold;
}
.flex{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
  margin-bottom: 34px;
}
.follow{
  padding: 12px 25px 12px;
  border-top: 1px solid #D9DADB;
  font-weight: bold;
}
.avatar{
  width: 60px;
  height: 60px;
  margin: 0 auto;
  margin-bottom: 15px;
}

a{
  &:not(:last-child){
      margin-right: 10px;
    }
  img{
    width: 40px;
    height: 40px;

  }
}
`