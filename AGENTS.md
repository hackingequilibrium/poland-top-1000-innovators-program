# Architecture rules

- Keep the 2026 agenda schedule and speaker-photo lookup in a dedicated data module, separate from page rendering, so session updates do not affect the archived 2025 agenda.
- Keep admin invoice tracking in a separate, admin-only table and component; retain group and per-holder statuses separately so changing invoice type does not lose recorded statuses.
- Export ticket registrations from paginated fresh reads with one row per holder and a shared group reference; sanitize CSV cells so participant input cannot execute spreadsheet formulas.