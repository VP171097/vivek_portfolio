"use client";

import React from "react";
import { motion, useScroll } from "framer-motion"; // ✅ make sure you use framer-motion, not motion/react
import { cn } from "@/lib/utils"; // if you don’t have cn, remove it or use classnames

export const ScrollProgress = React.forwardRef(
  ({ className, ...props }, ref) => {
    const { scrollYProgress } = useScroll();

    return (
      <motion.div
        ref={ref}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 h-2 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400",
          className
        )}
        style={{
          scaleX: scrollYProgress,
          transformOrigin: "left",
          height: "1px",
        }}
        {...props}
      />
    );
  }
);

ScrollProgress.displayName = "ScrollProgress";
