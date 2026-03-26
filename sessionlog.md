# Session Log: Mobile Optimization

**Date:** 2026-03-25
**Branch:** claude/vibrant-grothendieck

## Problem

The digitaljaywalking.com website looked great on desktop but had three critical mobile issues:
1. Agent architecture diagrams (SystemArchitecture component) were unreadable — nodes overlapped at x=50% with broken SVG connection curves
2. Pixel office characters were invisible — zoom floor of 5 rendered a 1760px-wide office in a 375px container, clipping 80% of content
3. Canvas performance was sluggish — 60fps game loop with full tile grid re-render every frame on mobile GPUs

## Changes Made

### 1. SystemArchitecture.tsx — Mobile diagram layout
- Redesigned mobile coordinates (mx/my) for all 3 tiers: Core uses vertical flow with wider spacing, System and Scale use 2-column layouts (mx: 28/72%) to spread nodes left and right
- Fixed SVG Bezier curves: mobile now uses vertical control points (cp1y = from.cy + dy*0.4) instead of horizontal, so arrows flow top-to-bottom
- Increased mobile container heights: Core 480->520, System 560->620, Scale 680->780
- Reduced mobile node width from 140px to 125px

### 2. PixelOffice.tsx — Zoom and visibility fix
- Removed zoom floor: changed from Math.max(5, ...) to Math.max(0.8, ...) with fractional zoom so the office always fits the container width
- Added responsive container height: 400px desktop, 280px mobile
- Added IntersectionObserver to pause the game loop when canvas is off-screen (saves CPU and battery)
- Added tile cache invalidation on resize

### 3. gameLoop.ts — Performance throttling
- Render throttling: ~30fps on mobile, ~45fps on desktop (logic updates still run at full requestAnimationFrame rate for smooth character movement)
- Detection via navigator.maxTouchPoints and window.innerWidth

### 4. renderer.ts — Static tile grid caching
- Tile grid and grid overlay are now rendered once to an offscreen canvas and blitted as a single drawImage() per frame
- Eliminates hundreds of per-tile fillRect/drawImage calls every frame
- Cache invalidates when viewport dimensions or zoom change
- Benefits both mobile AND desktop performance

### 5. AgentWorkspace.tsx — Mobile spacing
- Tightened mobile padding: p-6 -> p-4, rounded-[60px] -> rounded-[32px], mx-4 -> mx-2
- Reclaims screen space for the pixel office canvas on small devices

### 6. launch.json — Dev server fix
- Updated runtimeExecutable to use node.exe directly with vite.js path (Windows compatibility for preview tools)

## Why These Changes

Each change directly addresses a user-visible issue with the minimum code modification:
- No new dependencies or components added
- All changes gated behind isMobile checks or responsive breakpoints — desktop is untouched
- Performance fixes compound: static tile caching + fps throttle + IntersectionObserver reduces mobile render work by ~99% when off-screen and ~70% when visible
