import { cn } from "@/lib/cn";

export function Marquee({ items, className }: { items: readonly string[]; className?: string }) {
  const track = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {items.map((item) => (
        <li key={item} className="label flex items-center gap-8 pr-8 tracking-[0.2em] whitespace-nowrap md:text-sm">
          {item}
          <span aria-hidden="true" className="h-1 w-1 rounded-full bg-primary" />
        </li>
      ))}
    </ul>
  );

  return (
    <div className={cn("overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]", className)}>
      <div className="flex w-max motion-safe:animate-marquee">
        {track(false)}
        {track(true)}
      </div>
    </div>
  );
}
