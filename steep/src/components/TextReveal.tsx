"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function TextReveal({ text, className }: { text: string; className?: string }) {
  return <TextGenerateEffect words={text} className={className} filter={true} duration={0.6} />;
}
