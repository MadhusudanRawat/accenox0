"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  variant?: "light" | "dark";
}

const SectionHeading = ({
  title,
  subtitle,
  centered = false,
  className,
  variant = "light",
}: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn("mb-16 md:mb-24", centered && "text-center", className)}
    >
      <h2 className={cn(
        "text-[clamp(2.5rem,6vw,5rem)] font-bold mb-8 tracking-tighter leading-[0.95]",
        variant === "light" ? "text-primary" : "text-white"
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "text-xl md:text-2xl max-w-4xl font-medium leading-relaxed",
          centered && "mx-auto",
          variant === "light" ? "text-muted" : "text-muted"
        )}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export { SectionHeading };
