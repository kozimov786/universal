import React from 'react';
import styled from 'styled-components';


import CommentIcon from '../../images/comment.svg';
import heartIcon from '../../images/Heart.svg';
import HandImg from '../../images/hand.png'
import CakeImg from '../../images/cake.png'
import FlowerImg from '../../images/card-flower.png'
import ManImg from '../../images/man-in-water.png'
import treeImg from '../../images/tree.png'
import BuildingImg from '../../images/building.png'
import bookmarkIcon from '../../images/bookmark.svg'

export default function Category() {
  return (
    <Card>
      <CardList>
        <CardItem>
          <img className='main-img' src={HandImg} alt="" />
          <CardInfo>
            <div className='flex varies_flex'>
              <span className='varies'>Flights</span>
              <img src={bookmarkIcon} alt="" />
            </div>

            <h2>Passengers Suffer as Crowded Field Puts Pressure on Europe’s Airlines</h2>
            <p>Weaker carriers have fallen by the wayside amid fierce competition, while others have been hit by bad luck. The result: thousands of canceled flights.</p>
            <div className='flex action_flex'>
              <time>Aug 16</time>
              <img src={CommentIcon} alt="" />
              <span>243</span>
              <img src={heartIcon} alt="" />
              <span>422</span>
            </div>
          </CardInfo>
        </CardItem>

        <CardItem>
          <img className='main-img' src={CakeImg} alt="" />
          <CardInfo>
            <div className='flex varies_flex'>
              <span className='varies'>Food</span>
              <img src={bookmarkIcon} alt="" />
            </div>

            <h2>PThree Courses, 20 Euros: The Affordable Dining Renaissance in Paris</h2>
            <p>The Los Angeles area, for all of its culinary diversity, has not historically been thought of as a haven for bread lovers. The area has a reputation as a place where gluten fears to tread.</p>
            <div className='flex action_flex'>
              <time>Aug 16</time>
              <img src={CommentIcon} alt="" />
              <span>243</span>
              <img src={heartIcon} alt="" />
              <span>422</span>
            </div>
          </CardInfo>
        </CardItem>

        <CardItem>
          <img className='main-img' src={FlowerImg} alt="" />
          <CardInfo>
            <div className='flex varies_flex'>
              <span className='varies'>Science</span>
              <img src={bookmarkIcon} alt="" />
            </div>

            <h2>Watch the High-Flying Physics of a Plant’s Exploding Fruits</h2>
            <p>Three undergradute physics majors and their professor worked out how the hairyflower wild petunia shoots tiny seeds more than 20 feet through the air.</p>
            <div className='flex action_flex'>
              <time>Aug 16</time>
              <img src={CommentIcon} alt="" />
              <span>243</span>
              <img src={heartIcon} alt="" />
              <span>422</span>
            </div>
          </CardInfo>
        </CardItem>

        <CardItem>
          <img className='main-img' src={ManImg} alt="" />
          <CardInfo>
            <div className='flex varies_flex'>
              <span className='varies'>Health</span>
              <img src={bookmarkIcon} alt="" />
            </div>

            <h2>How the Shape of Your Ears Affects What You Hear</h2>
            <p>We’re able to locate sound because our brains grasp the shape of our ears. When that shape changes, we need time and practice to adapt. Ears are a peculiarly individual piece of anatomy.</p>
            <div className='flex action_flex'>
              <time>Aug 16</time>
              <img src={CommentIcon} alt="" />
              <span>243</span>
              <img src={heartIcon} alt="" />
              <span>422</span>
            </div>
          </CardInfo>
        </CardItem>

        <CardItem>
          <img className='main-img' src={treeImg} alt="" />
          <CardInfo>
            <div className='flex varies_flex'>
              <span className='varies'>Science</span>
              <img src={bookmarkIcon} alt="" />
            </div>

            <h2>Forests Protect the Climate. A Future With More Storms Would Mean Trouble.</h2>
            <p>With an increase in extreme weather expected in the years to come, forests could be changed permanently as the world continues to warm</p>
            <div className='flex action_flex'>
              <time>Aug 16</time>
              <img src={CommentIcon} alt="" />
              <span>243</span>
              <img src={heartIcon} alt="" />
              <span>422</span>
            </div>
          </CardInfo>
        </CardItem>

        <CardItem>
          <img className='main-img' src={BuildingImg} alt="" />
          <CardInfo>
            <div className='flex varies_flex'>
              <span className='varies'>Art & Design</span>
              <img src={bookmarkIcon} alt="" />
            </div>

            <h2>New Contemporary Institute Reverberates in Richmond’s Historic Landscape</h2>
            <p>The center, which will open in April, takes a bold look at race and other social issues that still resonate in the region as well as the nation. A new Institute for Contemporary Art is set to open.</p>
            <div className='flex action_flex'>
              <time>Aug 16</time>
              <img src={CommentIcon} alt="" />
              <span>243</span>
              <img src={heartIcon} alt="" />
              <span>422</span>
            </div>
          </CardInfo>
        </CardItem>
      </CardList>
    </Card>
  )
}

const Card = styled.div`
width: 848px;
 border-radius: 10px;
 background-color: #fff;
 padding:0 25px;
`
const CardList = styled.ul`
    display: flex;
    flex-direction: column;
    img{
      width: 15px;
      height: 15px;
    }
    .flex{
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
`
const CardItem = styled.li`
 display: flex;
 justify-content: space-between;
 padding: 25px 0;
 &:not(:last-child){
   border-bottom: 1px solid #D9DADB;
 }
 h2{
  font-weight: bold;
font-size: 20px;
line-height: 25px;
margin-bottom: 10px;
 }
 .action_flex{
   width: 130px;
   margin-top: 20px;
 }

 .varies_flex{
   margin-bottom: 15px;
 }
 .varies{
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #4592FF;
 }
 .main-img{
   width: 336px;
   margin-right: 25px;
   height: 195px;
 }
`

const CardInfo = styled.div`
 display: flex;
 flex-direction: column;
`