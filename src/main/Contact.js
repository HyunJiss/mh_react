import React from 'react';
import Location from './Location';
import $ from 'jquery';
import CommonBack from './CommonBack';

const Contact = () => {

  //공지 상세 임시
	const goNoticeDetail = ()=>{
    const noticePop = document.querySelector('.notice_popup');
    noticePop.classList.add('on');
    $.fn.fullpage.setMouseWheelScrolling(true);
    $.fn.fullpage.setAllowScrolling(true);
    document.body.style.overflowY ="hidden";
	}

  return (
    <div className="section section3" id="section3">
      <h2 className="title contact_title">CONTACT US</h2>
      <CommonBack />
      <div>
        <ul className="content">
          <li className="contact_notice">
            <p>NOTICE</p>
            <div className="contact_notice_img">
              <ul>
                <li><a href="#!" onClick={goNoticeDetail}><span>·</span>&nbsp;title</a></li>
              </ul>
            </div>
          </li>
          <li className="contact_map">   
            <p>LOCATION</p>
            <Location />
            <div className="map_info">
              <dl className="locadl1"><dd style={{marginLeft:'0'}}>(05600)서울특별시 송파구 삼전로 12길 9 송영빌딩 4층</dd></dl>
              <dl className="locadl2"><dt>대표전화</dt><dd>1588-5120</dd><dt className="fax">FAX</dt><dd className="fax_number">02-511-5120</dd><dt className="mailtit">Email</dt><dd className="mail">webmaster@emedic.co.kr</dd></dl>
            </div>
          </li>        
        </ul>     	
      </div>
    </div>
  );
};

export default Contact;