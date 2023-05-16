import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const MainSlider = () => {

  const settings={
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll :1,
    autoplay:true
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
.slick-prev {
  z-index: 1;
  left: 30px;
}

.slick-next {
  right: 40px;
}

.slick-prev:before,
.slick-next:before {
  font-size: 30px;
  opacity: 0.5;
  color: white;
}

.slick-dots {
  display: flex;
  justify-content: center;
  color: white;

  li button:before {
    color: white;
  }

  li.slick-active button:before {
    color: white;
  }
}
`;