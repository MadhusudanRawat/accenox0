import * as React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hoverEffect = true, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-[#122C38] rounded-4xl border border-[#DDF7CC]/10 p-8 transition-all duration-300",
          hoverEffect && "hover:shadow-lg hover:border-[#DDF7CC]/30 hover:-translate-y-1 hover:bg-[#1a3f52]",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = "Card";

export { Card };
