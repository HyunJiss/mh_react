import React from 'react';
import Slider from "react-slick";
import 'fullpage.js';
import $ from 'jquery';
import 'fullpage.js/dist/jquery.fullpage.min.css';
const HealthSlider = () => {
  
  const settings={
    cssEase: 'linear',
    isFinite: false,
    variableWidth: true,
    autoplay:false,
    arrows:false,
    dots: false,
    responsive : 
        [{
          breakpoint: 768,
          settings: 
          {
            touchMove: true,
            isFinite: true,
            dots:true,
            autoplay:true,
            swipeToSlide: true,
            slideToShow:1
          }
        }]
  };

  //헬스컬럼 상세 임시
  const goHealthDetail = () =>{
    const healthPopup = document.querySelector(".health_popup");
    healthPopup.classList.add('on');
    document.body.style.overflowY ="hidden";
    $.fn.fullpage.setMouseWheelScrolling(false);
    $.fn.fullpage.setAllowScrolling(false);

  }
  return (
    <ul className="health_column_wrap">
      <Slider {...settings}>
          <li className="column back1">
            <a href="#!" onClick={goHealthDetail}>
              <span className="coulmn_cate_img">
                <img alt="" src="" className="column_img"/>
              </span>
              <span className="column_cate">sub_main_cate</span>
              <span className="column_cate_title">title</span>
              <span className="column_read_more">Read more</span>
            </a>
          </li>
          <li className="column back2">
            <a href="#!">
              <span className="coulmn_cate_img">
                <img alt="" src="" className="column_img"/>
              </span>
              <span className="column_cate">sub_main_cate</span>
              <span className="column_cate_title">title</span>
              <span className="column_read_more">Read more</span>
            </a>
          </li>
          <li className="column back3">
            <a href="#!">
              <span className="coulmn_cate_img">
                <img alt="" src="" className="column_img"/>
              </span>
              <span className="column_cate">sub_main_cate</span>
              <span className="column_cate_title">title</span>
              <span className="column_read_more">Read more</span>
            </a>
          </li>
          <li className="column back4">
            <a href="#!">
              <span className="coulmn_cate_img">
                <img alt="" src="" className="column_img"/>
              </span>
              <span className="column_cate">sub_main_cate</span>
              <span className="column_cate_title">title</span>
              <span className="column_read_more">Read more</span>
            </a>
          </li>
          </Slider>
        </ul>
  );
};

export default HealthSlider;