"use client";

import { useRef, type ReactNode } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/cn";

interface BrowserFrameProps {
  domain: string;
  label: string;
  children: ReactNode;
  className?: string;
}

export function BrowserFrame({ domain, label, children, className }: BrowserFrameProps) {
  const ref = useRef<HTMLDivElement>(null);
  const seen = useInView(ref, { once: true, amount: 0.7 });

  return (
    <div
      ref={ref}
      role="img"
      aria-label={label}
      className={cn(
        "overflow-hidden rounded-2xl bg-surface shadow-[0_32px_64px_-36px_rgb(11_12_17/0.55)] ring-1 ring-line transition-[transform,box-shadow] duration-700 ease-premium group-hover:-translate-y-1.5 group-hover:shadow-[0_44px_80px_-36px_rgb(11_12_17/0.6)]",
        className,
      )}
    >
      <div aria-hidden="true" className="flex items-center gap-3 border-b border-line px-4 py-2.5">
        <span className="flex gap-1.5">
          {[0, 1, 2].map((dot) => (
            <span key={dot} className="h-2.5 w-2.5 rounded-full bg-fg/15" />
          ))}
        </span>
        <span className="mx-auto truncate rounded-md bg-fg/5 px-3 py-0.5 font-mono text-[11px] text-muted">{domain}</span>
        <span className="w-[42px]" />
      </div>
      <div aria-hidden="true" className="@container relative aspect-[16/10] overflow-hidden">
        <div
          className={cn(
            "absolute inset-x-0 top-0 h-[170%] transition-transform duration-[2400ms] ease-premium motion-safe:group-hover:-translate-y-[41.2%]",
            seen && "motion-safe:animate-peek",
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
