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
      primary: "bg-[#DDF7CC] text-[#122C38] hover:bg-[#c7e6b5] font-bold",
      secondary: "bg-[#122C38] text-[#DDF7CC] hover:bg-[#1a3f52] border border-[#DDF7CC] font-bold",
      outline: "border border-[#DDF7CC] bg-transparent text-[#DDF7CC] hover:bg-[#122C38]/50 font-bold",
      ghost: "bg-transparent text-[#DDF7CC] hover:bg-[#DDF7CC]/10 font-bold",
    };

    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-6 text-base",
      lg: "h-14 px-8 text-lg font-bold",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DDF7CC] disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
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
