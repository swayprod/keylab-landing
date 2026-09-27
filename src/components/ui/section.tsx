import type { ComponentPropsWithoutRef } from "react";
import { titleId, type SectionId } from "@/lib/constants";
import { cn } from "@/lib/cn";
import { Container } from "./container";

export type Tone = "dark" | "light";

interface SectionProps extends Omit<ComponentPropsWithoutRef<"section">, "id"> {
  id: SectionId;
  tone?: Tone;
  sheet?: boolean;
  containerClassName?: string;
}

export function Section({ id, tone = "dark", sheet = false, className, containerClassName, children, ...props }: SectionProps) {
  return (
    <section
      id={id}
      data-tone={tone}
      aria-labelledby={titleId(id)}
      className={cn("relative scroll-mt-16 overflow-clip py-24 md:py-36", sheet && "sheet", className)}
      {...props}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
