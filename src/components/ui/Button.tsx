import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "white";
  size?: "sm" | "md" | "lg" | "xl";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const variants = {
      primary: "bg-accent text-white hover:bg-accent/90",
      secondary: "bg-white text-black hover:bg-white/90",
      outline: "border border-white/20 bg-transparent text-white hover:bg-white/5",
      ghost: "bg-transparent text-white hover:bg-white/5",
      white: "bg-white text-black hover:bg-white/90",
    };

    const sizes = {
      sm: "h-9 px-4 text-xs tracking-widest font-bold",
      md: "h-11 px-8 text-sm tracking-widest font-bold",
      lg: "h-14 px-10 text-base tracking-widest font-bold",
      xl: "h-20 px-14 text-lg tracking-widest font-bold",
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
