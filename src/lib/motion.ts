import { DURATION, EASE, REVEAL_OFFSET } from "./constants";

export function fadeUp(reducedMotion: boolean | null, delay = 0) {
  if (reducedMotion) return {};
  return {
    initial: { opacity: 0, y: REVEAL_OFFSET },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -REVEAL_OFFSET },
    transition: { duration: DURATION.base, ease: EASE, delay },
  };
}
