"use client";

import { useEffect, type RefObject } from "react";

const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])';

function trapFocus(event: KeyboardEvent, container: HTMLElement) {
  const focusable = [...container.querySelectorAll<HTMLElement>(FOCUSABLE)];
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (!first || !last) return;
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

export function useModal(containerRef: RefObject<HTMLElement | null>, open: boolean, onClose: () => void) {
  useEffect(() => {
    const container = containerRef.current;
    if (!open || !container) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "Tab") trapFocus(event, container);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    container.querySelector<HTMLElement>(FOCUSABLE)?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [containerRef, open, onClose]);
}
