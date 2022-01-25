import React from 'react';
import styled from 'styled-components';

import Part1 from '../../images/part1.png'
import Part2 from '../../images/part2.png'
import Part3 from '../../images/part3.png'
import Part4 from '../../images/part4.png'
import eyeIcon from '../../images/eye.png'
import commentIcon from '../../images/comment.svg';


export default function Parts() {
  return (
    <Wrapper>
      <div className="container">
        <PartList>
          <PartItem>
            <img src={Part1} alt="" />
            <h3>An Evangelist of Singaporean Food Has a New Pulpit</h3>
            <div className='action'>
              <img src={eyeIcon} alt="" />
              <span>1,904</span>
              <img src={commentIcon} alt="" />
              <span>23</span>
            </div>
          </PartItem>

          <PartItem>
            <img src={Part2} alt="" />
            <h3>At the Mouth of the Mississippi, a Weird and Fragile Beauty</h3>
            <div className='action'>
              <img src={eyeIcon} alt="" />
              <span>1,904</span>
              <img src={commentIcon} alt="" />
              <span>23</span>
            </div>
          </PartItem>

          <PartItem>
            <img src={Part3} alt="" />
            <h3>Chattanooga Is Changing. But Its Charms Remain.</h3>
            <div className='action'>
              <img src={eyeIcon} alt="" />
              <span>1,904</span>
              <img src={commentIcon} alt="" />
              <span>23</span>
            </div>
          </PartItem>

          <PartItem>
            <img src={Part4} alt="" />
            <h3>How to Get by in a Country if You Don’t Know the Language</h3>
            <div className='action'>
              <img src={eyeIcon} alt="" />
              <span>1,904</span>
              <img src={commentIcon} alt="" />
              <span>23</span>
            </div>
          </PartItem>
        </PartList>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: #F5F5F5;
  padding-top: 60px;
  padding-bottom: 90px;
`
const PartList = styled.ul`
 display: flex;
 align-items: center;
 justify-content: space-between;
 `
const PartItem = styled.li`
 width: 263px;
 h3{
  font-weight: bold;
font-size: 16px;
line-height: 25px;
margin: 15px 0;
 }
 .action{
   display: flex;
   width: 100px;
   justify-content: space-between;
   align-items: center;
   color: #939699;
   img{
     width: 15px;
     height: 15px;
   }
 }
`