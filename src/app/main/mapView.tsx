"use client";

import { Map, useKakaoLoader, CustomOverlayMap } from "react-kakao-maps-sdk";
import { FaMale, FaFemale, FaWheelchair } from "react-icons/fa";

export default function MapView() {
   
    const [loading, error] = useKakaoLoader({
        appkey: process.env.NEXT_PUBLIC_KAKAO_MAP_KEY as string,
        libraries: ["services", "clusterer", "drawing"],
    });

    if (loading) return (
        <div className="w-full h-full bg-white flex items-center justify-center font-[1000] text-orange-500 animate-pulse tracking-widest">
            Loading...
        </div>
    );
    
    if (error) return (
        <div className="w-full h-full bg-white flex items-center justify-center font-black text-red-500">
            MAP CONNECTION FAILED
        </div>
    );

    return (
        <div className="w-full h-full">
            <Map
                center={{ lat: 33.450701, lng: 126.570667 }}
                style={{ width: "100%", height: "100%" }}
                level={3}
            >
           
                <CustomOverlayMap position={{ lat: 33.450701, lng: 126.570667 }} yAnchor={1.2}>
                    <div className="relative group flex flex-col items-center">
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur-xl border border-white/80 rounded-2xl shadow-xl transition-all active:scale-95 text-4xl">
                            
                            <span className="text-2xl font-[1000] uppercase tracking-tight text-black">카카오 화장실</span>
                            <FaMale className="text-cyan-500"/><FaFemale className="text-red-500"/>
                        </div>
                        <div className="w-3 h-3 bg-white/90 backdrop-blur-xl border-r border-b border-white/80 rotate-45 -mt-1.5 shadow-lg" />
                    </div>
                </CustomOverlayMap>
            </Map>
        </div>
    );
}