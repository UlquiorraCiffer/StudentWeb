"use client";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

export default function FacultyTooltip({
  name,
  role,
  initials,
  bg,
  iconColor,
}: {
  name: string;
  role: string;
  initials: string;
  bg: string;
  iconColor: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setHovered(!hovered)}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.6 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.6 }}
            transition={{ type: "spring", stiffness: 260, damping: 10 }}
            className="absolute -top-16 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center justify-center rounded-md bg-black px-4 py-2 text-xs shadow-xl whitespace-nowrap"
          >
            <div className="relative z-30 text-base font-bold text-white">
              {name}
            </div>
            <div className="text-xs text-white/80">{role}</div>
          </motion.div>
        )}
      </AnimatePresence>
      <div
        className="w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center shrink-0 cursor-pointer transition-transform hover:scale-105"
        style={{ background: bg }}
      >
        <span
          className="text-sm md:text-lg font-bold"
          style={{ fontFamily: "var(--font-signifier)", color: iconColor }}
        >
          {initials}
        </span>
      </div>
    </div>
  );
}
