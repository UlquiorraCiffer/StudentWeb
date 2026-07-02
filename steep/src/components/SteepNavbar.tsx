"use client";
import { useState } from "react";
import { Navbar, NavBody, NavItems, MobileNav, MobileNavHeader, MobileNavMenu, MobileNavToggle } from "@/components/ui/resizable-navbar";

const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Courses", link: "/courses" },
  { name: "Faculty", link: "/faculty" },
  { name: "Facilities", link: "/facilities" },
  { name: "Gallery", link: "/gallery" },
  { name: "Contact", link: "/contact" },
];

const mobileTabItems = [
  { name: "Home", link: "/" },
  { name: "Courses", link: "/courses" },
  { name: "Faculty", link: "/faculty" },
  { name: "Contact", link: "/contact" },
];

export default function SteepNavbar({ currentPath = "/" }: { currentPath?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (link: string) => link === "/" ? currentPath === "/" : currentPath.startsWith(link);

  return (
    <Navbar>
      <NavBody>
        <a href="/" className="relative z-20 mr-4 flex items-center gap-2 px-2 py-1 text-lg font-medium shrink-0" style={{ fontFamily: "var(--font-signifier)", color: "var(--color-ink)" }}>
          Eklavya
          <span className="nav-ai-badge hidden sm:inline-flex">⚡ AI-Powered</span>
        </a>
        <NavItems items={navItems} />
        <div className="relative z-20 flex items-center gap-2 shrink-0">
          <a href="/contact">
            <button className="bg-[var(--color-accent-green)] text-[var(--color-midnight-ink)] px-6 py-2.5 rounded-full text-sm font-medium transition-opacity hover:opacity-85 min-h-[44px]" style={{ fontFamily: "var(--font-sohne)" }}>
              Enquire Now
            </button>
          </a>
        </div>
      </NavBody>
      <MobileNav>
        <MobileNavHeader>
          <a href="/" className="relative z-20 flex items-center gap-2 px-2 py-1 text-base font-medium" style={{ fontFamily: "var(--font-signifier)", color: "var(--color-ink)" }}>
            Eklavya
            <span className="nav-ai-badge">⚡ AI-Powered</span>
          </a>
          <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </MobileNavHeader>
        <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
          {mobileTabItems.map((item, idx) => (
            <a
              key={`mobile-tab-${idx}`}
              href={item.link}
              onClick={() => setIsOpen(false)}
              className="relative w-full text-left px-4 py-3 text-sm font-medium transition-colors rounded-lg"
              style={{
                fontFamily: "var(--font-sohne)",
                color: isActive(item.link) ? "var(--color-midnight-ink)" : "var(--color-graphite)",
                background: isActive(item.link) ? "var(--color-card-saffron)" : "transparent",
              }}
            >
              {item.name}
            </a>
          ))}
        </MobileNavMenu>
        <div className="flex w-full max-w-[calc(100vw-2rem)] mx-auto mt-2 border-t border-[var(--color-fog)] md:hidden">
          {mobileTabItems.map((item, idx) => (
            <a
              key={`mobile-tab-bar-${idx}`}
              href={item.link}
              className="flex-1 text-center py-2 text-[12px] font-medium transition-colors min-h-[44px] flex items-center justify-center"
              style={{
                fontFamily: "var(--font-sohne)",
                color: isActive(item.link) ? "var(--color-midnight-ink)" : "var(--color-graphite)",
              }}
            >
              {item.name}
            </a>
          ))}
        </div>
      </MobileNav>
    </Navbar>
  );
}
