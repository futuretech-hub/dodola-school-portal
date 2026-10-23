-- 1. EXTENDED ENUMS
CREATE TYPE user_role AS ENUM ('super_admin', 'teacher', 'warden', 'security_guard', 'student', 'parent', 'cafeteria_staff');
CREATE TYPE academic_stream AS ENUM ('Natural Science', 'Social Science', 'General');
CREATE TYPE exeat_status AS ENUM ('pending', 'approved', 'rejected', 'checked_out', 'checked_in', 'expired');
CREATE TYPE scan_type AS ENUM ('gate_checkout', 'gate_checkin', 'meal_breakfast', 'meal_lunch', 'meal_dinner', 'dorm_rollcall', 'class_attendance');

-- 2. PROFILES
CREATE TABLE profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  full_name TEXT NOT NULL,
  phone_number TEXT,
  role user_role NOT NULL DEFAULT 'student',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. STUDENTS
CREATE TABLE students (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  student_id_code TEXT UNIQUE NOT NULL, -- e.g., "DIB-2026-0901"
  grade_level INT CHECK (grade_level BETWEEN 9 AND 12) NOT NULL,
  section TEXT NOT NULL, -- "A", "B"
  stream academic_stream DEFAULT 'General',
  dorm_block TEXT,
  dorm_room TEXT,
  bed_number TEXT,
  photo_url TEXT,
  qr_code_token TEXT UNIQUE NOT NULL,
  parent_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. SUBJECTS & COURSES
CREATE TABLE subjects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  subject_name TEXT NOT NULL, -- e.g., "Physics", "Amharic", "Mathematics"
  grade_level INT NOT NULL,
  stream academic_stream DEFAULT 'General'
);

-- 5. ACADEMIC MARKS / GRADEBOOK
CREATE TABLE student_grades (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID REFERENCES students(id) ON DELETE CASCADE NOT NULL,
  subject_id UUID REFERENCES subjects(id) ON DELETE CASCADE NOT NULL,
  academic_year INT NOT NULL DEFAULT 2026,
  semester INT CHECK (semester IN (1, 2)) NOT NULL,
  test1_score NUMERIC(5,2) DEFAULT 0, -- out of 10
  test2_score NUMERIC(5,2) DEFAULT 0, -- out of 10
  assignment_score NUMERIC(5,2) DEFAULT 0, -- out of 10
  midterm_score NUMERIC(5,2) DEFAULT 0, -- out of 20
  final_exam_score NUMERIC(5,2) DEFAULT 0, -- out of 50
  total_score NUMERIC(5,2) GENERATED ALWAYS AS (test1_score + test2_score + assignment_score + midterm_score + final_exam_score) STORED,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. EXEAT / LEAVE MANAGEMENT
CREATE TABLE exeats (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID REFERENCES students(id) ON DELETE CASCADE NOT NULL,
  leave_type TEXT NOT NULL, -- 'Weekend Pass', 'Medical Leave', 'Family Emergency'
  reason TEXT NOT NULL,
  departure_date TIMESTAMPTZ NOT NULL,
  expected_return_date TIMESTAMPTZ NOT NULL,
  status exeat_status DEFAULT 'pending',
  approved_by UUID REFERENCES profiles(id),
  actual_checkout_at TIMESTAMPTZ,
  actual_checkin_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. ATTENDANCE & GATE LOGS
CREATE TABLE scan_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID REFERENCES students(id) ON DELETE CASCADE NOT NULL,
  scanned_by UUID REFERENCES profiles(id) ON DELETE SET NULL NOT NULL,
  scan_type scan_type NOT NULL,
  location TEXT,
  is_valid BOOLEAN DEFAULT TRUE,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- INDEXES
CREATE INDEX idx_students_qr ON students(qr_code_token);
CREATE INDEX idx_grades_student ON student_grades(student_id);
