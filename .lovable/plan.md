# Plan: 2026 homepage polish — sector pills and "Save the Date" color

## Goal
Tighten the 2026 save-the-date hero styling by reverting the sector pills to a glassmorphism look and shifting the "Save the Date" label from purple to blue.

## Changes

1. **Sector pills — revert to glassmorphism with outline**
   - File: `src/pages/Index2026.tsx` (lines 175–182)
   - Replace the current solid blue pill background (`bg-[#32447b]`) with the previous transparent glass style:
     - `bg-white/5`
     - `backdrop-blur-sm`
     - `border border-white/10`
     - `text-white/80`
   - Keep the pill shape (`rounded-full`), padding, and text size.

2. **"Save the Date" label — change from purple to blue**
   - File: `src/pages/Index2026.tsx` (line 112)
   - Replace `text-[#c4b5fd]` (purple) with a readable blue that fits the brand palette, e.g. `text-blue-400` or `#3b82f6`.
   - Preserve existing typography: `text-sm font-semibold tracking-[0.2em] uppercase`.

## Verification
- Build the project to ensure no errors.
- Capture a screenshot of the homepage at desktop viewport to confirm the pills are transparent with outlines and the label is blue.

## Scope
- Only touches `src/pages/Index2026.tsx`.
- No backend, route, or content changes.
