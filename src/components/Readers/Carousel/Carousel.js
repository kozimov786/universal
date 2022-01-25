import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import SlideBg from '../../../images/slide-bg.jpg';
import avatarSlide from '../../../images/avatar2.png';

function NextArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className="slick-arrow-right"
      style={{
        ...style,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: "absolute",
        top: '50%',
        right: '35px',
        width: '60px',
        transform: 'translateY(-50%)',
        height: '60px',
        cursor: "pointer",
        borderRadius: '50%',
        background: 'rgba(255, 255, 255, 0.4)'
      }}
      onClick={onClick}
    >
      <ChevronRightIcon />
    </div>
  );
}


function PrevArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className="slick-arrow-left"
      style={{
        ...style,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: "absolute",
        top: '50%',
        transform: 'translateY(-50%)',
        left: '35px',
        zIndex: '99',
        width: '60px',
        height: '60px',
        cursor: "pointer",
        borderRadius: '50%',
        background: 'rgba(255, 255, 255, 0.4)'
      }}
      onClick={onClick}
    >
      <ChevronLeftIcon />
    </div>
  );
}


export default class Carousel extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    };
    return (
      <div className="container">
        <Slider {...settings}>
          <Slide>
            <img src={SlideBg} alt="" />
            <div className="slide-bottom">
              <p>Geostatistics deal with quantitative data analysis, specifically the application of statistical methodology

              </p>
              <div className="slide-user">
                <img src={avatarSlide} alt="" />
                <p>
                  <span>Andrew Washington</span>
                  <span className="jobs">Photographer</span>
                </p>
              </div>
            </div>
          </Slide>
          <Slide>
            <img src={SlideBg} alt="" />
            <div className="slide-bottom">
              <p>Geostatistics deal with quantitative data analysis, specifically the application of statistical methodology

              </p>
              <div className="slide-user">
                <img src={avatarSlide} alt="" />
                <p>
                  <span>Andrew Washington</span>
                  <span className="jobs">Photographer</span>
                </p>
              </div>
            </div>
          </Slide>
          <Slide>
            <img src={SlideBg} alt="" />
            <div className="slide-bottom">
              <p>Geostatistics deal with quantitative data analysis, specifically the application of statistical methodology

              </p>
              <div className="slide-user">
                <img src={avatarSlide} alt="" />
                <p>
                  <span>Andrew Washington</span>
                  <span className="jobs">Photographer</span>
                </p>
              </div>
            </div>
          </Slide>
        </Slider>
      </div>
    );
  }
}

const Slide = styled.div`
 border-radius: 10px;
 overflow: hidden;
 margin-top: 40px;
 border: 1px solid #D9DADB;
 .jobs{
  font-size: 12px;
  line-height: 15px;
  color: #939699;
 }
 .slide-user{
   display: flex;
   align-items: center;
   border-left: 1px solid #D9DADB;
   padding: 12px 0;
   padding-left: 30px;
   p{
     display: flex;
     flex-direction: column;
   }
   img{
     width: 45px;
     height: 45px;
     margin-right: 10px;
   }
 }
 .slide-bottom{
   padding: 0 35px;
   display: flex;
   align-items: center;
   justify-content: space-between;

 }
`