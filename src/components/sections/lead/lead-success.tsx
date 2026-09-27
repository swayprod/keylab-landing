"use client";

import { useEffect, useRef } from "react";
import { m, useReducedMotion } from "framer-motion";
import { AUTHOR, DURATION, EASE } from "@/lib/constants";
import { Button } from "@/components/ui/button";

interface LeadSuccessProps {
  title: string;
  text: string;
  again: string;
  onReset: () => void;
}

export function LeadSuccess({ title, text, again, onReset }: LeadSuccessProps) {
  const reducedMotion = useReducedMotion();
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => titleRef.current?.focus(), []);

  return (
    <div className="flex flex-col items-center py-8 text-center md:py-12">
      <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" className="h-24 w-24">
        <circle cx="48" cy="48" r="44" stroke="var(--color-primary)" strokeOpacity="0.35" strokeWidth="2" />
        <m.path
          d="M30 49l12 12 24-26"
          stroke="var(--color-accent)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={reducedMotion ? false : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: DURATION.slow, ease: EASE, delay: DURATION.fast }}
        />
      </svg>
      <h3 ref={titleRef} tabIndex={-1} className="mt-8 font-display text-3xl font-semibold tracking-tight focus:outline-none">
        {title}
      </h3>
      <p role="status" className="mt-3 max-w-sm leading-relaxed text-muted">
        {text}
      </p>
      <a
        href={AUTHOR.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex min-h-11 items-center font-display text-2xl font-semibold tracking-tight text-signal underline decoration-2 underline-offset-8"
      >
        {AUTHOR.handle}
      </a>
      <Button variant="ghost" onClick={onReset} className="mt-8">
        {again}
      </Button>
    </div>
  );
}
