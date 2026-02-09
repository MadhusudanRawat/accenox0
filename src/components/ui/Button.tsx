import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const variants = {
      primary: "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/10",
      secondary: "bg-accent text-primary hover:bg-accent/90 shadow-lg shadow-accent/20",
      outline: "border border-border bg-transparent text-primary hover:bg-secondary/50",
      ghost: "bg-transparent text-primary hover:bg-secondary/50",
    };

    const sizes = {
      sm: "h-9 px-4 text-xs uppercase tracking-widest font-black",
      md: "h-11 px-8 text-sm uppercase tracking-widest font-black",
      lg: "h-16 px-12 text-base uppercase tracking-widest font-black",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50 cursor-pointer active:scale-[0.98] hover:scale-[1.02]",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
