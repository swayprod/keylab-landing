import type { Dictionary } from "@/i18n/types";
import { cn } from "@/lib/cn";
import { BrowserFrame } from "./browser-frame";
import { CASE_MOCKUPS } from "./mockups";
import { ScrollScale } from "./scroll-scale";

interface CaseCardProps {
  item: Dictionary["cases"]["items"][number];
  featured?: boolean;
}

export function CaseCard({ item, featured = false }: CaseCardProps) {
  const Mockup = CASE_MOCKUPS[item.key];

  return (
    <article className={cn("group grid gap-6", featured && "lg:grid-cols-12 lg:items-stretch lg:gap-12")}>
      <ScrollScale className={cn(featured && "lg:col-span-8")}>
        <BrowserFrame domain={item.domain} label={`${item.client} — ${item.domain}`}>
          <Mockup />
        </BrowserFrame>
      </ScrollScale>

      <div
        className={cn(
          "flex items-end justify-between gap-6",
          featured && "lg:col-span-4 lg:h-full lg:flex-col-reverse lg:items-start lg:justify-between lg:py-2",
        )}
      >
        <div>
          <p className="label">{item.niche}</p>
          <h3 className={cn("mt-2 font-display font-semibold tracking-tight", featured ? "text-2xl md:text-4xl" : "text-2xl")}>
            {item.client}
          </h3>
          <p className="mt-2 text-sm text-muted">{item.services}</p>
        </div>
        <p className={cn("shrink-0 text-right", featured && "lg:text-left")}>
          <span
            className={cn(
              "block font-display leading-none font-semibold tracking-[-0.04em] text-signal",
              featured ? "text-5xl md:text-7xl lg:text-8xl" : "text-4xl md:text-5xl",
            )}
          >
            {item.result}
          </span>
          <span className="mt-2 block text-sm text-muted">{item.resultLabel}</span>
        </p>
      </div>
    </article>
  );
}
