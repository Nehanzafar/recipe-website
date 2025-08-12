import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroParallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax text transforms
  const moveLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const moveRight = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={ref}
      className="relative h-screen flex items-center justify-center bg-[#042A2B] overflow-hidden text-white"
    >
      <motion.h1
        className="z-10 text-4xl sm:text-6xl font-bold text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Crafting Web Experiences
      </motion.h1>

      {/* Parallax background words */}
      <motion.p
        style={{ x: moveLeft }}
        className="absolute top-[20%] left-[-10%] text-[10rem] font-bold text-white/5 select-none"
      >
        DESIGN
      </motion.p>

      <motion.p
        style={{ x: moveRight }}
        className="absolute bottom-[15%] right-[-10%] text-[10rem] font-bold text-white/5 select-none"
      >
        CODE
      </motion.p>
    </section>
  );
}
