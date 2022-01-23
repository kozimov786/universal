import React from 'react';
import styled from 'styled-components';


export default function TabList() {

  return (
    <TabListBox>
      <p className='recommend'>Recommended for you</p>
      <ListTab>
        <li>
          <span className='food'>Food</span>
          <p>For Chicken-Fried Steak, Too Much Is Just Enough</p>
        </li>
        <li>
          <span className='cars'>Cars</span>
          <p>Storm Has Car Dealers Doing Swift Business</p>
        </li>
        <li>
          <span className='movies'>Movies</span>
          <p>War Is Hell? In New Military Dramas, It’s One-Dimensional</p>
        </li>
        <li>
          <span className='nfl'>NFL</span>
          <p>11 surprising stat rankings for active NFL players</p>
        </li>
        <li>
          <span className='tech'>Tech Reviews</span>
          <p>The bookcases you can buy online and assemble yourself</p>
        </li>
      </ListTab>
    </TabListBox>
  )
}
const TabListBox = styled.div`
width: 263px;
  .recommend{
    padding: 20px 25px;
    letter-spacing: 0.5px;
    color: #262D33;
    font-weight: 700;
    font-size: 14px;
line-height: 20px;;
  }
`

const ListTab = styled.ul`
 display: flex;
 flex-direction: column;


 li{
  padding: 19px 25px;
  border-top: 1px solid #F5F5F5;
  transition: background 0.3s ease;
  position: relative;




  &:hover{
    background-color: #f5f5f5;
    cursor: pointer;
  }
  p{
    color: #4B5157;
  }
  .food{
   color: #3BBDC4;
   margin-bottom: 8px;
  }
  .movies{
   color: #AC8EE3;
   margin-bottom: 8px;

  }
  .nfl{
   color: #FFA34D;
   margin-bottom: 8px;

  }
  .cars{
   color: #6E99AE;
   margin-bottom: 8px;

  }
  .tech{
   color: #3DC47E;
   margin-bottom: 8px;

  }
 }
`