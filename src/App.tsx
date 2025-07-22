
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "@/hooks/useAuth";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import Login from "./pages/Login";
import DoctorDashboard from "./pages/DoctorDashboard";
import DoctorAppointments from "./pages/doctor/DoctorAppointments";
import DoctorPatients from "./pages/doctor/DoctorPatients";
import DoctorLabReports from "./pages/doctor/DoctorLabReports";
import DoctorPrescriptions from "./pages/doctor/DoctorPrescriptions";
import DoctorSettings from "./pages/doctor/DoctorSettings";
import PatientDashboard from "./pages/PatientDashboard";
import PatientAppointments from "./pages/patient/PatientAppointments";
import PatientMedicalRecords from "./pages/patient/PatientMedicalRecords";
import PatientPrescriptions from "./pages/patient/PatientPrescriptions";
import PatientProfile from "./pages/patient/PatientProfile";
import LabDashboard from "./pages/LabDashboard";
import PharmacyDashboard from "./pages/PharmacyDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function AppContent() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-health-blue-500"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-health-blue-50 via-white to-health-green-50">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Navigate to={`/${user.role}`} replace />} />
            <Route path="/doctor" element={user.role === 'doctor' ? <DoctorDashboard /> : <Navigate to={`/${user.role}`} />} />
            <Route path="/doctor/appointments" element={user.role === 'doctor' ? <DoctorAppointments /> : <Navigate to={`/${user.role}`} />} />
            <Route path="/doctor/patients" element={user.role === 'doctor' ? <DoctorPatients /> : <Navigate to={`/${user.role}`} />} />
            <Route path="/doctor/lab-reports" element={user.role === 'doctor' ? <DoctorLabReports /> : <Navigate to={`/${user.role}`} />} />
            <Route path="/doctor/prescriptions" element={user.role === 'doctor' ? <DoctorPrescriptions /> : <Navigate to={`/${user.role}`} />} />
            <Route path="/doctor/settings" element={user.role === 'doctor' ? <DoctorSettings /> : <Navigate to={`/${user.role}`} />} />
            <Route path="/patient" element={user.role === 'patient' ? <PatientDashboard /> : <Navigate to={`/${user.role}`} />} />
            <Route path="/patient/appointments" element={user.role === 'patient' ? <PatientAppointments /> : <Navigate to={`/${user.role}`} />} />
            <Route path="/patient/medical-records" element={user.role === 'patient' ? <PatientMedicalRecords /> : <Navigate to={`/${user.role}`} />} />
            <Route path="/patient/prescriptions" element={user.role === 'patient' ? <PatientPrescriptions /> : <Navigate to={`/${user.role}`} />} />
            <Route path="/patient/profile" element={user.role === 'patient' ? <PatientProfile /> : <Navigate to={`/${user.role}`} />} />
            <Route path="/lab" element={user.role === 'lab' ? <LabDashboard /> : <Navigate to={`/${user.role}`} />} />
            <Route path="/pharmacy" element={user.role === 'pharmacy' ? <PharmacyDashboard /> : <Navigate to={`/${user.role}`} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
