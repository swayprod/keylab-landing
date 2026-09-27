"use client";

import type { ProblemKey } from "@/i18n/types";
import { cn } from "@/lib/cn";

const PROBLEM_KEYS: ProblemKey[] = ["site", "visual", "traffic", "all"];

interface ProblemPickerProps {
  legend: string;
  options: Readonly<Record<ProblemKey, string>>;
  value: ProblemKey[];
  onChange: (value: ProblemKey[]) => void;
}

export function ProblemPicker({ legend, options, value, onChange }: ProblemPickerProps) {
  const toggle = (key: ProblemKey) => {
    if (key === "all") return onChange(value.includes("all") ? [] : ["all"]);
    const withoutAll = value.filter((item) => item !== "all");
    onChange(withoutAll.includes(key) ? withoutAll.filter((item) => item !== key) : [...withoutAll, key]);
  };

  return (
    <fieldset>
      <legend className="label">{legend}</legend>
      <div className="mt-3 flex flex-wrap gap-2">
        {PROBLEM_KEYS.map((key) => {
          const checked = value.includes(key);
          return (
            <label
              key={key}
              className={cn(
                "flex min-h-11 cursor-pointer items-center rounded-full border px-5 text-sm transition-[border-color,background-color,color] duration-300 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-[var(--tone-focus)]",
                checked ? "border-primary bg-primary/15 text-fg" : "border-line text-muted hover:border-fg/30 hover:text-fg",
              )}
            >
              <input type="checkbox" className="sr-only" checked={checked} onChange={() => toggle(key)} />
              {options[key]}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
