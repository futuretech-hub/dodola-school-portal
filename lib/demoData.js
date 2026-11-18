export const student = {
  name: 'Samuel Alemu',
  initials: 'SA',
  grade: 'Grade 11',
  section: 'Section A',
  stream: 'Natural Science',
  studentId: 'DIB-2026-0901',
  academicYear: '2026–2027',
  dorm: 'Block B · Room 204',
  attendanceRate: 96,
  average: 91.5,
};

export const classes = [
  { day: 'Monday', time: '08:00–09:30', subject: 'Mathematics', teacher: 'Mr. Abebe K.', room: 'Room 3' },
  { day: 'Monday', time: '09:45–11:15', subject: 'Physics', teacher: 'Ms. Bethlehem T.', room: 'Physics Lab 2' },
  { day: 'Tuesday', time: '08:00–09:30', subject: 'English Language', teacher: 'Mr. David M.', room: 'Room 5' },
  { day: 'Tuesday', time: '14:00–15:30', subject: 'Chemistry', teacher: 'Dr. Solomon G.', room: 'Chemistry Lab' },
  { day: 'Wednesday', time: '08:00–09:30', subject: 'Biology', teacher: 'Ms. Hana L.', room: 'Biology Lab' },
  { day: 'Thursday', time: '09:45–11:15', subject: 'Civics', teacher: 'Mr. Tesfaye A.', room: 'Room 8' },
  { day: 'Friday', time: '08:00–09:30', subject: 'Amharic', teacher: 'Ms. Selam B.', room: 'Room 6' },
];

export const assignments = [
  { id: 1, title: 'Electromagnetism lab report', subject: 'Physics', teacher: 'Ms. Bethlehem T.', due: 'Today, 23:59', status: 'Due soon' },
  { id: 2, title: 'Quadratic functions problem set', subject: 'Mathematics', teacher: 'Mr. Abebe K.', due: 'Nov 8, 2026', status: 'Pending' },
  { id: 3, title: 'Persuasive essay draft', subject: 'English', teacher: 'Mr. David M.', due: 'Nov 12, 2026', status: 'Submitted' },
  { id: 4, title: 'Acids and bases worksheet', subject: 'Chemistry', teacher: 'Dr. Solomon G.', due: 'Nov 15, 2026', status: 'Pending' },
];

export const subjects = [
  { name: 'Mathematics', teacher: 'Mr. Abebe K.', room: 'Room 3', progress: 94, color: 'emerald' },
  { name: 'Physics', teacher: 'Ms. Bethlehem T.', room: 'Physics Lab 2', progress: 91, color: 'blue' },
  { name: 'Chemistry', teacher: 'Dr. Solomon G.', room: 'Chemistry Lab', progress: 93, color: 'teal' },
  { name: 'English Language', teacher: 'Mr. David M.', room: 'Room 5', progress: 88, color: 'indigo' },
  { name: 'Biology', teacher: 'Ms. Hana L.', room: 'Biology Lab', progress: 90, color: 'lime' },
  { name: 'Civics', teacher: 'Mr. Tesfaye A.', room: 'Room 8', progress: 87, color: 'amber' },
];

export const grades = [
  { subject: 'Mathematics', test1: 9, test2: 9.5, assignment: 9.2, midterm: 18, final: 47, total: 92.7 },
  { subject: 'Physics', test1: 9, test2: 8.8, assignment: 9.5, midterm: 18, final: 45, total: 90.3 },
  { subject: 'Chemistry', test1: 9.3, test2: 9.1, assignment: 9.4, midterm: 18.5, final: 46, total: 92.3 },
  { subject: 'English Language', test1: 8.7, test2: 8.5, assignment: 9, midterm: 17, final: 44, total: 87.2 },
];

export const announcements = [
  { title: 'Mid-term examination schedule released', date: 'Nov 4, 2026', category: 'Exam information', priority: 'Important', body: 'Examinations begin on November 18. Review the schedule and confirm your room with your class teacher.' },
  { title: 'Weekend boarding leave policy reminder', date: 'Nov 2, 2026', category: 'Boarding notice', priority: 'Information', body: 'Leave requests for the upcoming weekend must be logged by Thursday at 17:00.' },
  { title: 'Science club applications are open', date: 'Oct 30, 2026', category: 'Student life', priority: 'Information', body: 'Students can apply for robotics, science fair, and peer mentoring activities through the activities office.' },
];

export const leavePasses = [
  { type: 'Weekend home leave', date: 'Nov 14–Nov 16', status: 'Approved', passCode: 'PASS-8921', reason: 'Family visit' },
  { type: 'Town medical exit', date: 'Nov 9, 2026', status: 'Pending', passCode: 'REQ-0402', reason: 'Clinic appointment' },
];

export const events = [
  { date: 'Nov 12', title: 'Science and Innovation Fair', location: 'Main Hall', type: 'Academic' },
  { date: 'Nov 16', title: 'Inter-house athletics', location: 'Sports field', type: 'Community' },
  { date: 'Nov 21', title: 'Parent and guardian forum', location: 'Assembly Hall', type: 'Family' },
];

export const attendance = [
  { month: 'September', present: 22, absent: 1, late: 0 },
  { month: 'October', present: 23, absent: 1, late: 1 },
  { month: 'November', present: 8, absent: 0, late: 1 },
];

export const roleLabels = {
  super_admin: 'Administrator',
  admin: 'Administrator',
  teacher: 'Teacher',
  warden: 'Warden',
  security_guard: 'Security staff',
  student: 'Student',
  parent: 'Parent / guardian',
  cafeteria_staff: 'Cafeteria staff',
};
