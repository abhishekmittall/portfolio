"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function AnimatedBackground() {
  const reduceMotion = useReducedMotion();

  const float = (delta: { x: number[]; y: number[]; scale: number[] }, duration: number) =>
    reduceMotion
      ? {}
      : {
          animate: { x: delta.x, y: delta.y, scale: delta.scale },
          transition: { duration, repeat: Infinity, repeatType: "mirror" as const, ease: "easeInOut" as const },
        };

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Ambient dot grid */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(99,102,241,0.06)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(22,242,179,0.05)_1px,transparent_1px)] bg-size-[36px_36px]" />

      {/* Drifting gradient orbs */}
      <motion.div
        className="absolute top-[-10%] left-[-5%] w-[28rem] h-[28rem] rounded-full bg-(--cyan)/16 blur-3xl"
        {...float({ x: [0, 60, -20, 0], y: [0, 40, 80, 0], scale: [1, 1.15, 0.95, 1] }, 22)}
      />
      <motion.div
        className="absolute top-[35%] right-[-8%] w-[24rem] h-[24rem] rounded-full bg-(--pink)/16 blur-3xl"
        {...float({ x: [0, -50, 30, 0], y: [0, 60, -30, 0], scale: [1, 0.9, 1.1, 1] }, 26)}
      />
      <motion.div
        className="absolute bottom-[-15%] left-[20%] w-[26rem] h-[26rem] rounded-full bg-(--cyan)/14 blur-3xl"
        {...float({ x: [0, 40, -60, 0], y: [0, -50, 20, 0], scale: [1, 1.1, 0.9, 1] }, 30)}
      />
      <motion.div
        className="absolute top-[65%] left-[45%] w-[20rem] h-[20rem] rounded-full bg-(--pink)/14 blur-3xl"
        {...float({ x: [0, -30, 50, 0], y: [0, 30, -40, 0], scale: [1, 0.95, 1.05, 1] }, 24)}
      />
    </div>
  );
}
