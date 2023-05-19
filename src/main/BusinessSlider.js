import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
const BusinessSlider = () => {

  const settings={
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll :1,
    autoplay:true
  };

  return (
     <div className="business_slider_wrap" style={{width:'1200px'}}>
      <StyledSlider {...settings}>
        <div>
          <p className="busi_info">
            <span className="site_name">이메딕</span>
            <span className="site_sub_info">초중고등학교에 필수의약품 정보와 질환정보를 엄선하여 수록하고 보건교육시 활용할 수 있는 다양한 자료와 서비스를 제공합니다.</span>
            <span className="site_sub_btn"><a href="http://www.emedic.co.kr"  rel="noreferrer">바로가기 <img alt="" src="/img/busi_site_go.png" className="busi_site_go"/></a></span>
          </p>
          <p className="busi_info_img"><img alt="" src="/img/busi_site1.png"/></p>
        </div>
        <div>
          <p className="busi_info">
            <span className="site_name">이메딕 어플</span>
            <span className="site_sub_info">내 손안의 작은 보건실<br/>이메딕 보건실상용제품, 보건교사방, 마이페이지를 이동하면서 간편하게 어플로 확인하세요. </span>
            <span className="site_sub_btn"><a href="https://play.google.com/store/apps/details?id=com.nextelkorea.emedic&hl=ko"  rel="noreferrer">바로가기 <img alt="" src="/img/busi_site_go.png" className="busi_site_go"/></a></span>
          </p>
          <p className="busi_info_img"><img alt="" src="/img/busi_site5.png"/></p>
        </div>
        <div>
          <p className="busi_info">
            <span className="site_name">아이메딕</span>
            <span className="site_sub_info">대학교, 산업체, 공기관, 사회복지시설에서 근무하시는 간호사선생님들을 위한 의약품 정보를 제공합니다.</span>
            <span className="site_sub_btn"><a href="http://http://www.i-medic.co.kr" target="_blank" rel="noreferrer" >바로가기 <img alt="" src="/img/busi_site_go.png" className="busi_site_go"/></a></span>
          </p>
          <p className="busi_info_img"><img alt="" src="/img/busi_site2.png"/></p>
        </div>
        <div>
          <p className="busi_info">
            <span className="site_name">스쿨캠페인</span>
            <span className="site_sub_info">대웅제약, jw중외제약, 일동제약 등의 <br/> 제약회사들과 학생들의 건강을 지키기 위한 캠페인을 진행합니다.</span>
            <span className="site_sub_btn"><a href="http://www.schoolcampaign.or.kr"  rel="noreferrer">바로가기<img alt="" src="/img/busi_site_go.png" className="busi_site_go"/></a></span>
          </p>
          <p className="busi_info_img"><img alt="" src="/img/busi_site3.png"/></p>
        </div>
        <div>
          <p className="busi_info">
            <span className="site_name">에포키</span>
            <span className="site_sub_info">"Epochal Key - 획기적인 해결안"<br/>디자인을 중심으로 다양하고 재미진 사건을 만들어나가는 회사입니다.</span>
            <span className="site_sub_btn"><a href="http://www.epokey.com"  rel="noreferrer">바로가기<img alt="" src="/img/busi_site_go.png" className="busi_site_go"/></a></span>
          </p>
          <p className="busi_info_img"><img alt="" src="/img/busi_site4.png"/></p>
        </div>
      </StyledSlider>
    </div>
  );
};

export default BusinessSlider;

const StyledSlider = styled(Slider)`

`;