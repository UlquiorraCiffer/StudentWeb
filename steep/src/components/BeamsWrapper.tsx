"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function BeamsWrapper() {
  return <BackgroundBeams className="opacity-50 [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black_70%)]" />;
}
