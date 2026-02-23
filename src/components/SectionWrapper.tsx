import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  containerClassName?: string;
}

const SectionWrapper = ({
  id,
  children,
  className,
  containerClassName,
  ...props
}: SectionWrapperProps) => {
  return (
    <section
      id={id}
      className={cn("py-24 md:py-32 lg:py-48 px-6 sm:px-12 md:px-24", className)}
      {...props}
    >
      <div className={cn("w-full max-w-7xl mx-auto", containerClassName)}>
        {children}
      </div>
    </section>
  );
};

export { SectionWrapper };
