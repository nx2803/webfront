"use client";
import { motion, Variants } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const containerVars = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.45,
        delayChildren: 0.5,
      },
    },
  };

  const itemVars: Variants = {
    initial: { 
      opacity: 0, 
      filter: "blur(8px)", // 30px에서 8px로 대폭 축소. 훨씬 선명하게 등장 시작
      scale: 0.99, // 스케일 변화를 더 미세하게 조정
      y: 15 // 이동 거리를 살짝 줄여 안정감 부여
    },
    animate: { 
      filter: "blur(0px)",
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 1.5, // 너무 늘어지지 않게 1.5초로 최적화
        ease: [0.22, 1, 0.36, 1] // 조금 더 탄력 있는 커브로 변경
      } 
    },
  };

  return (
    <div className="relative w-full h-screen overflow-hidden text-white bg-zinc-950">
      {/* 1. BACKGROUND VIDEO SECTION */}
      <div className="absolute inset-0 z-0 ">
        <video
          autoPlay loop muted playsInline preload="auto"
          poster="/jeju.png"
          className="w-full h-full object-cover opacity-60"
        >
          <source src="/jeju.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* 2. MAIN CONTENT AREA */}
      <motion.div
        variants={containerVars}
        initial="initial"
        animate="animate"
        className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6"
      >
        {/* BIG TITLES */}
        <motion.div variants={itemVars} className="flex flex-col items-center mb-16 md:mb-20">
          <h1 className="text-[18vw] md:text-[14vw] font-[1000] leading-[0.75] tracking-[-0.05em] uppercase text-orange-500">
            PEECE
          </h1>
          <h1 className="text-[18vw] md:text-[14vw] font-[1000] leading-[0.75] tracking-[-0.05em] uppercase">
            MAKER
          </h1>
        </motion.div>

        {/* SLOGAN: h2 */}
        <motion.h2 
          variants={itemVars} 
          className="text-xl md:text-[2.8vw] font-[900] leading-none tracking-tighter uppercase text-orange-500 mb-8"
        >
          JEJU EMERGENCY SERVICE
        </motion.h2>

        {/* DESCRIPTION: p */}
        <motion.p 
          variants={itemVars} 
          className="text-[10px] md:text-lg font-light tracking-[0.6em] md:tracking-[1rem] uppercase opacity-60"
        >
          평화로 인도하는 지름길
        </motion.p>

<motion.div
  initial={{ opacity: 0, y: 15 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ 
    delay: 2.3, 
    duration: 1.5, 
    ease: [0.22, 1, 0.36, 1] 
  }}
  className="mt-16 md:mt-24 w-full flex justify-center px-6"
>
  <div className="group relative w-full md:w-auto">
    <button
      onClick={() => router.push('/login')}
      className="relative w-full md:w-auto px-12 md:px-28 py-5 md:py-7 cursor-pointer active:scale-95 transition-all duration-500 rounded-2xl overflow-hidden"
    >
      {/* 1. GLASS BASE: 배경 블러와 투명도 담당 */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-md transition-all duration-500" />
      
      {/* 2. INDEPENDENT BORDER: 테두리 전용 레이어 (Anti-aliasing 방지 핵심) */}
      <div className="absolute inset-0 rounded-2xl border border-white/20 group-hover:border-orange-500/50 transition-colors duration-500 z-20" />
      
      {/* 3. HOVER EFFECTS: 주황색 광채와 빛줄기 */}
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" />
      
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none z-10" />

      {/* 4. TEXT CONTENT: 최상단 배치 */}
      <span className="relative z-30 text-white text-xs md:text-lg font-[950] tracking-[0.2em] md:tracking-[0.5em] uppercase group-hover:text-orange-500 transition-colors duration-700">
        Start Finding Toilet
      </span>
    </button>
  </div>
</motion.div>
      </motion.div>

      {/* 3. FOOTER */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 3, duration: 1.5 }}
        className="absolute bottom-8 w-full text-center"
      >
        <p className="text-[9px] md:text-xs font-medium tracking-[0.6em] uppercase opacity-60">
          © 2025 PEECE MAKER. DESIGNED BY KDT03
        </p>
      </motion.div>
    </div>
  );
}