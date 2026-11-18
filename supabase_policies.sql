-- Run this file after supabase_schema.sql in the Supabase SQL editor.
-- These policies use the role stored in public.profiles and keep the browser anon key safe.

CREATE OR REPLACE FUNCTION public.current_user_role()
RETURNS user_role
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT role FROM public.profiles WHERE id = auth.uid();
$$;

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE students ENABLE ROW LEVEL SECURITY;
ALTER TABLE subjects ENABLE ROW LEVEL SECURITY;
ALTER TABLE student_grades ENABLE ROW LEVEL SECURITY;
ALTER TABLE exeats ENABLE ROW LEVEL SECURITY;
ALTER TABLE scan_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE announcements ENABLE ROW LEVEL SECURITY;
ALTER TABLE assignments ENABLE ROW LEVEL SECURITY;
ALTER TABLE assignment_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE attendance_records ENABLE ROW LEVEL SECURITY;
ALTER TABLE school_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE meal_service_logs ENABLE ROW LEVEL SECURITY;

-- Profiles and student records.
CREATE POLICY profiles_self_or_admin_read ON profiles FOR SELECT USING (id = auth.uid() OR current_user_role() IN ('admin', 'super_admin'));
CREATE POLICY profiles_self_update ON profiles FOR UPDATE USING (id = auth.uid()) WITH CHECK (id = auth.uid());
CREATE POLICY admin_profiles_all ON profiles FOR ALL USING (current_user_role() IN ('admin', 'super_admin')) WITH CHECK (current_user_role() IN ('admin', 'super_admin'));

CREATE POLICY students_self_family_staff_read ON students FOR SELECT USING (
  user_id = auth.uid() OR parent_id = auth.uid() OR current_user_role() IN ('admin', 'super_admin', 'teacher', 'warden', 'security_guard', 'cafeteria_staff')
);
CREATE POLICY student_self_insert ON students FOR INSERT WITH CHECK (current_user_role() IN ('admin', 'super_admin'));
CREATE POLICY admin_students_write ON students FOR ALL USING (current_user_role() IN ('admin', 'super_admin')) WITH CHECK (current_user_role() IN ('admin', 'super_admin'));

CREATE POLICY subjects_authenticated_read ON subjects FOR SELECT USING (auth.uid() IS NOT NULL);
CREATE POLICY admin_subjects_write ON subjects FOR ALL USING (current_user_role() IN ('admin', 'super_admin')) WITH CHECK (current_user_role() IN ('admin', 'super_admin'));

-- Academic records.
CREATE POLICY grades_student_family_teacher_read ON student_grades FOR SELECT USING (
  EXISTS (SELECT 1 FROM students s WHERE s.id = student_grades.student_id AND (s.user_id = auth.uid() OR s.parent_id = auth.uid()))
  OR current_user_role() IN ('admin', 'super_admin', 'teacher')
);
CREATE POLICY grades_staff_write ON student_grades FOR INSERT WITH CHECK (current_user_role() IN ('admin', 'super_admin', 'teacher'));
CREATE POLICY grades_staff_update ON student_grades FOR UPDATE USING (current_user_role() IN ('admin', 'super_admin', 'teacher')) WITH CHECK (current_user_role() IN ('admin', 'super_admin', 'teacher'));

-- Exeats and gate records.
CREATE POLICY exeats_student_family_warden_read ON exeats FOR SELECT USING (
  EXISTS (SELECT 1 FROM students s WHERE s.id = exeats.student_id AND (s.user_id = auth.uid() OR s.parent_id = auth.uid()))
  OR current_user_role() IN ('admin', 'super_admin', 'warden', 'security_guard')
);
CREATE POLICY exeats_student_insert ON exeats FOR INSERT WITH CHECK (
  EXISTS (SELECT 1 FROM students s WHERE s.id = exeats.student_id AND s.user_id = auth.uid()) AND status = 'pending'
);
CREATE POLICY exeats_warden_update ON exeats FOR UPDATE USING (current_user_role() IN ('admin', 'super_admin', 'warden')) WITH CHECK (current_user_role() IN ('admin', 'super_admin', 'warden'));
CREATE POLICY scan_staff_read ON scan_logs FOR SELECT USING (current_user_role() IN ('admin', 'super_admin', 'warden', 'security_guard') OR student_id IN (SELECT id FROM students WHERE user_id = auth.uid()));
CREATE POLICY scan_staff_insert ON scan_logs FOR INSERT WITH CHECK (current_user_role() IN ('admin', 'super_admin', 'security_guard', 'warden'));

