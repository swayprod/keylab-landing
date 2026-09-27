"use client";

import { useEffect, useState } from "react";
import type { Tone } from "@/components/ui/section";

export function useToneUnder(probeY: number, ignore: string) {
  const [tone, setTone] = useState<Tone>("dark");

  useEffect(() => {
    let frame = 0;
    const measure = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const target = document
          .elementsFromPoint(window.innerWidth / 2, probeY)
          .find((element) => !element.closest(ignore))
          ?.closest<HTMLElement>("[data-tone]");
        setTone(target?.dataset.tone === "light" ? "light" : "dark");
      });
    };

    measure();
    window.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, [probeY, ignore]);

  return tone;
}
