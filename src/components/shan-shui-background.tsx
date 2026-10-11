"use client";

import { useEffect } from "react";

type ShanShuiChunk = { canv: string };

type ShanShuiMemory = {
  canv: string;
  chunks: ShanShuiChunk[];
  xmin: number;
  xmax: number;
  cwid: number;
  cursx: number;
  windx: number;
};

type ShanShuiWindow = Window & {
  MEM?: ShanShuiMemory;
  viewupdate?: () => void;
  chunkloader?: (xmin: number, xmax: number) => void;
  chunkrender?: (xmin: number, xmax: number) => void;
};

const SHAN_SHUI_SEED = "Handy";
const FRAME_ID = "shan-shui-bg";
const DRIFT_SPEED = 18;
const VIEW_ZOOM = 1.142;
const FRAME_CLASS =
  "pointer-events-none fixed inset-0 z-0 h-full w-full border-0 opacity-0 transition-opacity duration-700 data-[ready=true]:opacity-[0.2] dark:invert dark:data-[ready=true]:opacity-[0.16]";

export function ShanShuiBackground() {
  useEffect(() => {
    let frame = document.getElementById(FRAME_ID) as HTMLIFrameElement | null;
    if (!frame) {
      frame = document.createElement("iframe");
      frame.id = FRAME_ID;
      frame.title = "산수";
      frame.setAttribute("aria-hidden", "true");
      frame.tabIndex = -1;
      frame.className = FRAME_CLASS;
      frame.src = `/vendor/shan-shui-inf/background.html?seed=${SHAN_SHUI_SEED}`;
      document.body.prepend(frame);
    }

    const node = frame;
    let raf = 0;
    let last = performance.now();
    let drawnUntil = 0;

    const extendAhead = (win: ShanShuiWindow) => {
      const mem = win.MEM;
      if (!mem || !win.chunkloader || !win.chunkrender) return;
      const viewWidth = mem.windx / VIEW_ZOOM;
      const room = mem.xmax - (mem.cursx + viewWidth);
      if (room > mem.cwid || mem.xmax <= drawnUntil) return;
      win.chunkloader(mem.cursx, mem.cursx + mem.windx);
      win.chunkrender(mem.xmin, mem.xmax);
      const group = win.document.getElementById("G");
      if (group) group.innerHTML = mem.canv;
      drawnUntil = mem.xmax;
    };

    const drift = (now: number) => {
      const win = node.contentWindow as ShanShuiWindow | null;
      if (!win?.MEM || !win.viewupdate) return;
      const delta = Math.min(0.05, (now - last) / 1000);
      last = now;
      win.MEM.cursx += DRIFT_SPEED * delta;
      extendAhead(win);
      win.viewupdate();
      raf = requestAnimationFrame(drift);
    };

    const start = () => {
      node.dataset.ready = "true";
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const win = node.contentWindow as ShanShuiWindow | null;
      if (reduceMotion || !win?.MEM || !win.viewupdate) return;
      last = performance.now();
      raf = requestAnimationFrame(drift);
    };

    if (node.contentDocument?.getElementById("SVG")) {
      start();
    } else {
      node.addEventListener("load", start);
    }

    return () => {
      cancelAnimationFrame(raf);
      node.removeEventListener("load", start);
    };
  }, []);

  return null;
}
