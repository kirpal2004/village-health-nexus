
import { NavLink } from 'react-router-dom';
import { Calendar, Users, FileText, Pill, Settings, Home } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/hooks/useAuth';

const navigation = {
  doctor: [
    { name: 'Dashboard', href: '/doctor', icon: Home },
    { name: 'Appointments', href: '/doctor/appointments', icon: Calendar },
    { name: 'Patients', href: '/doctor/patients', icon: Users },
    { name: 'Lab Reports', href: '/doctor/lab-reports', icon: FileText },
    { name: 'Prescriptions', href: '/doctor/prescriptions', icon: Pill },
    { name: 'Settings', href: '/doctor/settings', icon: Settings },
  ],
  lab: [
    { name: 'Dashboard', href: '/lab', icon: Home },
    { name: 'Assigned Tests', href: '/lab/tests', icon: FileText },
    { name: 'Upload Reports', href: '/lab/upload', icon: FileText },
  ],
  pharmacy: [
    { name: 'Dashboard', href: '/pharmacy', icon: Home },
    { name: 'Prescriptions', href: '/pharmacy/prescriptions', icon: Pill },
    { name: 'Dispensed', href: '/pharmacy/dispensed', icon: FileText },
  ],
  patient: [
    { name: 'Dashboard', href: '/patient', icon: Home },
    { name: 'Appointments', href: '/patient/appointments', icon: Calendar },
    { name: 'Prescriptions', href: '/patient/prescriptions', icon: Pill },
    { name: 'Lab Reports', href: '/patient/lab-reports', icon: FileText },
  ]
};

export function Sidebar() {
  const { user } = useAuth();
  
  if (!user) return null;
  
  const userNavigation = navigation[user.role] || [];

  return (
    <div className="w-64 bg-white/80 backdrop-blur-sm border-r border-white/20 min-h-screen">
      <nav className="p-4 space-y-2">
        {userNavigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) =>
              cn(
                'flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200',
                isActive
                  ? 'bg-gradient-to-r from-health-blue-500 to-health-blue-600 text-white shadow-lg'
                  : 'text-gray-600 hover:bg-health-blue-50 hover:text-health-blue-700'
              )
            }
          >
            <item.icon className="w-5 h-5" />
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
