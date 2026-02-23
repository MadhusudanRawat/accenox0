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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn("mb-12", centered && "text-center", className)}
    >
      <h2 className={cn(
        "text-3xl md:text-5xl font-bold mb-4 tracking-tight",
        variant === "light" ? "text-[#DDF7CC]" : "text-[#DDF7CC]"
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "text-lg max-w-2xl",
          centered && "mx-auto",
          variant === "light" ? "text-[#a8c899]" : "text-[#a8c899]"
        )}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export { SectionHeading };
