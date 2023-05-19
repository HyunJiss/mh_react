import React from 'react';
import CommonBack from './CommonBack';

const Company = () => {
  return (
    <div className="section section4" id="section4">
      <h2 className="company_title">COMPANY</h2>
      <CommonBack />
      <div className="company_info_wrap">
        <p className="company_pic"><img alt="" src="/img/company_pic.png"/></p>
        <p className="company_info_title">안녕하세요.<br/><span className="mh_text">엠에취홀딩스</span>에 오신것을 환영합니다.</p>
        <div className="company_wrap">
          <p className="company con1">
          저희 엠에취홀딩스 (Medical Health Care Holdings Company)는<br/>
          <span>희망담은 헬스케어 광고마케팅</span>을 하고 있습니다.<br/>
          아픈 이들에게 빠르게 건강을 되찾을 수 있다는 희망을 전해주기 위해,<br/>
          다양한 질환정보를 전략적으로 제공하는 것이 저희가 광고마케팅을 하는 주요 이유입니다.
          </p>
          <p className="company con2">
          보건선생님들을 대상으로 필수의약품 정보와 응급상황에 대한 대처법,<br/>
          각종 유행질환정보 및 보건교육시 활용할 수 있는 여러 서비스도 제공하고있습니다.
          </p>
          <p className="company con3">
          헬스케어 업체들과 협력을 통해 온 세상의 사람들이 건강하게 살아갈 수 있는 그날까지, 최선을 다해 효과적으로 의약정보를 전달하겠습니다.<br/>
          경쟁력있는 헬스케어 비지니스를 만들어 가기위해 항상 최선을 다하겠습니다.
          </p>
          <p className="company_con calen">2016년 8월</p>
        </div>
      </div>
    </div> 
  );
};

export default Company;