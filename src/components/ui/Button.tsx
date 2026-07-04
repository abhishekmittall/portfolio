"use client";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "rounded-lg bg-linear-to-r from-(--cyan) to-(--pink) text-white font-semibold hover:opacity-90 shadow-lg",
        outline:
          "rounded-lg border border-(--cyan)/50 text-(--cyan) hover:bg-(--cyan)/10 hover:border-(--cyan)",
        ghost:
          "rounded-lg text-(--text-secondary) hover:text-(--text-primary) hover:bg-(--card)",
        secondary:
          "rounded-lg bg-(--card) border border-(--border) text-(--text-primary) hover:border-(--border-hover)",
        pink:
          "rounded-lg border border-(--pink)/50 text-(--pink) hover:bg-(--pink)/10 hover:border-(--pink)",
      },
      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-5 text-sm",
        lg: "h-11 px-6 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
);
Button.displayName = "Button";

export { Button, buttonVariants };
