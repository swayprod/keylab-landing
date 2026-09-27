import type { ComponentPropsWithoutRef, ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "ghost";
type Size = "md" | "lg";

interface ButtonStyleProps {
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
}

const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-primary text-white shadow-[0_0_0_1px_rgb(255_255_255/0.12)_inset,0_10px_40px_-10px_var(--color-primary)] hover:shadow-[0_0_0_1px_rgb(255_255_255/0.2)_inset,0_14px_56px_-8px_var(--color-primary)] hover:brightness-110",
  ghost: "border border-line text-fg hover:border-fg/30 hover:bg-surface",
};

const SIZES: Record<Size, string> = {
  md: "min-h-11 px-5 text-sm",
  lg: "min-h-14 px-4 text-sm min-[360px]:px-5 min-[360px]:text-[15px] sm:px-7 sm:text-base",
};

function buttonClassName({ variant = "primary", size = "md" }: ButtonStyleProps, className?: string) {
  return cn(
    "group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-[filter,box-shadow,background-color,border-color,transform] duration-300 ease-premium active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60",
    VARIANTS[variant],
    SIZES[size],
    className,
  );
}

function ButtonContent({ children, withArrow }: { children: ReactNode; withArrow?: boolean }) {
  return (
    <>
      {children}
      {withArrow && (
        <ArrowUpRight
          aria-hidden="true"
          className="hidden h-4 w-4 transition-transform duration-300 ease-premium group-hover:translate-x-0.5 group-hover:-translate-y-0.5 min-[360px]:block"
        />
      )}
    </>
  );
}

type ButtonProps = ButtonStyleProps & ComponentPropsWithoutRef<"button">;

export function Button({ variant, size, withArrow, className, children, type = "button", ...props }: ButtonProps) {
  return (
    <button type={type} className={buttonClassName({ variant, size }, className)} {...props}>
      <ButtonContent withArrow={withArrow}>{children}</ButtonContent>
    </button>
  );
}

type ButtonLinkProps = ButtonStyleProps & ComponentPropsWithoutRef<typeof Link>;

export function ButtonLink({ variant, size, withArrow, className, children, ...props }: ButtonLinkProps) {
  return (
    <Link className={buttonClassName({ variant, size }, className)} {...props}>
      <ButtonContent withArrow={withArrow}>{children}</ButtonContent>
    </Link>
  );
}
