# Dodola School Portal Completion Plan

## Product goal
Turn the partial Dodola Ifa Boru Special Boarding School repository into a practical, calm, responsive school portal for public visitors, students, parents, teachers, wardens, security staff, cafeteria staff, and administrators. Preserve the existing school identity while replacing placeholder-only navigation with usable routes and clear states.

## Approved implementation approach

- Keep the existing Next.js 14 App Router, React, Tailwind CSS, and Supabase stack.
- Build a shared public shell (`Navbar`, public footer, page header, content sections) so all public pages feel like one school website.
- Build a shared authenticated portal shell with a role-aware sidebar, mobile navigation, header, breadcrumb/title area, action buttons, and consistent cards/tables.
- Add route-level pages for the missing role dashboards and student sections, while keeping the initial repository's sample data as a safe preview fallback when Supabase is not configured.
- Use Supabase for authentication and live database reads/writes when `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are present. Avoid creating a Supabase client with undefined credentials so public previews and builds remain safe.
- Keep the UI operational rather than decorative: forms validate, local demo actions update visible state, and data-dependent screens show loading, empty, success, and error states.
- Keep the current green/slate/amber palette, reduce decorative gradients, use compact typography, and avoid adding a new visual dependency.

## Project structure

- `app/`: App Router pages for public content, authentication, role dashboards, and student portal subsections.
- `components/`: shared public layout, portal shell, icons, cards, tables, status badges, and reusable UI patterns.
- `lib/`: Supabase client, fallback demo data, and small role/data helpers.
- `public/`: existing school logo and campus imagery.
- `supabase_schema.sql`: canonical database schema plus the policy/index guidance to apply in Supabase.

## Design direction

### Style options considered

- **Institutional campus portal** — 0.55 probability: restrained editorial school branding with utility-first dashboards.
- **Civic records desk** — 0.25 probability: dense, high-clarity administrative tables and status-led workflows.
- **Warm boarding-house handbook** — 0.20 probability: softer cards and more lifestyle imagery across public pages.

Chosen: **Institutional campus portal**.

### Design movement
Editorial school identity meeting a modern administrative portal: calm, structured, legible, and trustworthy.

### Core principles
1. Clarity before decoration: hierarchy, spacing, and status labels should answer what matters now.
2. One brand, two modes: public pages keep the emerald/amber school identity; portal pages prioritize light surfaces and scannable utility.
3. Every action has a state: buttons should visibly respond, and data views should explain loading, empty, or unavailable states.
4. Mobile is a first-class use case for students, wardens, and gate staff.

### Color philosophy
Emerald communicates stewardship and growth, slate provides administrative calm, amber is reserved for school pride and attention states, and red is reserved for risk or rejection. Color should encode meaning instead of turning every surface into a gradient.

### Layout paradigm
Use a persistent rail for portal navigation, a compact top header, and wide content workspaces composed of asymmetrical two-column sections, tables, and timelines. Public pages use full-width hero bands with readable content blocks rather than centered glass panels everywhere.

### Signature elements
- A small amber school-mark accent beside section labels.
- Emerald status chips for approved/healthy states and amber chips for pending attention.
- Consistent `rounded-xl` cards with thin borders instead of heavy shadows.

### Interaction philosophy
Actions are direct and reversible where possible. Demo actions update local state so the prototype feels alive, while Supabase-backed actions are isolated behind clear loading/error handling. Destructive or irreversible actions should be visually distinct and ask for confirmation before changing records.

### Animation
Use only short opacity/slide transitions on menus and status changes. No looping motion, parallax, or attention-grabbing effects.

### Typography system
Use the existing system sans stack for utility screens. Use the existing serif utility for public school headlines only. Headlines should be compact and sentence case; labels are uppercase with tracking; body copy remains 13–16px for readability.

### Brand essence
A dependable school operating layer for Dodola scholars and the staff who care for them. Personality: disciplined, caring, prepared.

### Brand voice
Headlines are clear and encouraging; CTAs are explicit and operational.

- Example headline: “Everything your school day needs, in one place.”
- Example CTA: “Review leave request” rather than “Explore.”

### Wordmark and logo
Reuse the existing circular Ifa Boru emblem as the mark. Pair it with a compact two-line wordmark in the public header and a shortened “Dodola Portal” lockup in the authenticated rail.

### Signature brand color
Deep emerald (`#064e3b`) is the ownable anchor, with amber (`#f59e0b`) used sparingly for school distinction.

## Supabase integration boundary

The UI should remain inspectable without a configured Supabase project. Live authentication, role lookup, exeat approval, QR scan logging, and future CRUD screens use Supabase only when the environment variables exist. The final handoff will include the exact SQL/policy/seed work still required in the user's Supabase project.
