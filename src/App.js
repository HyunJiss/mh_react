import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";

//ff
function App () {
  return {
    <div>
  ``<header id="header">
    <div class="h_wrap">
      <h1 class="logo"><a data-menuanchor="MH HOLDINGS" href="#MH HOLDINGS"><img src="<%=path_main%>/img/main/mhholdingsLogo.png"></a></h1>
      <span id="m_buttom" onclick="m_button_click();"></span>
      <nav id="menu">
        <a class="menu-links" data-menuanchor="BUSINESS" href="#BUSINESS">BUSINESS</a>
        <a class="menu-links" data-menuanchor="HEALTH COLUMN" href="#HEALTH COLUMN">HEALTH COLUMN</a>
        <a class="menu-links" data-menuanchor="COMPANY" href="#COMPANY">COMPANY</a>
        <a class="menu-links" data-menuanchor="CONTACT US" href="#CONTACT US">CONTACT US</a>
      </nav>
    </div>
  </header>
  <div id="mhmain">
      <div class="section active" id="section0">
        <div id="content0">
          <div class="main_sub_title">
            <span class="point_font">M</span><span class="font_st">arketing</span><span class="point_font">H</span><span class="font_st">ope</span><span>MHholdings</span>
          </div>
          <div class="main_title">
          <strong>
            <span style="letter-spacing:-7.8px;">희</span>
            <span style="letter-spacing:-1px;">망</span>
          </strong>
          <span style="margin-left:2px;">담</span>
          <span>은</span>
          <br/>
          <strong style="margin-right:7px;">
            <span style="margin-right:4px;">헬</span>
            <span style="margin-right:4px;">스</span>
          </strong>
          <span>케</span>
          <span>어</span>  
          <br/>
          <span style="margin-right:17px; letter-spacing:-7px;">광고</span> 
          <span style="margin-left:-5%; letter-spacing:-8px;">마케팅</span>   	   	
          </div>
        </div>
        <div class="mh_main_wrap">
          <div><img src="<%=path_main%>/img/main/mhholdings_main_image_1.png"></div>
          <div><img src="<%=path_main%>/img/main/mhholdings_main_image_2.png"></div>
          <div><img src="<%=path_main%>/img/main/mhholdings_main_image_3.png"></div>
        </div>
      </div>
      <div class="section" id="section1">
      <h2 class="title busi_title">BUSINESS</h2>
      <div class="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="common_back">
        <div class="gone"><img src="<%=path_main%>/img/main/greenone_c.png"/></div>
        <div class="wbone"><img src="<%=path_main%>/img/main/whiteone.png"/></div>
        <div class="yone"><img src="<%=path_main%>/img/main/yellowone.png"/></div>
        <div class="mone"><img src="<%=path_main%>/img/main/MHone.png"/></div>
        <div class="bintro"><img src="<%=path_main%>/img/main/business_intro.png"/></div>
      </div>
      <div class="business_slider_wrap">
        <div>
          <p class="busi_info">
            <span class="site_name">이메딕</span>
            <span class="site_sub_info">초중고등학교에 필수의약품 정보와 질환정보를 엄선하여 수록하고 보건교육시 활용할 수 있는 다양한 자료와 서비스를 제공합니다.</span>
            <span class="site_sub_btn"><a href="http://www.emedic.co.kr" target="_blank">바로가기 <img src="<%=path_main%>/img/main/busi_site_go.png" class="busi_site_go"/></a></span>
          </p>
          <p class="busi_info_img"><img src="<%=path_main%>/img/main/busi_site1.png"/></p>
        </div>
        <div>
          <p class="busi_info">
            <span class="site_name">이메딕 어플</span>
            <span class="site_sub_info">내 손안의 작은 보건실<br>이메딕 보건실상용제품, 보건교사방, 마이페이지를 이동하면서 간편하게 어플로 확인하세요. </span>
            <span class="site_sub_btn"><a href="https://play.google.com/store/apps/details?id=com.nextelkorea.emedic&hl=ko" target="_blank">바로가기 <img src="<%=path_main%>/img/main/busi_site_go.png" class="busi_site_go"/></a></span>
          </p>
          <p class="busi_info_img"><img src="<%=path_main%>/img/main/busi_site5.png"/></p>
        </div>
        <div>
          <p class="busi_info">
            <span class="site_name">아이메딕</span>
            <span class="site_sub_info">대학교, 산업체, 공기관, 사회복지시설에서 근무하시는 간호사선생님들을 위한 의약품 정보를 제공합니다.</span>
            <span class="site_sub_btn"><a href="http://http://www.i-medic.co.kr" target="_blank">바로가기 <img src="<%=path_main%>/img/main/busi_site_go.png" class="busi_site_go"/></a></span>
          </p>
          <p class="busi_info_img"><img src="<%=path_main%>/img/main/busi_site2.png"></p>
        </div>
        <div>
          <p class="busi_info">
            <span class="site_name">스쿨캠페인</span>
            <span class="site_sub_info">대웅제약, jw중외제약, 일동제약 등의 <br> 제약회사들과 학생들의 건강을 지키기 위한 캠페인을 진행합니다.</span>
            <span class="site_sub_btn"><a href="http://www.schoolcampaign.or.kr" target="_blank">바로가기<img src="<%=path_main%>/img/main/busi_site_go.png" class="busi_site_go"/></a></span>
          </p>
          <p class="busi_info_img"><img src="<%=path_main%>/img/main/busi_site3.png"></p>
        </div>
        <div>
          <p class="busi_info">
            <span class="site_name">에포키</span>
            <span class="site_sub_info">"Epochal Key - 획기적인 해결안"<br>디자인을 중심으로 다양하고 재미진 사건을 만들어나가는 회사입니다.</span>
            <span class="site_sub_btn"><a href="http://www.epokey.com" target="_blank">바로가기<img src="<%=path_main%>/img/main/busi_site_go.png" class="busi_site_go"/></a></span>
          </p>
          <p class="busi_info_img"><img src="<%=path_main%>/img/main/busi_site4.png"/></p>
        </div>
      </div>
      </div>
      <div class="section" id="section2">
      <h2 class="title column_title">HEALTH COLUMN</h2>
      <div class="lds-ellipsis column">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="common_back">
        <div class="cone"><img src="<%=path_main%>/img/main/greenone_o.png"/></div>
        <div class="whone"><img src="<%=path_main%>/img/main/whiteone.png"/></div>
        <div class="yone"><img src="<%=path_main%>/img/main/yellowone.png"/></div>
        <div class="mone"><img src="<%=path_main%>/img/main/MHone.png"/></div>
      </div>
      <ul class="health_column_wrap">
      <s:iterator value="columnList" status="row">
        <li class="column back${row.index + 1}">
          <a href="javascript:void(0);" onclick="goHealthDetail(${idx});">
            <span class="coulmn_cate_img">
              <img src="http://www.emedic.co.kr/proimg/emedic_board/${image_name}" class="column_img"/>
            </span>
            <span class="column_cate">${sub_main_cate}</span>
            <span class="column_cate_title">${title}</span>
            <span class="column_read_more">Read more</span>
          </a>
        </li>
      </s:iterator>
      </ul>
      
      </div>
      <div class="section" id="section4">
      <h2 class="company_title">COMPANY</h2>
      <div class="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="common_back">
        <div class="gone"><img src="<%=path_main%>/img/main/greenone_c.png"/></div>
        <div class="wone"><img src="<%=path_main%>/img/main/whiteone.png"/></div>
        <div class="yone"><img src="<%=path_main%>/img/main/yellowone.png"/></div>
        <div class="mone"><img src="<%=path_main%>/img/main/MHone.png"/></div>
      </div>
      <div class="company_info_wrap">
        <p class="company_pic"><img src="<%=path_main%>/img/main/company_pic.png"/></p>
        <p class="company_info_title">안녕하세요.<br/><span class="mh_text">엠에취홀딩스</span>에 오신것을 환영합니다.</p>
        <div class="company_wrap">
          <p class="company con1">
          저희 엠에취홀딩스 (Medical Health Care Holdings Company)는<br/>
          <span>희망담은 헬스케어 광고마케팅</span>을 하고 있습니다.<br/>
          아픈 이들에게 빠르게 건강을 되찾을 수 있다는 희망을 전해주기 위해,<br/>
          다양한 질환정보를 전략적으로 제공하는 것이 저희가 광고마케팅을 하는 주요 이유입니다.
          </p>
          <p class="company con2">
          보건선생님들을 대상으로 필수의약품 정보와 응급상황에 대한 대처법,<br/>
          각종 유행질환정보 및 보건교육시 활용할 수 있는 여러 서비스도 제공하고있습니다.
          </p>
          <p class="company con3">
          헬스케어 업체들과 협력을 통해 온 세상의 사람들이 건강하게 살아갈 수 있는 그날까지, 최선을 다해 효과적으로 의약정보를 전달하겠습니다.<br/>
          경쟁력있는 헬스케어 비지니스를 만들어 가기위해 항상 최선을 다하겠습니다.
          </p>
          <p class="company_con calen">2016년 8월</p>
        </div>
      </div>
      </div>
      <div class="section" id="section3">
        <h2 class="title contact_title">CONTACT US</h2>
      <div class="lds-ellipsis contact">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="common_back">
        <div class="cone"><img src="<%=path_main%>/img/main/greenone_o.png"/></div>
        <div class="whone"><img src="<%=path_main%>/img/main/whiteone.png"/></div>
        <div class="yone"><img src="<%=path_main%>/img/main/yellowone.png"/></div>
        <div class="mone"><img src="<%=path_main%>/img/main/MHone.png"/></div>
      </div>
          <div>
            <ul class="content">
              <li class="contact_notice">
                  <p>NOTICE</p>
                  <div class="contact_notice_img">
                    <ul>
                    <s:iterator value="noticeList" status="row">
                      <li><a href="javascript:void(0);" onclick="goNoticeDetail(${idx});"><span>·</span>&nbsp;${title}</a></li>
                </s:iterator>
                    </ul>
                  </div>
              <jsp:include page="../inc/notice_popup.jsp"/>
            </li>
            <li class="contact_map">   
                  <p>LOCATION</p>
                  <div id="map"></div>
                  <div class="map_info">
                    <dl class="locadl1"><dd style="margin-left:0">(05600)서울특별시 송파구 삼전로 12길 9 송영빌딩 4층</dd></dl>
                    <dl class="locadl2"><dt>대표전화</dt><dd>1588-5120</dd><dt class="fax">FAX</dt><dd class="fax_number">02-511-5120</dd><dt class="mailtit">Email</dt><dd class="mail">webmaster@emedic.co.kr</dd></dl>
                  </div>
          </li>        
        </ul>     	
      </div>
      </div>
</div>
</div>``
  }
}

export default App;