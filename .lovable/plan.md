# Plan: Adjust "Detailed agenda coming soon" text size and line break

## Goal
Make the "Detailed agenda coming soon" subtext under Program Experience / Four Intensive Days smaller (medium body text) and render it as a single line without a line break.

## Current state
- The text was added in `src/components/top1000/Sections.tsx` inside `ProgramSection` as a `<p>` with classes `text-base md:text-lg font-extralight`.
- The day-card bullets use `text-sm md:text-base font-extralight`.

## Changes
1. Reduce the agenda note paragraph in `ProgramSection` from `text-base md:text-lg` to `text-sm md:text-base` (keeping `font-extralight` and the existing color/spacing).
2. Remove the `<br />` or line break between "Detailed agenda coming soon." and "Session times, speakers, workshops, and additional program details will be announced as the Summit approaches." so the copy flows as one paragraph/line.

## Files affected
- `src/components/top1000/Sections.tsx`

## Verification
Run `bun run build` to confirm the change compiles cleanly.