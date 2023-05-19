import React, { useEffect } from 'react';
import $ from 'jquery';
//스크립트로 kakao maps api를 심어서 가져오면 window전역 객체에 들어가게 된다. 함수형 컴포넌트에서는 인식 못함
const{kakao} =window;

const Location = () => {
  useEffect(
    ()=>{
      const container = document.getElementById('map');
      const options ={
        center: new kakao.maps.LatLng(37.506351, 127.091328), //지도의 중심좌표.
        level: 4 //지도의 레벨(확대, 축소 정도)
      };

      const map = new kakao.maps.Map(container, options);
      // 마커가 표시될 위치입니다 
	    const markerPosition  = new kakao.maps.LatLng(37.506351, 127.091328); 

      // 마커를 생성합니다
      const marker = new kakao.maps.Marker({
          position: markerPosition
      });

      // 마커가 지도 위에 표시되도록 설정합니다
      marker.setMap(map);

      const iwContent = '<div style="width:200px;text-align:center;padding:6px 0;font-weight:bold;"><a href="https://map.kakao.com/link/map/엠에취홀딩스,37.506351,127.091328" style="color:black;">서울특별시 송파구 삼전동 16-6</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
	    iwPosition = new kakao.maps.LatLng(37.506351, 127.091328); //인포윈도우 표시 위치입니다

      // 인포윈도우를 생성합니다
      const infowindow = new kakao.maps.InfoWindow({
          position : iwPosition, 
          content : iwContent 
      });
	  
      // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
      infowindow.open(map, marker); 

      function setZoomable(zoomable) {
        // 마우스 휠로 지도 확대,축소 가능여부를 설정합니다
        map.setZoomable(zoomable);    
        $('html, body').off('touchmove'); // 터치무브 가능
    }
  
        setZoomable(false);
        $('#map').on('click touch',function(){
          $('html, body').on('mousewheel', function(event) {return false; });
          setZoomable(true);
        });
        $('#map').on('mouseleave',function(){
          $('html, body').off('mousewheel');
          setZoomable(false);
        });
    },[])

  return (
    <div id="map"></div>
  );
};

export default Location;