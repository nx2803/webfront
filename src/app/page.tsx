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
        // 0.15s는 너무 빨랐지? 0.25s로 조절해서 리듬감을 살렸다.
        staggerChildren: 0.25, 
        delayChildren: 0.3,
      },
    },
  };

  const itemVars: Variants = {
    initial: { 
      opacity: 0, 
      filter: "blur(10px)", 
      scale: 0.97, 
      y: 20 
    },
    animate: { 
      filter: "blur(0px)",
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        // 0.7s에서 1.1s로 늘려 부드러움을 더했다.
        duration: 1.1, 
        ease: [0.16, 1, 0.3, 1] // 부드럽게 감속하는 프리미엄 커브
      } 
    },
  };

  return (
    <div className="relative w-full h-screen overflow-hidden text-white bg-zinc-950">
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

      <motion.div
        variants={containerVars}
        initial="initial"
        animate="animate"
        className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6"
      >
        <motion.div variants={itemVars} className="flex flex-col items-center mb-16 md:mb-20">
          <h1 className="text-[18vw] md:text-[14vw] font-[1000] leading-[0.75] tracking-[-0.05em] uppercase text-orange-500">
            PEECE
          </h1>
          <h1 className="text-[18vw] md:text-[14vw] font-[1000] leading-[0.75] tracking-[-0.05em] uppercase">
            MAKER
          </h1>
        </motion.div>

        <motion.h2 
          variants={itemVars} 
          className="text-xl md:text-[2.8vw] font-black leading-none tracking-tighter uppercase text-orange-500 mb-8"
        >
          JEJU EMERGENCY SERVICE
        </motion.h2>

        <motion.p 
          variants={itemVars} 
          className="text-[10px] md:text-lg font-light tracking-[0.6em] md:tracking-[1rem] uppercase opacity-60"
        >
          평화로 인도하는 지름길
        </motion.p>

        <motion.div
          // 버튼 등장 타이밍도 0.8s -> 1.4s로 적절히 늦췄다.
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 1.4, 
            duration: 1.2, 
            ease: [0.16, 1, 0.3, 1] 
          }}
          className="mt-16 md:mt-24 w-full flex justify-center px-6"
        >
          <div className="group relative w-full md:w-auto">
            <button
              onClick={() => router.push('/main')}
              className="relative w-full md:w-auto px-12 md:px-28 py-5 md:py-7 cursor-pointer active:scale-95 transition-all duration-500 rounded-4xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/10 backdrop-blur-md transition-all duration-500" />
              <div className="absolute inset-0 rounded-4xl border border-white/20 group-hover:border-orange-500/50 transition-colors duration-500 z-20" />
              <div className="absolute inset-0 bg-linear-to-tr from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-linear-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full pointer-events-none z-10 transition-transform duration-1000" />
              <span className="relative z-30 text-white text-xs md:text-lg font-[950] tracking-[0.2em] md:tracking-[0.5em] uppercase group-hover:text-orange-500 transition-colors duration-700">
                Start Finding Toilet
              </span>
            </button>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 2.2, duration: 1.2 }}
        className="absolute bottom-8 w-full text-center"
      >
        <p className="text-[9px] md:text-xs font-medium tracking-[0.6em] uppercase opacity-60">
          © 2025 PEECE MAKER. DESIGNED BY KDT03
        </p>
      </motion.div>
    </div>
  );
}