import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; 
import { auth } from "../firebase/config";

const LingoSetuLogo = () => {
  return (
    <div className="relative flex flex-col items-center justify-center">
      {/* Glow Effect - Green highlight */}
      <motion.div 
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute w-64 h-64 bg-green-500/20 blur-[100px] -z-10 rounded-full"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center"
      >
        <h1 className="text-6xl sm:text-8xl font-black tracking-tighter text-white">
          LINGO
          <span className="text-green-500">SETU</span>
        </h1>
        <p className="text-green-400/60 text-xs tracking-[0.2em] mt-2 font-mono">
          LANGUAGE BRIDGE
        </p>
      </motion.div>
    </div>
  );
};

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      const timer = setTimeout(() => {
        if (user) {
          navigate('/discover', { replace: true });
        } else {
          navigate('/mainscreen', { replace: true });
        }
      }, 3000); // 3 seconds is usually sweet for splash

      return () => {
        clearTimeout(timer);
        unsubscribe();
      };
    });
  }, [navigate]);

  return (
    // Pure Black Background
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center overflow-hidden font-sans">
      
      <LingoSetuLogo />

      {/* Simple Green Progress Bar */}
      <div className="absolute bottom-20 w-48 h-[1px] bg-green-900/30 overflow-hidden">
        <motion.div 
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-full w-full bg-green-500"
        />
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        className="absolute bottom-10 text-[10px] tracking-widest text-green-700 uppercase font-mono"
      >
        System Initializing...
      </motion.div>
    </div>
  );
}