"use client";
import { useEffect, useRef } from "react";
import Script from "next/script";

export default function NaverMap() {
  const mapRef = useRef<HTMLDivElement>(null);

  const initMap = () => {
    // 🔱 네이버 객체가 로드되었는지 확인하는 예법이와요
    if (!mapRef.current || !window.naver) return;

    const mapOptions = {
      // 🔱 부산 시청을 중심으로 잡아보았사와요!
      center: new window.naver.maps.LatLng(35.1795543, 129.0756416),
      zoom: 16,
      logoControl: false, // 네이버 로고를 숨겨 디자인의 순수함을 지키시와요
    };

    const map = new window.naver.maps.Map(mapRef.current, mapOptions);

    // 🔱 마커 하나를 위엄 있게 꽂아보겠사와요
    new window.naver.maps.Marker({
      position: new window.naver.maps.LatLng(35.1795543, 129.0756416),
      map: map,
    });
  };

  return (
    <>
      <Script
        strategy="afterInteractive"
        
       src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}`}
        onLoad={initMap}
      />
      <div 
        ref={mapRef} 
        style={{ width: "100%", height: "600px" }} 
        className="rounded-[40px] shadow-2xl border-8 border-white" 
      />
    </>
  );
}