import React from "react";

const Contact = () => {
  return (
    <div
      className="section"
      id="section3"
      style={{
        height: "929px",
        width: "100%",
        display: "grid",
        verticalAlign: "middle",
      }}
    >
      <h2 className="title contact_title">CONTACT US</h2>
      <div className="lds-ellipsis contact">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="common_back">
        <div className="cone">
          <img alt="" src="/img/greenone_o.png" />
        </div>
        <div className="whone">
          <img alt="" src="/img/whiteone.png" />
        </div>
        <div className="yone">
          <img alt="" src="/img/yellowone.png" />
        </div>
        <div className="mone">
          <img alt="" src="/img/MHone.png" />
        </div>
      </div>
      <div>
        <ul className="content">
          <li className="contact_notice">
            <p>NOTICE</p>
            <div className="contact_notice_img">
              <ul>
                <li>
                  <a href="#!">
                    <span>·</span>&nbsp;title
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="contact_map">
            <p>LOCATION</p>
            <div id="map"></div>
            <div className="map_info">
              <dl className="locadl1">
                <dd style={{ marginLeft: "0" }}>
                  (05600)서울특별시 송파구 삼전로 12길 9 송영빌딩 4층
                </dd>
              </dl>
              <dl className="locadl2">
                <dt>대표전화</dt>
                <dd>1588-5120</dd>
                <dt className="fax">FAX</dt>
                <dd className="fax_number">02-511-5120</dd>
                <dt className="mailtit">Email</dt>
                <dd className="mail">webmaster@emedic.co.kr</dd>
              </dl>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
