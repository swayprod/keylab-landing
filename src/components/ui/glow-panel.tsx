import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function GlowPanel({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "relative bg-[radial-gradient(65%_65%_at_50%_45%,color-mix(in_srgb,var(--color-primary)_20%,transparent),transparent)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
