import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/config";

/* ---------------- SK TECHNOLOGY 3D TEXT ---------------- */

const SKTechnology = () => {

  const letters = ["S","G","    ","T","E","C","H","N","O","L","O","G","Y"];

  const directions = [
    { x: -200, y: 0 },
    { x: 200, y: 0 },
    { x: 0, y: -200 },
    { x: 0, y: 200 }
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-4 text-5xl sm:text-7xl font-extrabold">

      {letters.map((letter, index) => {

        const dir = directions[index % directions.length];

        return (
          <motion.span
            key={index}
            initial={{
              opacity: 0,
              x: dir.x,
              y: dir.y,
              rotateX: 90,
              rotateY: 90,
              scale: 0.5
            }}
            animate={{
              opacity: 1,
              x: 0,
              y: 0,
              rotateX: 0,
              rotateY: 0,
              scale: 1
            }}
            transition={{
              delay: index * 0.1,
              duration: 0.8,
              ease: "easeOut"
            }}
            className="bg-[radial-gradient(ellipse_farthest-corner_at_right_bottom,#FEDB37_0%,#FDB931_8%,#9f7928_30%,#8A6E2F_40%,transparent_80%),radial-gradient(ellipse_farthest-corner_at_left_top,#FFFFFF_0%,#FFFFAC_8%,#D1B464_25%,#5d4a1f_62.5%,#5d4a1f_100%)] bg-clip-text text-transparent"
          >
            {letter}
          </motion.span>
        );
      })}

    </div>
  );
};

/* ---------------- Splash Screen ---------------- */

export default function Splash() {

  const navigate = useNavigate();

  useEffect(() => {

    const unsubscribe = auth.onAuthStateChanged((user) => {

      const timer = setTimeout(() => {

        if (user) {
          navigate("/discover", { replace: true });
        } 
        else {
          navigate("/home", { replace: true });
        }

      }, 3000);

      return () => {
        clearTimeout(timer);
        unsubscribe();
      };

    });

  }, [navigate]);

  return (

    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center overflow-hidden font-sans">

      {/* Center Text */}
      <SKTechnology />

      {/* Loading Bar */}
      <div className="absolute bottom-20 w-56 h-[2px] bg-green-900 overflow-hidden rounded">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-full w-full bg-white"
        />
      </div>

      {/* Bottom Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        className="absolute bottom-10 text-xs tracking-widest bg-[linear-gradient(-5deg,rgba(3,8,2,1)_0%,rgba(3,74,31,1)_50%)] bg-clip-text text-transparent  font-md"
      >
        System Initializing...
      </motion.div>

    </div>
  );
}