// Fictional demo records only. Never store real patient information in this frontend.

export const ROLES = {
  ADMIN: "ADMIN",
  DOCTOR: "DOCTOR",
  RECEPTIONIST: "RECEPTIONIST",
};

export const ROLE_DASHBOARD_PATHS = {
  ADMIN: "/admin/dashboard",
  DOCTOR: "/doctor/dashboard",
  RECEPTIONIST: "/receptionist/dashboard",
};

// Demo accounts for role-based frontend login. Passwords are for demo use only.
export const DEMO_USERS = [
  {
    id: "ADM-001",
    fullName: "Aarav Sharma",
    email: "admin@mediflow.demo",
    password: "Admin@123",
    role: ROLES.ADMIN,
  },
  {
    id: "DOC-001",
    fullName: "Dr. Priya Mehta",
    email: "doctor@mediflow.demo",
    password: "Doctor@123",
    role: ROLES.DOCTOR,
  },
  {
    id: "REC-001",
    fullName: "Riya Kapoor",
    email: "reception@mediflow.demo",
    password: "Reception@123",
    role: ROLES.RECEPTIONIST,
  },
];

// Sample dashboard values used until backend APIs are connected.
export const DASHBOARD_STATS = {
  ADMIN: [
    { label: "Total Patients", value: "1,248", icon: "Users", tone: "blue" },
    { label: "Total Doctors", value: "32", icon: "Stethoscope", tone: "teal" },
    { label: "Total Appointments", value: "8,420", icon: "Calendar", tone: "indigo" },
    { label: "Today's Appointments", value: "48", icon: "CalendarCheck", tone: "green" },
    { label: "Total Revenue", value: "₹28.4L", icon: "Wallet", tone: "orange" },
    { label: "Pending Payments", value: "₹1.2L", icon: "Clock", tone: "red" },
  ],
  DOCTOR: [
    { label: "Today's Appointments", value: "12", icon: "CalendarCheck", tone: "blue" },
    { label: "Total Patients", value: "486", icon: "Users", tone: "teal" },
    { label: "Completed Appointments", value: "312", icon: "CheckCircle", tone: "green" },
    { label: "Pending Appointments", value: "18", icon: "Clock", tone: "orange" },
  ],
  RECEPTIONIST: [
    { label: "Today's Appointments", value: "48", icon: "CalendarCheck", tone: "blue" },
    { label: "Total Patients", value: "1,248", icon: "Users", tone: "teal" },
    { label: "New Registrations", value: "14", icon: "UserPlus", tone: "green" },
    { label: "Pending Appointments", value: "23", icon: "Clock", tone: "orange" },
  ],
};
