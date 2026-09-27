import { SECTION_IDS } from "@/lib/constants";

export function SkipLink({ label }: { label: string }) {
  return (
    <a
      href={`#${SECTION_IDS.main}`}
      className="sr-only z-[100] rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
    >
      {label}
    </a>
  );
}
