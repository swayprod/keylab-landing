import { useId } from "react";
import { BRAND_NAME } from "@/lib/constants";
import { cn } from "@/lib/cn";

export function Logo({ className }: { className?: string }) {
  const gradientId = `logo-${useId().replace(/[^\w-]/g, "")}`;
  return (
    <span className={cn("inline-flex items-center gap-2.5 font-display text-lg font-semibold tracking-[0.12em]", className)}>
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className="h-8 w-8">
        <defs>
          <linearGradient id={gradientId} x1="0" y1="32" x2="32" y2="0" gradientUnits="userSpaceOnUse">
            <stop style={{ stopColor: "var(--color-primary)" }} />
            <stop offset="1" style={{ stopColor: "var(--color-accent)" }} />
          </linearGradient>
        </defs>
        <circle cx="11" cy="11" r="7" stroke={`url(#${gradientId})`} strokeWidth="2.4" />
        <path
          d="M16 16 27 27M21.5 21.5l2.8-2.8M25 25l2.8-2.8"
          stroke={`url(#${gradientId})`}
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {BRAND_NAME}
    </span>
  );
}
