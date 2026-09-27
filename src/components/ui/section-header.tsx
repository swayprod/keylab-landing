import { titleId, type SectionId } from "@/lib/constants";
import { cn } from "@/lib/cn";
import { FadeIn } from "./fade-in";
import { MaskReveal } from "./reveal";

const SUBTITLE_DELAY = 0.15;

interface SectionHeaderProps {
  section: SectionId;
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({ section, title, subtitle, className }: SectionHeaderProps) {
  return (
    <div className={cn("max-w-4xl", className)}>
      <MaskReveal>
        <h2
          id={titleId(section)}
          className="font-display text-4xl leading-[0.95] font-semibold tracking-[-0.035em] text-balance uppercase sm:text-5xl md:text-6xl"
        >
          {title}
        </h2>
      </MaskReveal>
      {subtitle && (
        <FadeIn delay={SUBTITLE_DELAY}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">{subtitle}</p>
        </FadeIn>
      )}
    </div>
  );
}
