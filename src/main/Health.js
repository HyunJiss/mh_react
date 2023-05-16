import React from 'react';

const Health = () => {
  return (
    <div>
      <div className="section" id="section2" style={{height:'929px',width:'100%',display:"table-cell",verticalAlign:"middle"}}>
        <h2 className="title column_title">HEALTH COLUMN</h2>
        <div className="lds-ellipsis column">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="common_back">
          <div className="cone"><img alt="" src="/img/greenone_o.png"/></div>
          <div className="whone"><img alt="" src="/img/whiteone.png"/></div>
          <div className="yone"><img alt="" src="/img/yellowone.png"/></div>
          <div className="mone"><img alt="" src="/img/MHone.png"/></div>
        </div>
        <ul className="health_column_wrap">
          <li className="column back1">
            <a href="#!">
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
        </ul>
      </div>
    </div>
  );
};

export default Health;