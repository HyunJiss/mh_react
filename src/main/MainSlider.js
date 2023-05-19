import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import styled from "styled-components";

const MainSlider = () => {

  const settings={
    fade:true,
    speed:300,
    cssEase: 'linear',
    autoplaySpeed:4000,
    infinite:true,
    autoplay:true,
    arrows:false,
    dots: true,
    pauseOnHover:false,
    customPaging: function(i) {
      return (
        <>
        <strong>
          {'0' + (i+1)}
          <span>{'/'}</span>
        </strong>{'03'}
        </>
      );
    },
    responsive : 
      [{
      breakpoint: 375,
        settings: 
        {
          centerPadding:'60',
          slideToShow:1,
          variableWidth:false
        }
      }]
  };
  
  return (
  <StyledSlider {...settings}>
  <div><img alt="" src="/img/mhholdings_main_image_1.png"/></div>
  <div><img alt="" src="/img/mhholdings_main_image_2.png"/></div>
  <div><img alt="" src="/img/mhholdings_main_image_3.png"/></div>
  </StyledSlider>
  );
};

export default MainSlider;

const StyledSlider = styled(Slider)`
.main_title {width: 14rem; max-width: 100%; margin: 0.25rem auto 3.3rem; font-size: 4.8rem; text-align: justify;letter-spacing:-11px;white-space: nowrap; line-height:6rem;}
.main_title{position:absolute;top:36%;left:41%;z-index:1;font-family:Malgun Gothic;color:#fff;font-weight: 300;}
.main_title strong{font-family:Noto Sans KR; font-weight:700; letter-spacing: -10px;}
.main_title span { display: inline-block; -webkit-transform: scale(1.3); opacity: 0; transform: scale(1.3); opacity: 0;-webkit-filter: blur(10px); filter: blur(10px); }
.main_title.animated span {-webkit-transform: scale(1); transform: scale(1); opacity: 1; -webkit-filter: blur(0); filter: blur(0); -webkit-transition: all 0.8s 1s; transition: all 0.8s 0.9s;}
.main_title.animated strong span {-webkit-transform: scale(1); transform: scale(1); opacity: 1; -webkit-filter: blur(0); filter: blur(0); -webkit-transition: all 0.8s 0.6s; transition: all 0.8s 0.6s;}
.slick-slide img{min-width: 100%;height: 100vh;}
.main_sub_title{position:absolute; top:32.5%; left:41.5%; z-index:1; font-size:1.2rem; color:#fff; font-family:'Noto Sans KR'; font-weight:100; letter-spacing: 0.4px; opacity:0;}
.main_sub_title.animated{opacity: 1; -webkit-transition: all 0.5s;transition: all 0.5s;}
.main_sub_title .font_st{margin-right:8px;}
.slick-dots{position:absolute; top:39%;}
.slick-dots .mainpage{width:50px; height:50px; line-height:50px; text-align:center; color:#fff; font-family:Noto Sans KR; font-size:16px; margin-bottom:5px; cursor:pointer;}
.progress{width:42px; height:45px;}
.progress circle{fill: none;stroke: #fff;stroke-width: 1;}
.progress-wrap{position:relative;}
.progress_page{font-size: 15px;font-family:Noto Sans KR;color: #fff;}
.play_control{position:absolute;top:57%;left:2.8%;}
.slick-dots > li{position: absolute;left:1.5rem;bottom:-12.7rem;height:1.8rem;font-size:21px;color:rgba(255, 255, 255, 0.5);-webkit-transform:rotate(-90deg);transform:rotate(-90deg);font-family:Noto Sans KR;}
.slick-dots > li strong{color: rgba(255, 255, 255, 1);font-size:1.8rem;}
.slick-dots > li strong span{ margin:0px 7px;}
.slick-dots > li strong {visibility: hidden;}
.slick-dots > li.slick-active strong{visibility:visible;}
.slick-dots::before{display:block; position:absolute; left:3.8rem; top:-2.2rem; width:2px; height:10.6rem; margin: 0 auto; background-color: #fff;content: '';}
.slick-dots > li::after{position:absolute;left:117%;top:33%; width: 0rem;height:3px;content: '';}
.slick-dots > li.slick-active::after {width: 10.6rem;-webkit-transition: 3s;transition: 3s;background-color: #4f79ea;}
.slick-slider .slick-slide img {-webkit-transform: scale(1);transform: scale(1);-webkit-transition: all 15s;transition: all 15s;}
.slick-slider .slick-active img {-webkit-transform: scale(1.1);transform: scale(1.1);}

`;