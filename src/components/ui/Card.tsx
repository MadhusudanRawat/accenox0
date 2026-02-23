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
          "bg-white/5 backdrop-blur-xl rounded-[2.5rem] border border-white/10 p-10 transition-all duration-500 ease-[0.16,1,0.3,1]",
          hoverEffect && "hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:border-accent/30 hover:-translate-y-1.5 hover:bg-white/10",
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
