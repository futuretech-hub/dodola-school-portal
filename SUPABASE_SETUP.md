# Supabase setup for Dodola School Portal

The portal is built to run in preview mode with sample data, but live authentication and school records require a Supabase project. Complete the following steps before using the portal with real students.

## 1. Create the project environment values

Add these values to the deployment environment and to a local `.env.local` file. Do not commit the file.

```env
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_PUBLIC_ANON_KEY
```

Only the public anon key belongs in the browser. Never expose the service-role key in this Next.js app.

## 2. Run the schema

Open the Supabase SQL editor and run `supabase_schema.sql`. It creates the profile, student, subject, grade, exeat, and scan-log tables used by the portal.

Before using real data, review the enum values. The application supports `super_admin`, `teacher`, `warden`, `security_guard`, `student`, `parent`, and `cafeteria_staff`.

## 3. Add row-level security policies

Enable RLS on every application table and add policies based on `auth.uid()` and the role stored in `profiles`. At minimum, the production project should enforce these rules:

- Students can read their own profile, student record, grades, attendance/scan records, announcements, and their own exeats; students can insert their own pending exeat requests.
- Parents can read only the linked student record, grades, attendance, announcements, events, and leave records for their linked child.
- Teachers can read their assigned students and subjects and can insert/update grades, assignments, and attendance for the classes they teach.
- Wardens can read students and exeats needed for residence operations and can approve or reject pending exeats.
- Security staff can read the fields needed to verify a student QR token and can insert gate scan logs; they should not edit academic records.
- Cafeteria staff can insert meal service logs and read only the student count or scan data needed for meal operations.
- Administrators can manage all operational records.

Do not use `using (true)` or `with check (true)` policies in production.

## 4. Create Auth users and matching profiles

Create each staff, student, and parent account in **Authentication → Users**. Then insert a matching row into `public.profiles` using the same UUID as the Auth user. The `profiles.role` value must match one of the supported enum values. The login page routes based on this role.

For a student, also create a row in `students` with a unique `student_id_code` and `qr_code_token`. Link the student's `user_id` to the profile and, when applicable, link `parent_id` to the parent profile.

## 5. Seed the academic structure

Create rows in `subjects` for every grade and stream. Then add `student_grades` rows for the current semester. The generated `total_score` column is calculated from the five component scores.

## 6. Storage and images (optional)

The current public pages use the repository images under `public/`. If you later add student photos or uploaded assignment files, create private Supabase Storage buckets and policies that restrict access by the linked student, teacher, parent, or administrator role.

## 7. Verify before launch

Test each role with a separate Auth account. Confirm that a student cannot read another student’s grades or exeats, a parent can see only their linked child, a warden can update exeat status, and a security user can log a gate action without gaining administrator access.
