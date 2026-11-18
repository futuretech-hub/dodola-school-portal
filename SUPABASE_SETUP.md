# Supabase setup for Dodola School Portal

The portal is built to run in preview mode with sample data, but live authentication and school records require a Supabase project. Complete the following steps before using the portal with real students.

## 1. Create the project environment values

Add these values to the deployment environment and to a local `.env.local` file. Do not commit the file.

```env
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=YOUR_PUBLIC_PUBLISHABLE_KEY
# Older Supabase projects may use this name instead:
# NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_PUBLIC_ANON_KEY
```

Only the public publishable/anon key belongs in the browser. Never expose the service-role key in this Next.js app. The portal accepts either `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` or the older `NEXT_PUBLIC_SUPABASE_ANON_KEY` name.

Important: running SQL in Supabase does not configure the Next.js app. Add the two `NEXT_PUBLIC_...` values to the environment variables of the service that serves this repository, then trigger a new deployment. Next.js embeds public environment variables during the build, so restarting the database or refreshing the browser alone will not load newly added values.

## 2. Run the schema and policies

Open the Supabase SQL editor and run `supabase_schema.sql`. It creates the profile, student, subject, grade, exeat, scan-log, announcements, assignments, attendance, events, messages, and meal-service tables used by the portal. Then run `supabase_policies.sql` to enable row-level security and apply the starter policies.

Before using real data, review the enum values. The application supports `super_admin`, `teacher`, `warden`, `security_guard`, `student`, `parent`, and `cafeteria_staff`.

## 3. Review row-level security before real data

The included policy file is a secure starting point, not a substitute for reviewing your school’s exact permissions. It uses `auth.uid()` and the role stored in `profiles`. At minimum, the production project should enforce these rules:

- Students can read their own profile, student record, grades, attendance/scan records, announcements, and their own exeats; students can insert their own pending exeat requests.
- Parents can read only the linked student record, grades, attendance, announcements, events, and leave records for their linked child.
- Teachers can read their assigned students and subjects and can insert/update grades, assignments, and attendance for the classes they teach.
- Wardens can read students and exeats needed for residence operations and can approve or reject pending exeats.
- Security staff can read the fields needed to verify a student QR token and can insert gate scan logs; they should not edit academic records.
- Cafeteria staff can insert meal service logs and read only the student count or scan data needed for meal operations.
- Administrators can manage all operational records.

Do not use `using (true)` or `with check (true)` policies in production. Test every policy from the Supabase SQL editor and with separate accounts before importing student data.

## 4. Create Auth users and matching profiles

Create each staff, student, and parent account in **Authentication → Users**. Then insert a matching row into `public.profiles` using the same UUID as the Auth user. The `profiles.role` value must match one of the supported enum values. The login page routes based on this role.

For a student, also create a row in `students` with a unique `student_id_code` and `qr_code_token`. Link the student's `user_id` to the profile and, when applicable, link `parent_id` to the parent profile.

## 5. Seed the academic structure and staff assignments

Create rows in `subjects` for every grade and stream. Then add `student_grades` rows for the current semester. The generated `total_score` column is calculated from the five component scores. Add `assignments`, `attendance_records`, and `school_events` after the teacher and student profiles exist. Link `teacher_id`, `recorded_by`, and `created_by` to the appropriate profile UUIDs.

For parents, set `students.parent_id` to the parent profile UUID. For teachers, the current schema supports teacher ownership on assignments; if you need strict class rosters, add a `teacher_subjects` or `class_memberships` table and tighten the teacher policies around it.

## 6. Storage and images (optional)

The current public pages use the repository images under `public/`. If you later add student photos or uploaded assignment files, create private Supabase Storage buckets and policies that restrict access by the linked student, teacher, parent, or administrator role.

## 7. Recommended setup order

Run the schema, run the policies, create one administrator, create one account for each other role, insert one test student and parent, seed one subject and grade, then test the student leave request, warden approval, security scanner, teacher attendance, and cafeteria meal log. Only after those flows work should you import the full student register.

## 8. Verify before launch

Test each role with a separate Auth account. Confirm that a student cannot read another student’s grades or exeats, a parent can see only their linked child, a warden can update exeat status, and a security user can log a gate action without gaining administrator access.
