"use client";

import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { FaEdit, FaRegHeart, FaRegCommentDots, FaUserCircle } from "react-icons/fa";

interface Board {
    id: number;
    name: string;
    title: string;
    content: string;
}

export default function BoardView() {
    const [board, setBoard] = useState<Board[]>([]);

    useEffect(() => {
        fetch("/data/board.json")
            .then((res) => res.json())
            .then((data) => {
                if (data) setBoard(data);
            })
            .catch((err) => console.error("데이터 로드 실패:", err));
    }, []);

    
    if (board.length === 0) {
        return (
            <div className="w-full h-full flex items-center justify-center">
                <div className="text-slate-500 font-black py-20 animate-pulse text-2xl uppercase tracking-widest">
                    Loading Feed...
                </div>
            </div>
        );
    }

    return (
        <div className="w-full h-full relative overflow-y-auto pb-40 pt-32 px-4 md:px-8 custom-scrollbar bg-transparent">
        
            <div
                className="max-w-2xl mx-auto flex flex-col gap-10"
            >
                <div className="flex flex-col gap-2">
                    <h2 className="text-5xl font-[1000] text-orange-500 tracking-tighter">
                        FREE <span className="text-slate-800 ">BOARD</span>
                    </h2>
                    <p className="text-slate-500 font-black tracking-widest text-xs ml-1">Let's Toilet Talk</p>
                </div>

                <div className="flex flex-col gap-8">
                    {board.map((post, index) => (
                        <div
                        key={post.id}
                        className="bg-white/30 backdrop-blur-md border border-white/40 p-8 rounded-[40px] shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 group"
                        >
                           
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-white text-lg border-2 border-white shadow-inner">
                                    <FaUserCircle className="opacity-50" />
                                </div>
                                <span className="font-black text-slate-800 text-sm tracking-tight">{post.name}</span>
                            </div>
                            <div className="flex flex-col gap-3 mb-8">
                                <h3 className="text-2xl font-black text-slate-900 group-hover:text-orange-600 transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-slate-600 font-bold leading-relaxed">{post.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            
        </div>
    );
}