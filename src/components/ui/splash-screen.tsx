"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

const HOLD_MS = 2400;
const FADE_OUT_MS = 700;

type Stage = "show" | "out" | "done";

export default function SplashScreen() {
  const [stage, setStage] = useState<Stage>("show");

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => setStage("out"), HOLD_MS);
    const removeTimer = setTimeout(
      () => setStage("done"),
      HOLD_MS + FADE_OUT_MS,
    );
    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (stage === "done") return null;

  const isLeaving = stage === "out";

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black"
      initial={{ opacity: 1, scale: 1 }}
      animate={{ opacity: isLeaving ? 0 : 1, scale: isLeaving ? 1.04 : 1 }}
      transition={{ duration: FADE_OUT_MS / 1000, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden
    >
      <SpotlightGlow />
      <Wordmark />
      <Vignette />
    </motion.div>
  );
}

function SpotlightGlow() {
  return (
    <motion.div
      className="pointer-events-none absolute size-[70vmin] rounded-full blur-3xl"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 0.55, scale: 1 }}
      transition={{ duration: 1.6, ease: "easeOut" }}
      style={{
        background:
          "radial-gradient(closest-side, rgba(255, 56, 100, 0.45), rgba(120, 80, 255, 0.18) 55%, transparent 75%)",
      }}
    />
  );
}

function Vignette() {
  return (
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        background:
          "radial-gradient(120% 90% at 50% 50%, transparent 45%, rgba(0,0,0,0.85) 95%)",
      }}
    />
  );
}

function Wordmark() {
  return (
    <div className="relative z-10 flex flex-col items-center px-6">
      <div className="overflow-hidden pb-1">
        <motion.h1
          initial={{ y: "110%" }}
          animate={{ y: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.15,
          }}
          className="select-none text-5xl font-bold tracking-tight text-white md:text-7xl"
        >
          HANDY KANG
        </motion.h1>
      </div>

      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.95, ease: [0.22, 1, 0.36, 1] }}
        className="mt-5 h-[3px] w-32 origin-left rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-violet-500"
      />

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.35, ease: "easeOut" }}
        className="mt-4 text-[11px] uppercase tracking-[0.4em] text-white/60 md:text-xs"
      >
        A Frontend Engineer Original
      </motion.p>
    </div>
  );
}
