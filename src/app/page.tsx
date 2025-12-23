"use client";
import { motion, Variants } from 'framer-motion';
import React from 'react'
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();
    const containerVars = {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { staggerChildren: 0.2 } }
    };

    const itemVars: Variants = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        // 🦾 min-h-screen으로 하되, PC에서는 flex-center로 중앙 고정
        <main className="relative w-full min-h-screen bg-black flex items-center justify-center overflow-x-hidden">
            
            {/* 🦾 배경은 언제나 화면 전체에 고정 (fixed) */}
            <div className="fixed inset-0 z-0">
                <video
                    autoPlay loop muted playsInline preload="auto"
                    poster="/jeju.png"
                    className="w-full h-full object-cover opacity-60"
                >
                    <source src="/jeju.mp4" type="video/mp4" />
                </video>
                {/* Tailwind v4 bg-linear-to-b 사용 */}
                <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-black/80" />
            </div>

            {/* 🦾 콘텐츠 컨테이너: 모바일에서만 py-20으로 상하 여백 확보 */}
            <motion.div
                variants={containerVars}
                initial="initial"
                animate="animate"
                className="relative z-20 flex flex-col items-center text-center px-4 w-full py-16 md:py-0"
            >
                {/* 1. Main Title - PC의 웅장한 크기 복구 */}
                <motion.h1
                    variants={itemVars}
                    className="text-[14vw] md:text-[8vw] font-[1000] tracking-widest uppercase leading-none text-orange-500"
                >
                    PEECE <span className="text-white">MAKER</span>
                </motion.h1>

                <motion.div
                    variants={itemVars}
                    className="w-24 h-1 bg-transparent my-6 md:my-4"
                />

                {/* 2. Description - PC 구조 유지 */}
                <motion.div variants={itemVars} className="space-y-6">
                    <p className="text-xl md:text-4xl font-black tracking-tight text-white uppercase italic">
                        The Direct Path to Peace
                    </p>
                    <div className="max-w-2xl text-[14px] md:text-lg text-zinc-400 font-light leading-relaxed break-keep">
                        <p>
                            PEECE MAKER는 GPS 정보를 통해 <br className="hidden md:block" />
                            당신에게서 가장 가깝고 개인적인 휴식 공간에 대한 정보를
                            지도를 통해 제공해주는 서비스입니다.
                        </p>
                        <p className="mt-2 md:mt-4">
                            또한 휴식 공간에 대한 평가와 토론을 나눌 수 있으며,
                            이를 통해 가장 완벽한 당신의 문제를 해결할 장소를 찾을 수 있습니다.
                        </p>

                        <p className="mt-8 text-white text-lg md:text-xl font-bold tracking-wider">
                            더 이상 고통에 헤매이지 마시고 <br className="md:hidden" />
                            당신의 존엄성을 지키십시오.
                        </p>
                    </div>
                </motion.div>

                {/* 3. Button - PC의 웅장한 패딩 복구 & 모바일 대응 */}
                <motion.button
                    variants={itemVars}
                    onClick={() => router.push('/main')}
                    whileTap={{ scale: 0.95 }}
                    className="mt-12 px-10 md:px-24 py-5 md:py-6 bg-white/20 backdrop-blur-2xl text-white border border-white/20 text-sm md:text-lg rounded-4xl hover:text-orange-500 transition-all duration-300 cursor-pointer font-[950] tracking-[0.2em] md:tracking-[0.5em] uppercase"
                >
                    EXPLORE YOUR HEAVEN
                </motion.button>
            </motion.div>
        </main>
    );
}