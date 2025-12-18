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
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVars: Variants = {
    initial: { 
      filter: "blur(20px)", 
      opacity: 0,
      scale: 0.95 
    },
    animate: {
      filter: "blur(0px)",
      opacity: 1,
      scale: 1,
      transition: {
        duration: 2, 
        ease: [0.19, 1, 0.22, 1] as const, 
      },
    },
  };

  return (
    <div className="relative w-full h-screen overflow-hidden text-white bg-black">
     
      <div className="absolute inset-0 z-0 bg-black">
        <video
          autoPlay loop muted playsInline preload="auto"
          className="w-full h-full object-cover opacity-80"
        >
          <source src="/jeju.mp4" type="video/mp4" />
        </video>
      </div>

      <motion.div
        variants={containerVars}
        initial="initial"
        animate="animate"
        className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6" 
      >
        
        <motion.h1
          variants={itemVars}
          className="text-7xl md:text-[12vw] font-black leading-none tracking-tighter uppercase break-all"
        >
          PEECE<br className="md:hidden" />MAKER 
        
        </motion.h1>

       
        <motion.h2
          variants={itemVars}
          className="text-2xl md:text-[7vw] font-black leading-none tracking-tighter uppercase text-orange-500 mt-6 md:mt-5"
        >
           JEJU EMERGENCY SERVICE
        </motion.h2>

        
        <motion.div variants={itemVars} className="mt-6 md:mt-8">
          <p className="text-sm md:text-2xl font-light tracking-[0.4em] md:tracking-[0.7em] uppercase opacity-70">
             평화로 인도하는 지름길
          </p>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-12 md:mt-16 w-full max-w-xs md:max-w-none px-4"
        >
          <button 
            className="w-full rounded md:w-auto px-5 md:px-15 py-5 md:py-4 border border-white/30 bg-white text-black mix-blend-screen text-sm md:text-base font-black tracking-[0.2em] md:tracking-[0.4em] uppercase hover:bg-orange-500 hover:text-white hover:border-transparent transition-all duration-500" 
            onClick={() => router.push('/login')}
          >
             START FINDING TOILET
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}