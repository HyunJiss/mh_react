import React from 'react';
import $ from 'jquery';

const time = 500;
let idx,idx2 = 0;
const slide_width = $("#slider").width();

const HealthPopup = () => {
	
	//헬스칼럼 카드 컨트롤 준비
	//카드 이전 버튼
	const columnCardControl1 =()=>{
		let slide_count = $("#slider li").length;
			if(slide_count > 1) {
				 $(".btn").css("display", "inline");
				if(idx === 0) $("#prev_btn").css("display", "none");
			}
			if(slide_count > 1) {
					idx2 = (idx - 1) % slide_count;
					if(idx2 < 0)
							idx2 = slide_count - 1;
					$("#slider li:hidden").css("left", "-"+slide_width+"px");
					$("#slider li:eq("+idx+")").animate({ left: "+="+slide_width+"px" }, time, function() {
							$(this).css("display", "none").css("left", "-"+slide_width+"px");
					});
					$("#slider li:eq("+idx2+")").css("display", "block").animate({ left: "+="+slide_width+"px" }, time);
					idx = idx2;
					if(idx === 0) $("#prev_btn").css("display", "none");  
			}
	}

	//ī카드 다음 버튼
	const columnCardControl2 =()=>{
		let slide_count = $("#slider li").length;
			if(slide_count > 1) {
				$(".btn").css("display", "inline");
				if(idx === 0) $("#prev_btn").css("display", "none");
			}
			if(slide_count > 1) {

				idx2 = (idx + 1) % slide_count;
					$("#slider li:hidden").css("left", slide_width+"px");
					$("#slider li:eq("+idx+")").animate({ left: "-="+slide_width+"px" }, time, function() {
							$(this).css("display", "none").css("left", slide_width+"px");
					});
					$("#slider li:eq("+idx2+")").css("display", "block").animate({ left: "-="+slide_width+"px" }, time);
					idx = idx2;
					if(idx !== 0) $("#prev_btn").css("display", "inline");
					if(idx === 0) $("#prev_btn").css("display", "none");  
			}
	}

  const popClose = () =>{
    const healthPopup = document.querySelector(".health_popup");
    healthPopup.classList.remove('on');
    $.fn.fullpage.setMouseWheelScrolling(true);
    $.fn.fullpage.setAllowScrolling(true);
  }
	
  return (
    <div className="health_popup">
		<div className="health_container">
			<div>
				<div className="health_title">
					<h2>
						<span></span>
							<a className="pop_close" href="#!" onClick={popClose}><img alt="" src='/img/btn_qk_close.png' /></a>
					</h2>
				</div>
				<div className="health_content"></div>
				<div className="health_content_card">
					<div>
						<button type="button" id="prev_btn" className="btn" onClick={columnCardControl1}></button>
						<button type="button" id="next_btn" className="btn" onClick={columnCardControl2}></button>
						<ul id="slider"></ul>
					</div>
				</div>
			</div>
		</div>
	</div>
  );
};

export default HealthPopup;