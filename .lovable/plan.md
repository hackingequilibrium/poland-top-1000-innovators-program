# Plan: Adjust "Detailed agenda coming soon" text size

## Goal
Reduce the size of the "Detailed agenda coming soon" subtext under the Program Experience / Four Intensive Days section so it reads as medium body text rather than large body text.

## Current state
- The text was added in `src/components/top1000/Sections.tsx` inside `ProgramSection` as a `<p>` with classes `text-base md:text-lg font-extralight`.
- The day-card bullets use `text-sm md:text-base font-extralight`.

## Change
Update the agenda note paragraph in `ProgramSection` from `text-base md:text-lg` to `text-sm md:text-base` (keeping `font-extralight` and the existing color/spacing).

## Files affected
- `src/components/top1000/Sections.tsx`

## Verification
Run `bun run build` to confirm the change compiles cleanly.