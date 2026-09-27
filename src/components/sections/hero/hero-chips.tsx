const POSITIONS = [
  "left-[46%] top-[5%]",
  "right-[6%] top-[16%]",
  "right-[0%] top-[54%]",
  "left-[26%] bottom-[12%]",
  "right-[14%] bottom-[20%]",
];

export function HeroChips({ chips }: { chips: readonly string[] }) {
  return (
    <ul aria-hidden="true" className="hidden lg:block">
      {chips.map((chip, index) => (
        <li
          key={chip}
          style={{ animationDelay: `${index * -1.3}s` }}
          className={`absolute ${POSITIONS[index % POSITIONS.length]} flex items-center gap-2 rounded-full border border-line bg-bg/60 px-3.5 py-2 font-mono text-xs text-fg/80 backdrop-blur-md motion-safe:animate-float`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_var(--color-accent)]" />
          {chip}
        </li>
      ))}
    </ul>
  );
}
