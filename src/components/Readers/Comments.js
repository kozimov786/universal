import React from 'react';
import styled from 'styled-components';

import editIcon from '../../images/edit-icon.svg';
import Comment from './Comment';
import LoadingIcon from '../../images/loading.svg';
import Sending from './Sending';



export default function Comments() {
  return (
    <div className="container">
      <Wrapper>
        <CommentNav>
          <h2>Comments <span>19</span></h2>
          <button>
            <div>
              <img src={editIcon} alt="" />
              <span>Add comment</span>
            </div>
          </button>
        </CommentNav>
        <CommentList>
          <Comment />
        </CommentList>
        <Load>
          <div>
            <img src={LoadingIcon} alt="" />
            <span>Load More</span>
          </div>
        </Load>
        <Sending />
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
 width: 750px;
 margin-left: 97px;
 padding-top: 90px;
 padding-bottom: 30px;
`

const CommentNav = styled.div`
 display: flex;
   align-items: center;
   justify-content: space-between;
   padding-bottom: 29px;
   h2{
    font-weight: bold;
    font-size: 40px;
    line-height: 50px;
    margin-right: 11px;
    span{
      color: #939699;
      font-weight: normal;
    }

   }
   button{
   background-color: transparent;
   padding: 10px 24px;
   border: 1px solid #D9DADB;
   border-radius: 20px;
   cursor: pointer;
   div{
     img{
      width: 20px;
      height: 20px;
      margin-right: 10px;
     }
     display: flex;
     align-items: center;
   }
 }

`

const CommentList = styled.ul`
 display: flex;
 flex-direction: column;
`
const Load = styled.button`
    width: 100%;
    background-color: transparent;
    padding: 15px;
    border: 1px solid #D9DADB;
    border-radius: 25px;
    margin-bottom: 60px;
    cursor: pointer;
    div{
    width: 89px;
    margin: 0 auto;
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img{
      width: 15px;
      height: 15px;
    }
  }

`