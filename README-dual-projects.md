# Dual Astro Design Systems Project

This repository contains two complete Astro projects showcasing different design systems extracted from their respective DESIGN.md files:

## 🌅 Steep (Daylight Theme)

A daylight analytics workspace with warm peach accents and editorial typography. Features:

- **Color Palette:** Ink, White, Fog, Rust accent
- **Typography:** Display serif (Signifier) for headlines, sans-serif (Sohne) for UI
- **Style:** Editorial, confident, magazine-like layout
- **Use Case:** Analytics dashboards with professional appearance

## 🔴 Sauce Labs (Dark Theme)

A neon-lit engineering console with electric green accents. Features:

- **Color Palette:** Obsidian Shell, Mint Frost, Neon Pulse accent
- **Typography:** Geometric sans-serif (Aeonik + AeonikFono)
- **Style:** Developer tooling, high-tech, command center aesthetic
- **Use Case:** Development platforms and testing dashboards

## 🚀 Getting Started

### 1. Install the Astro Docs MCP Server

Your opencode AI has the Astro Docs MCP server configured to provide access to the latest Astro documentation:

```json
// opencode.json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "Astro docs": {
      "type": "remote",
      "url": "https://mcp.docs.astro.build/mcp",
      "enabled": true
    }
  }
}
```

### 2. Project Structure

Each design system has its own project directory:

```
/steep/
├── astro.config.mjs
├── package.json
├── README.md
├── src/
│   ├── assets/          # Static assets
│   ├── components/      # Astro components
│   ├── layouts/         # Page layouts
│   ├── pages/           # Astro pages
│   └── styles.css       # CSS custom properties
└── public/             # Public assets

/sauce-labs/
├── astro.config.mjs
├── package.json
├── README.md
├── src/
│   ├── assets/          # Static assets
│   ├── components/      # Astro components
│   ├── layouts/         # Page layouts
│   ├── pages/           # Astro pages
│   └── styles.css       # CSS custom properties
└── public/             # Public assets
```

## 🛠 Development Setup

### Steep Project

```bash
# Start the Steep design system in development mode
cd steep
npm run dev

# Build for production
cd steep
npm run build

# Preview the built site
cd steep
npm run preview
```

### Sauce Labs Project

```bash
# Start the Sauce Labs design system in development mode
cd sauce-labs
npm run dev

# Build for production
cd sauce-labs
npm run build

# Preview the built site
cd sauce-labs
npm run preview
```

## 🏗 Project Architecture

### Steep
- **Font Pairing:** Signifier (display serif) / Sohne (body sans-serif)
- **Button Styles:** Rounded pills (9999px radius), Ink background
- **Card Styles:** 24px radius, subtle elevation
- **Color Philosophy:** Warm peach (#5d2a1a) as accent against achromatic surface
- **Layout:** Split hero with floating product cards, 80px section gaps
- **Typography:** Editorial feel with weight 430-480 for fine hierarchy

### Sauce Labs
- **Font Pairing:** Aeonik (geometric sans) / AeonikFono (display)
- **Button Styles:** Large pill shapes (56px radius), neon green backgrounds
- **Card Styles:** 60px radius, minimal shadows
- **Color Philosophy:** Electric green (#3ddc91) rationed across interactive states
- **Layout:** Dark canvas with light content cards, isometric illustrations
- **Typography:** Geometric precision with thin weights (400/500)

## 🎨 Design System Implementation

Each project implements its design system as:

1. **CSS Custom Properties:** Extracted design tokens from DESIGN.md files
2. **Component Library:** Reusable Astro components following the design language
3. **Page Templates:** Proper layout with navigation, hero sections, and content areas
4. **Style Guide:** Visual representation of all design elements

## 🔑 Key Commands Summary

| Command | Steep | Sauce Labs |
|---------|-------|------------|
| `npm run dev` | `cd steep; npm run dev` | `cd sauce-labs; npm run dev` |
| `npm run build` | `cd steep; npm run build` | `cd sauce-labs; npm run build` |
| `npm run preview` | `cd steep; npm run preview` | `cd sauce-labs; npm run preview` |

## ✨ AI-Powered Astro Development

With the Astro Docs MCP server configured:

- **Real-time Documentation:** Access current Astro documentation while working
- **Best Practices:** Get recommendations aligned with latest Astro standards
- **Feature Detection:** Know about experimental features and when they become stable
- **Migration Guidance:** Avoid deprecated patterns in development

**Pro Tip:** Ask the AI to check your code against the latest documentation, especially for newer features like server islands, actions, or experimental flags.

## 📚 Resources

- **Astro Documentation:** https://docs.astro.build
- **Design System References:** Original DESIGN.md files provided
- **Component Patterns:** Use the existing components as templates for new features
- **CSS Architecture:** All styles use CSS custom properties for easy theming

## 🔌 Integration Notes

Both projects use:
- Astro v7+ with React and Tailwind CSS integrations
- TypeScript for better development experience
- Modern Astro island architecture for optimal performance
- Component-based architecture with proper separation of concerns

The dual-project setup allows you to:
1. Compare different design systems in one repository
2. Rapidly prototype UI changes using two distinct approaches
3. Test how design choices impact user engagement
4. Share code between projects where appropriate while maintaining distinct identities

## 🎯 Use Cases

Use this setup for:
- **Design System Research:** Comparing daylight vs. dark theme approaches
- **A/B Testing:** Evaluating how different design languages affect conversion
- **Team Onboarding:** Teaching new hires about design consistency across projects
- **Component Libraries:** Building a shared component system with theme variants
