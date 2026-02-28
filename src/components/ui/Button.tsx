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
      primary: "bg-[#00A3FF] text-white hover:bg-[#0082CC] font-bold shadow-[0_0_20px_rgba(0,163,255,0.3)]",
      secondary: "bg-white text-black hover:bg-white/90 font-bold",
      outline: "border border-white/20 bg-transparent text-white hover:bg-white/10 font-bold",
      ghost: "bg-transparent text-white hover:bg-white/5 font-bold",
    };

    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-6 text-base",
      lg: "h-14 px-10 text-lg font-bold",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A3FF] disabled:pointer-events-none disabled:opacity-50 cursor-pointer active:scale-95",
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
