// import React, { useEffect } from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom"; 
// import { auth } from "../firebase/config";

// const LingoSetuLogo = () => {
//   return (
//     <div className="relative flex flex-col items-center justify-center">
//       <motion.div 
//         animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.1, 1] }}
//         transition={{ duration: 4, repeat: Infinity }}
//         className="absolute w-[200%] h-60 bg-blue-600/10 blur-[130px] -z-10 rounded-full"
//       />

//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.2, ease: "easeOut" }}
//         className="flex flex-col items-center"
//       >
//         <h1 className="text-7xl sm:text-[130px] font-[1000] tracking-[-5px] leading-none text-white flex items-center">
//           <span className="drop-shadow-[0_20px_20px_rgba(0,0,0,0.8)]">LINGO</span>
//           <span className="bg-gradient-to-b from-cyan-400 via-blue-500 to-blue-800 bg-clip-text text-transparent ml-3">
//             SETU
//           </span>
          
//         </h1>

       
//       </motion.div>
//     </div>
//   );
// };

// export default function Splash() {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       const timer = setTimeout(() => {
//         if (user) {
//           navigate('/discover', { replace: true });
//         } else {
//           navigate('/mainscreen', { replace: true });
//         }
//       }, 4000);

//       return () => {
//         clearTimeout(timer);
//         unsubscribe();
//       };
//     });
//   }, [navigate]);

//   return (
//     <div className="fixed inset-0 bg-[#000] flex flex-col items-center justify-center overflow-hidden font-sans">
//       <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_#001a33_0%,_#000_100%)] opacity-60" />

//       <LingoSetuLogo />

//       <div className="absolute bottom-16 w-64 h-[2px] bg-white/5 rounded-full overflow-hidden">
//         <motion.div 
//           initial={{ x: "-100%" }}
//           animate={{ x: "100%" }}
//           transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
//           className="h-full w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
//         />
//       </div>

//       <motion.div 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 0.2 }}
//         className="absolute bottom-8 text-[8px] tracking-[3px] text-white uppercase"
//       >
//         Encrypted AI Neural Link
//       </motion.div>
//     </div>
//   );
// }


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