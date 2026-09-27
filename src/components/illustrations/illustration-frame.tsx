import { useId, type ReactNode } from "react";

interface IllustrationFrameProps {
  children: (gradient: string) => ReactNode;
}

export function IllustrationFrame({ children }: IllustrationFrameProps) {
  const gradientId = `il-${useId().replace(/[^\w-]/g, "")}`;
  return (
    <svg viewBox="0 0 400 260" fill="none" aria-hidden="true" className="h-full w-full">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="260" x2="400" y2="0" gradientUnits="userSpaceOnUse">
          <stop style={{ stopColor: "var(--color-primary)" }} />
          <stop offset="1" style={{ stopColor: "var(--color-accent)" }} />
        </linearGradient>
      </defs>
      {children(`url(#${gradientId})`)}
    </svg>
  );
}
