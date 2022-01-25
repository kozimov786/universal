import React, { useState } from 'react';
import styled from 'styled-components';



import avatar1 from '../../images/ryan.png';
import avatar2 from '../../images/tara.png';
import avatar3 from '../../images/kris.png';
import commentIcon from '../../images/comment.svg';
import GoodIcon from '../../images/good.png';
import BadIcon from '../../images/bad.png';

export default function Comment(props) {

  const [send, setSend] = useState(true)

  return (
    <>
      <CommentItem>
        <img className='avatar' src={avatar1} alt="" />
        <Infos>
          <div className='heading'>
            <h3>Ryan Hall</h3>
            <span>July 17, 6:38 pm</span>
          </div>
          <p>In the event, "in places like Iraq and Jordan, leaders of the new sovereign states were brought in from the outside, tailored to suit colonial interests and commitments</p>
          <div className='action'>
            <img src={commentIcon} alt="" />
            <span>Reply</span>
            <img src={GoodIcon} alt="" />
            <span className='good'>+10</span>
            <img src={BadIcon} alt="" />
          </div>
        </Infos>
      </CommentItem>

      <CommentItem send={send}>
        <img className='avatar' src={avatar2} alt="" />
        <Infos>
          <div className='heading'>
            <h3>Lora Morrow</h3>
            <span>July 17, 6:38 pm</span>
          </div>
          <p>Likewise, most states in the Persian Gulf were handed over to those who could protect and safeguard imperial interests in the post-withdrawal phase</p>
          <div className='action'>
            <img src={commentIcon} alt="" />
            <span>Reply</span>
            <img src={GoodIcon} alt="" />
            <span>0</span>
            <img src={BadIcon} alt="" />
          </div>
        </Infos>
      </CommentItem>

      <CommentItem>
        <img className='avatar' src={avatar3} alt="" />
        <Infos>
          <div className='heading'>
            <h3>Tara Stark</h3>
            <span>July 17, 6:38 pm</span>
          </div>
          <p>French Indochina was divided into five subdivisions: Tonkin, Annam, Cochinchina, Cambodia and Laos. Cochinchina was the first territory under French Control. Saigon was conquired in 1859. Then, in 1887, the Indochinese Union was established.</p>
          <div className='action'>
            <img src={commentIcon} alt="" />
            <span>Reply</span>
            <img src={GoodIcon} alt="" />
            <span className='bad'>-3</span>
            <img src={BadIcon} alt="" />
          </div>
        </Infos>
      </CommentItem>
    </>
  )
}

const CommentItem = styled.li`
 padding-top: 20px;
 padding-bottom: 29px;
 display: flex;
 border-top: 1px solid #D9DADB;
 align-items: center;
 margin-left: ${props => props.send ? "90px" : ''};

.send{
  margin-left: 30px;
}

 .avatar{
   width: 75px;
   height: 75px;
   margin-right: 15px;
 }

`

const Infos = styled.div`
 p{
  font-weight: normal;
  font-size: 18px;
  line-height: 30px;
  width: 570px;
  margin-bottom: 15px;
 }
 .heading{
   display: flex;
   align-items: center;
   margin-bottom: 10px;
   span{
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    color: #939699;
    margin-left: 10px;
   }
 }
 .action{
   width: 150px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   font-size: 12px;
   line-height: 15px;
   .good{
     color: #3DC47E;
   }
   .bad{
     color: red;
   }
   img{
     width: 15px;
     height: 15px;
   }
 }
`
