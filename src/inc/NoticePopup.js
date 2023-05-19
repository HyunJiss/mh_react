import React from 'react';
import $ from 'jquery';

const NoticePopup = () => {

  const noticePopClose = () => {
    const noticePop = document.querySelector('.notice_popup');
    noticePop.classList.remove('on');
    $.fn.fullpage.setMouseWheelScrolling(true);
    $.fn.fullpage.setAllowScrolling(true);
  }

  return (
    <div className="notice_popup">
		<div className="notice_container">
			<div>
				<div className="notice_logo">
					<h2>
						<span>NOTICE</span>
							<a className="notice_pop_close" href="#!" onClick={noticePopClose}><img alt="" src="/img/btn_qk_close.png" /></a>
					</h2>
				</div>
				<div className="notice_tdc"></div>
			</div>
		</div>
	</div>
  );
};

export default NoticePopup;