-- Teaching and communication.
CREATE POLICY announcements_authenticated_read ON announcements FOR SELECT USING (auth.uid() IS NOT NULL);
CREATE POLICY announcements_staff_write ON announcements FOR ALL USING (current_user_role() IN ('admin', 'super_admin', 'teacher')) WITH CHECK (current_user_role() IN ('admin', 'super_admin', 'teacher'));
CREATE POLICY assignments_authenticated_read ON assignments FOR SELECT USING (auth.uid() IS NOT NULL);
CREATE POLICY assignments_teacher_write ON assignments FOR ALL USING (current_user_role() IN ('admin', 'super_admin', 'teacher')) WITH CHECK (current_user_role() IN ('admin', 'super_admin', 'teacher'));
CREATE POLICY submissions_student_or_teacher_read ON assignment_submissions FOR SELECT USING (
  student_id IN (SELECT id FROM students WHERE user_id = auth.uid()) OR current_user_role() IN ('admin', 'super_admin', 'teacher')
);
CREATE POLICY submissions_student_insert ON assignment_submissions FOR INSERT WITH CHECK (student_id IN (SELECT id FROM students WHERE user_id = auth.uid()));
CREATE POLICY submissions_teacher_update ON assignment_submissions FOR UPDATE USING (current_user_role() IN ('admin', 'super_admin', 'teacher')) WITH CHECK (current_user_role() IN ('admin', 'super_admin', 'teacher'));
CREATE POLICY attendance_student_family_teacher_read ON attendance_records FOR SELECT USING (
  student_id IN (SELECT id FROM students WHERE user_id = auth.uid() OR parent_id = auth.uid()) OR current_user_role() IN ('admin', 'super_admin', 'teacher', 'warden')
);
CREATE POLICY attendance_staff_write ON attendance_records FOR ALL USING (current_user_role() IN ('admin', 'super_admin', 'teacher')) WITH CHECK (current_user_role() IN ('admin', 'super_admin', 'teacher'));
CREATE POLICY events_authenticated_read ON school_events FOR SELECT USING (auth.uid() IS NOT NULL);
CREATE POLICY events_staff_write ON school_events FOR ALL USING (current_user_role() IN ('admin', 'super_admin', 'teacher')) WITH CHECK (current_user_role() IN ('admin', 'super_admin', 'teacher'));
CREATE POLICY messages_participant_read ON messages FOR SELECT USING (sender_id = auth.uid() OR recipient_id = auth.uid() OR current_user_role() IN ('admin', 'super_admin'));
CREATE POLICY messages_authenticated_insert ON messages FOR INSERT WITH CHECK (sender_id = auth.uid());
CREATE POLICY messages_recipient_update ON messages FOR UPDATE USING (recipient_id = auth.uid()) WITH CHECK (recipient_id = auth.uid());

-- Cafeteria operations.
CREATE POLICY meal_staff_read ON meal_service_logs FOR SELECT USING (current_user_role() IN ('admin', 'super_admin', 'cafeteria_staff'));
CREATE POLICY meal_staff_write ON meal_service_logs FOR ALL USING (current_user_role() IN ('admin', 'super_admin', 'cafeteria_staff')) WITH CHECK (current_user_role() IN ('admin', 'super_admin', 'cafeteria_staff'));
