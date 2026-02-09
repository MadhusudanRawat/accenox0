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
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: centered ? 80 : 40 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4, ease: "circOut" }}
        className={cn(
          "h-1 bg-accent mb-6 rounded-full",
          centered && "mx-auto"
        )}
      />
      <h2 className={cn(
        "text-4xl md:text-6xl font-bold mb-6 tracking-tighter leading-[1.1] font-serif",
        variant === "light" ? "text-primary" : "text-white"
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "text-lg md:text-xl max-w-2xl font-medium leading-relaxed",
          centered && "mx-auto",
          variant === "light" ? "text-muted/80" : "text-white/60"
        )}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export { SectionHeading };
