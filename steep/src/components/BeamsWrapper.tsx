"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function BeamsWrapper() {
  return <BackgroundBeams className="opacity-15 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_80%)]" />;
}
