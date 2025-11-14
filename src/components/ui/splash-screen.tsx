"use client";

import { useEffect, useState } from "react";
import { Meteors } from "./meteors";
import { Particles } from "./particles";

const DURATION = 3000;
const FADE_OUT_DURATION = 800;

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // 텍스트 애니메이션 시작
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 200);

    // 페이드 아웃 시작
    const fadeTimer = setTimeout(() => {
      setIsVisible(false);
    }, DURATION);

    // 컴포넌트 제거
    const removeTimer = setTimeout(() => {
      setShouldRender(false);
    }, DURATION + FADE_OUT_DURATION);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!shouldRender) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-slate-800 transition-all duration-800 ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-110"
      }`}
    >
      <AnimateText showText={showText} />
      <Meteors />
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        refresh
      />
    </div>
  );
}

const AnimateText = ({ showText }: { showText: boolean }) => {
  const letters = "Handy-Kang".split("").map((letter, index) => ({
    letter,
    id: `letter-${letter}-${index}`,
    delay: index * 100,
  }));

  return (
    <div className="relative z-10 flex items-center justify-center">
      <h1 className="text-6xl md:text-8xl font-bold select-none flex">
        {letters.map((letterObj) => (
          <span
            key={letterObj.id}
            className={`inline-block text-white drop-shadow-2xl transition-all duration-500 ${
              showText
                ? "translate-y-0 opacity-100 scale-100"
                : "translate-y-8 opacity-0 scale-75"
            }`}
            style={{
              transitionDelay: `${letterObj.delay}ms`,
              textShadow:
                "0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(59, 130, 246, 0.3)",
            }}
          >
            {letterObj.letter}
          </span>
        ))}
      </h1>
    </div>
  );
};
