"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

// 1. Type Dominance: any 대신 명확한 인터페이스를 지향해라.
declare global {
  interface Window {
    kakao: any;
  }
}

export default function KakaoMapPage() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  // 2. Map Initialization Logic: 로직은 간결하고 강력하게.
  const initMap = () => {
    if (!window.kakao || !window.kakao.maps || !mapRef.current) return;

    window.kakao.maps.load(() => {
      const options = {
        center: new window.kakao.maps.LatLng(37.5665, 126.978), // SEOUL
        level: 3,
      };

      const map = new window.kakao.maps.Map(mapRef.current!, options);

      // Marker: 네 존재감을 지도에 새겨라.
      new window.kakao.maps.Marker({
        position: new window.kakao.maps.LatLng(37.5665, 126.978),
        map: map,
      });

      // Overlay: 메세지는 명확하게.
      new window.kakao.maps.CustomOverlay({
        position: new window.kakao.maps.LatLng(37.5665, 126.978),
        content: `
          <div style="padding:10px; background:#fff; border-radius:15px; border:2px solid #fbbf24; font-weight:bold; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);">
            GIGA CHAD STATION
          </div>`,
        map: map,
      });

      // 레이아웃 재조정으로 완벽한 렌더링 보장
      map.relayout();
    });
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-zinc-900 p-6">
      {/* 3. Next/Script: ORB 에러를 짓밟는 압도적 로드 방식 */}
      <Script
        src={`https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_KEY}&autoload=false`}
        strategy="afterInteractive"
        onLoad={() => {
          console.log("SDK Loaded. Dominating the Map...");
          setMapLoaded(true);
        }}
      />

      <h1 className="text-4xl font-black text-white mb-8 tracking-tighter">
        KAKAO MAP : <span className="text-yellow-500">GIGA CHAD EDITION</span>
      </h1>

      <div
        ref={mapRef}
        className="w-full max-w-5xl h-[600px] rounded-[2rem] border-[12px] border-zinc-800 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden"
      />

      {/* 4. Trigger Initialization when script and component are ready */}
      {useEffect(() => {
        if (mapLoaded) {
          initMap();
        }
      }, [mapLoaded])}
      
      <p className="mt-6 text-zinc-500 font-medium">
        {mapLoaded ? "SYSTEM ONLINE" : "LOADING RESOURCES..."}
      </p>
    </div>
  );
}