# Dodola School Portal Delivery Checklist

- [x] The public site has consistent shared navigation, footer, responsive layouts, and working links for Home, About, Academics, Campus Life, Achievements, and Portal Access.
- [x] Portal pages use a shared responsive shell with role-appropriate navigation, mobile navigation, page headings, and sign-out behavior.
- [x] Student pages exist for dashboard overview, timetable, subjects, assignments, grades, attendance, announcements, leave and passes, messages, school events, profile, and settings.
- [x] Admin, teacher, parent, warden, security, and cafeteria role entry pages exist with practical overview content and links to their role workflows.
- [x] Student leave requests can be created in the demo UI and are ready to connect to the `exeats` table when Supabase is configured.
- [x] Warden exeat review includes loading, empty, pending, approved, and rejected states and keeps its Supabase update path.
- [x] Security scanner includes a usable gate workflow and keeps QR verification/logging behavior when Supabase is configured.
- [x] Login handles missing Supabase configuration, authenticates with Supabase when configured, and routes every schema role to an existing dashboard.
- [x] Public route metadata and `public/manus-routes.json` cover all page routes.
- [x] The repository installs and passes the production build after implementation.
- [x] The final handoff clearly lists the Supabase actions the user must complete, including environment variables, schema, RLS policies, auth users/profiles, and storage if needed.
- [x] The public homepage, navigation, global styling, and role-aware portal shell have been refined for clearer hierarchy, accessibility, responsive behavior, and role-specific identity.
- [x] The Supabase schema now includes announcements, assignments, submissions, attendance records, school events, messages, and meal-service logs, with a companion RLS policy file.
