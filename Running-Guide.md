<!-- User command from the user: "User wants to see how to run the two Astro sites in both development mode and build mode. Need to show commands to run each site separately, with clear documentation." -->

# Running the Dual Astro Project

This guide provides clear instructions for running both the Steep and Sauce Labs design system projects.

## Overview

There are **two separate Astro projects** in this repository:
- **Steep**: Daylight analytics design system (blue/calm theme)
- **Sauce Labs**: Dark engineering console design system (neon/green theme)

Each project has its own configuration, dependencies, and can run independently.

## Prerequisites

- Node.js (>= 22.12.0) - as specified in project setup
- npm (or your preferred package manager)

## 🛠️ Installation

Run these commands once to install all dependencies:

```bash
# Install root-level dependencies (if any)
cd /path/to/repository
npm install

# Install Steep project dependencies
cd steep
npm install

# Install Sauce Labs project dependencies
cd sauce-labs
npm install
```

## 🚀 Running in Development Mode

### Steep Project

```bash
# Navigate to Steep project directory
cd steep

# Start development server (typically on port 4321)
npm run dev

# Development server will be available at: http://localhost:4321/
# Features:
# - Auto-reload on file changes
# - React component support
# - Tailwind CSS enabled
# - Hot module replacement
```

### Sauce Labs Project

```bash
# Navigate to Sauce Labs project directory
cd sauce-labs

# Start development server (typically on port 4321)
npm run dev

# Development server will be available at: http://localhost:4321/
# Features:
# - Auto-reload on file changes
# - React component support
# - Tailwind CSS enabled
# - Hot module replacement
```

## 📦 Building for Production

### Steep Project

```bash
# Navigate to Steep project directory
cd steep

# Build for production
npm run build

# The built files will be in the 'dist' directory
# Static HTML, CSS, and JavaScript files optimized for production
# Uses Astro's static site generation
```

### Sauce Labs Project

```bash
# Navigate to Sauce Labs project directory
cd sauce-labs

# Build for production
npm run build

# The built files will be in the 'dist' directory
# Static HTML, CSS, and JavaScript files optimized for production
# Uses Astro's static site generation
```

## 👁️ Previewing Built Sites

### Steep Project

```bash
# Navigate to Steep project directory
cd steep

# Preview the built site locally
npm run preview

# Preview server will be available at: http://localhost:4321/
# Shows exactly how the site will appear in production
# Perfect for final checks before deployment
```

### Sauce Labs Project

```bash
# Navigate to Sauce Labs project directory
cd sauce-labs

# Preview the built site locally
npm run preview

# Preview server will be available at: http://localhost:4321/
# Shows exactly how the site will appear in production
# Perfect for final checks before deployment
```

## 🆘 Command Reference

| Action | Steep | Sauce Labs |
|--------|-------|------------|
| Install dependencies | `cd steep && npm install` | `cd sauce-labs && npm install` |
| Start development | `cd steep && npm run dev` | `cd sauce-labs && npm run dev` |
| Build production | `cd steep && npm run build` | `cd sauce-labs && npm run build` |
| Preview built site | `cd steep && npm run preview` | `cd sauce-labs && npm run preview` |

## 🌐 Custom Ports (if needed)

If you need to run both projects simultaneously, you can customize the ports:

### Steep (example - using custom script)

```bash
cd steep
PORT=3000 npm run dev
```

### Sauce Labs (example - using custom script)

```bash
cd sauce-labs
PORT=3001 npm run dev
```

## 🔧 Configuration Notes

### Steep Project (`steep/astro.config.mjs`)
- Site: `https://steep.example.com`
- Theme: Daylight (light)
- Font: Signifier serif + Sohne sans-serif
- Colors: Ink, White, Fog, Rust accent
- Output: Static site generation

### Sauce Labs Project (`sauce-labs/astro.config.mjs`)
- Site: `https://sauce-labs.example.com`
- Theme: Dark (neon-lit)
- Font: Aeonik geometric + AeonikFono display
- Colors: Obsidian Shell, Mint Frost, Neon Pulse accent
- Output: Static site generation

## 📊 Development Workflow

1. **Choose Project**: Decide which design system you're working on
2. **Navigate**: `cd steep` or `cd sauce-labs`
3. **Edit Components**: Modify `.astro`, `.tsx`, or `.css` files
4. **Test**: Use development server for real-time feedback
5. **Build**: Use `npm run build` for production deployment
6. **Preview**: Use `npm run preview` to verify builds

## 🚀 Deployment (After building)

The built `dist` directories from each project are ready for deployment to:
- GitHub Pages
- Netlify
- Vercel
- AWS S3 with CloudFront
- Any static hosting service

## 💡 Tips for Both Projects

- **Design System Testing**: Toggle between projects to compare design languages
- **Code Reuse**: Some patterns are similar across projects (navigation, layouts)
- **Theme Testing**: Use the Astro Docs MCP server (`opencode.json`) to explore design-related Astro features
- **Component Library**: Build components once and reuse with project-specific styling

## 🔍 Troubleshooting

### Common Issues

1. **Port Already in Use**
   ```bash
   # Change ports in astro.config.mjs for each project
   # or use different terminal tabs
   ```

2. **Missing Dependencies**
   ```bash
   # Re-install dependencies
   cd steep  # or sauce-labs
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Build Errors**
   ```bash
   # Check TypeScript errors
   cd steep  # or sauce-labs
   npm run astro check
   ```

4. **Tailwind Not Working**
   ```bash
   # Re-install Tailwind
   cd steep  # or sauce-labs
   npm install tailwindcss@latest postcss@latest autoprefixer@latest
   npm run astro add tailwind
   ```

## 📚 Additional Resources

- **Astro Documentation**: https://docs.astro.build
- **React Integration**: https://docs.astro.build/en/guides/framework-components/
- **Tailwind CSS**: https://docs.astro.build/en/guides/styling/
- **CSS Custom Properties**: Use `--variable-name` for design tokens

## 🎯 Recommended Workflows

1. **Design Exploration**: Run both projects simultaneously to compare design choices
2. **Component Development**: Start with Steep, then adapt for Sauce Labs
3. **Theme Testing**: Experiment with color schemes and typography
4. **Performance Testing**: Use preview mode to test production builds
5. **Cross-project Learning**: Learn from both design systems in the development process

## 📝 Generated Commands Documentation

This document was automatically generated based on user requirements for running two independent Astro projects with different design systems.
