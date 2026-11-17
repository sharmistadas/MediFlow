import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { ROLES } from "../data/dummyData";

import AdminLayout from "../layouts/AdminLayout";
import DoctorLayout from "../layouts/DoctorLayout";
import ReceptionistLayout from "../layouts/ReceptionistLayout";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import NotFound from "../pages/NotFound";

import AdminDashboard from "../pages/admin/Dashboard";
import AdminPatients from "../pages/admin/Patients";
import AdminDoctors from "../pages/admin/Doctors";
import AdminAppointments from "../pages/admin/Appointments";
import AdminPrescriptions from "../pages/admin/Prescriptions";
import AdminBilling from "../pages/admin/Billing";
import AdminDepartments from "../pages/admin/Departments";
import AdminStaff from "../pages/admin/Staff";
import AdminReports from "../pages/admin/Reports";
import AdminSettings from "../pages/admin/Settings";

import DoctorDashboard from "../pages/doctor/Dashboard";
import DoctorMyAppointments from "../pages/doctor/MyAppointments";
import DoctorPatientList from "../pages/doctor/PatientList";
import DoctorPatientDetails from "../pages/doctor/PatientDetails";
import DoctorConsultation from "../pages/doctor/Consultation";
import DoctorPrescription from "../pages/doctor/Prescription";
import DoctorMedicalHistory from "../pages/doctor/MedicalHistory";
import DoctorProfile from "../pages/doctor/Profile";

import ReceptionistDashboard from "../pages/receptionist/Dashboard";
import ReceptionistRegisterPatient from "../pages/receptionist/RegisterPatient";
import ReceptionistPatientList from "../pages/receptionist/PatientList";
import ReceptionistBookAppointment from "../pages/receptionist/BookAppointment";
import ReceptionistAppointmentList from "../pages/receptionist/AppointmentList";
import ReceptionistBilling from "../pages/receptionist/Billing";
import ReceptionistPaymentHistory from "../pages/receptionist/PaymentHistory";
import ReceptionistProfile from "../pages/receptionist/Profile";

// Sends unauthenticated users to login and wrong-role users to their own dashboard.
function ProtectedRoute({ allowedRoles }) {
  const { isAuthenticated, role, dashboardPath } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  if (allowedRoles && !allowedRoles.includes(role)) {
    return <Navigate to={dashboardPath} replace />;
  }

  return <Outlet />;
}

// Logged-in users should not see the login/register screens again.
function PublicOnlyRoute() {
  const { isAuthenticated, dashboardPath } = useAuth();
  return isAuthenticated ? <Navigate to={dashboardPath} replace /> : <Outlet />;
}

function RootRedirect() {
  const { isAuthenticated, dashboardPath } = useAuth();
  return <Navigate to={isAuthenticated ? dashboardPath : "/login"} replace />;
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<RootRedirect />} />

      <Route element={<PublicOnlyRoute />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* ADMIN ROUTES */}
      <Route element={<ProtectedRoute allowedRoles={[ROLES.ADMIN]} />}>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="patients" element={<AdminPatients />} />
          <Route path="doctors" element={<AdminDoctors />} />
          <Route path="appointments" element={<AdminAppointments />} />
          <Route path="prescriptions" element={<AdminPrescriptions />} />
          <Route path="billing" element={<AdminBilling />} />
          <Route path="departments" element={<AdminDepartments />} />
          <Route path="staff" element={<AdminStaff />} />
          <Route path="reports" element={<AdminReports />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>
      </Route>

      {/* DOCTOR ROUTES */}
      <Route element={<ProtectedRoute allowedRoles={[ROLES.DOCTOR]} />}>
        <Route path="/doctor" element={<DoctorLayout />}>
          <Route index element={<Navigate to="/doctor/dashboard" replace />} />
          <Route path="dashboard" element={<DoctorDashboard />} />
          <Route path="appointments" element={<DoctorMyAppointments />} />
          <Route path="patients" element={<DoctorPatientList />} />
          <Route path="patients/:patientId" element={<DoctorPatientDetails />} />
          <Route path="consultation" element={<DoctorConsultation />} />
          <Route path="prescriptions" element={<DoctorPrescription />} />
          <Route path="medical-history" element={<DoctorMedicalHistory />} />
          <Route path="profile" element={<DoctorProfile />} />
        </Route>
      </Route>

      {/* RECEPTIONIST ROUTES */}
      <Route element={<ProtectedRoute allowedRoles={[ROLES.RECEPTIONIST]} />}>
        <Route path="/receptionist" element={<ReceptionistLayout />}>
          <Route index element={<Navigate to="/receptionist/dashboard" replace />} />
          <Route path="dashboard" element={<ReceptionistDashboard />} />
          <Route path="register-patient" element={<ReceptionistRegisterPatient />} />
          <Route path="patients" element={<ReceptionistPatientList />} />
          <Route path="book-appointment" element={<ReceptionistBookAppointment />} />
          <Route path="appointments" element={<ReceptionistAppointmentList />} />
          <Route path="billing" element={<ReceptionistBilling />} />
          <Route path="payment-history" element={<ReceptionistPaymentHistory />} />
          <Route path="profile" element={<ReceptionistProfile />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
