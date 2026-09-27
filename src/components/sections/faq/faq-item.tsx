"use client";

import { m, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import type { Dictionary } from "@/i18n/types";
import { DURATION, EASE } from "@/lib/constants";
import { cn } from "@/lib/cn";

interface FaqItemProps {
  item: Dictionary["faq"]["items"][number];
  open: boolean;
  onToggle: () => void;
}

export function FaqItem({ item, open, onToggle }: FaqItemProps) {
  const reducedMotion = useReducedMotion();
  const buttonId = `faq-button-${item.id}`;
  const panelId = `faq-panel-${item.id}`;

  return (
    <li className="grid border-t border-line last:border-b md:grid-cols-[1.15fr_1fr] md:gap-x-16">
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="group flex min-h-11 w-full items-start gap-5 py-7 text-left md:py-9"
        >
          <span
            aria-hidden="true"
            className={cn(
              "mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-[transform,background-color,color,border-color] duration-500 ease-premium md:mt-1",
              open ? "rotate-45 border-transparent bg-signal text-[var(--tone-bg)]" : "border-line group-hover:border-fg/40",
            )}
          >
            <Plus className="h-4 w-4" />
          </span>
          <span
            className={cn(
              "font-display text-xl leading-tight font-semibold tracking-tight text-balance transition-colors duration-500 md:text-3xl",
              open ? "text-signal" : "group-hover:text-signal",
            )}
          >
            {item.question}
          </span>
        </button>
      </h3>
      <m.div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        aria-hidden={!open}
        inert={!open}
        initial={false}
        animate={open ? { height: "auto", opacity: 1, filter: "blur(0px)" } : { height: 0, opacity: 0, filter: "blur(4px)" }}
        transition={{ duration: reducedMotion ? 0 : DURATION.slow, ease: EASE }}
        className="overflow-hidden"
      >
        <p className="pb-8 pl-14 text-base leading-relaxed text-muted md:py-9 md:pl-0 md:text-lg">{item.answer}</p>
      </m.div>
    </li>
  );
}
