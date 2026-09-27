import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

export function Container({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return <div className={cn("relative mx-auto w-full max-w-7xl px-4 md:px-6", className)} {...props} />;
}
