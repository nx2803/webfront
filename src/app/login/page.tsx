"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { BsGoogle } from "react-icons/bs";
import { SiNaver } from "react-icons/si";


export default function LoginPage() {
    const router = useRouter();

    return (
        <main className="relative w-full h-screen overflow-hidden flex items-center justify-center p-6">


            <div className="absolute inset-0 z-0 bg-linear-to-tr from-[#E0F7FA] via-[#FFF3E0] to-[#E1F5FE]" />


            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 50, 0],
                    y: [0, 30, 0]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-orange-200/30 rounded-full blur-[150px] z-0"
            />

            <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, ease: [0.19, 1, 0.22, 1] }}
                className="relative w-full max-w-lg z-10"
            >

                <div className="relative overflow-hidden rounded-[40px] bg-white/30 backdrop-blur-[30px] border border-white/60 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.05)] p-12 md:p-16">

                    <div className="relative z-10">
                        <div className="mb-14">
                            <h2 className="text-5xl font-[950] tracking-tighter uppercase text-slate-800 ">
                                LOG <span className="text-orange-500  decoration-orange-200 ">IN</span>
                            </h2>
                            <p className="mt-6 text-[11px] font-black tracking-[0.5em] text-slate-500 uppercase leading-relaxed">
                               To Save <br />Your Dignity
                            </p>
                        </div>

                        <div className="space-y-4">
                            <input
                                type="text"
                                placeholder="EMAIL ADDRESS"
                                className="w-full bg-white/50 border border-white px-7 py-5 rounded-2xl outline-none focus:ring-2 focus:ring-orange-200 focus:bg-white transition-all text-slate-700 placeholder:text-slate-300 text-sm tracking-widest font-bold"
                            />
                            <input
                                type="password"
                                placeholder="PASSWORD"
                                className="w-full bg-white/50 border border-white px-7 py-5 rounded-2xl outline-none focus:ring-2 focus:ring-orange-200 focus:bg-white transition-all text-slate-700 placeholder:text-slate-300 text-sm tracking-widest font-bold"
                            />
                        </div>

                        <button className="w-full mt-10 py-5 bg-orange-500 text-white font-[900] tracking-[0.5em] uppercase rounded-2xl shadow-xl shadow-orange-100 hover:bg-orange-600  transition-all duration-300">
                            Sign In
                        </button>

        
                        <div className="relative my-10 flex items-center justify-center">
                            <span className="relative bg-transparent px-4 text-[10px] font-black text-slate-500 tracking-[0.3em] uppercase">Or Continue With</span>
                        </div>

                    
                        <div className="grid grid-cols-2 gap-4">
                            <button className="flex items-center justify-center gap-3 py-2 bg-white/40 border border-white rounded-2xl hover:bg-white/60 transition-all group hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] duration-300">
                                <span className=" text-2xl font-black text-blue-600  tracking-widest uppercase "><BsGoogle/></span>
                            </button>
                            <button className="flex items-center justify-center gap-3 py-2 bg-white/40 border border-white rounded-2xl hover:shadow-[0_0_20px_rgba(74,222,128,0.4)] hover:bg-white/60 transition-all group">
                                <span className=" text-2xl font-black text-green-400 tracking-widest uppercase "><SiNaver/></span>
                            </button>
                        </div>

                        <div className="mt-12 flex flex-col items-center gap-6">
                            <button className="text-[11px] font-black text-slate-500 tracking-[0.3em] uppercase hover:text-orange-500 transition-colors">
                                Create New Account
                            </button>
                            <button
                                onClick={() => router.push('/')}
                                className="text-[10px] font-bold text-slate-500 tracking-[0.5em] uppercase hover:text-orange-500 transition-colors"
                            >
                                ← Return to Main
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </main>
    );
}