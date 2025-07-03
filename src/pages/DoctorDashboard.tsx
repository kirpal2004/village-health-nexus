
import { useState } from 'react';
import { Calendar, Users, FileText, Plus, Bell } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Appointment, Patient } from '@/types';

export default function DoctorDashboard() {
  const [todayAppointments] = useState<Appointment[]>([
    {
      id: '1',
      patientId: '1',
      patientName: 'Ramesh Patel',
      date: new Date().toISOString().split('T')[0],
      time: '10:00 AM',
      status: 'scheduled',
      symptoms: 'Fever, headache'
    },
    {
      id: '2',
      patientId: '2',
      patientName: 'Sunita Devi',
      date: new Date().toISOString().split('T')[0],
      time: '11:30 AM',
      status: 'scheduled',
      symptoms: 'Cough, chest pain'
    },
    {
      id: '3',
      patientId: '3',
      patientName: 'Mohan Kumar',
      date: new Date().toISOString().split('T')[0],
      time: '2:00 PM',
      status: 'scheduled',
      symptoms: 'Stomach pain'
    }
  ]);

  const currentDate = new Date().toLocaleDateString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Welcome Section */}
      <div className="health-card p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Welcome, Dr. Rajesh Kumar
            </h1>
            <p className="text-gray-600 text-lg">{currentDate}</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-health-blue-600">
              {todayAppointments.length}
            </p>
            <p className="text-gray-600">Today's Appointments</p>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="health-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Patients</p>
                <p className="text-3xl font-bold text-gray-800">24</p>
              </div>
              <Users className="h-8 w-8 text-health-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="health-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Pending Lab Reports</p>
                <p className="text-3xl font-bold text-orange-600">5</p>
              </div>
              <FileText className="h-8 w-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="health-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Prescriptions</p>
                <p className="text-3xl font-bold text-health-green-600">12</p>
              </div>
              <FileText className="h-8 w-8 text-health-green-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Today's Appointments */}
        <Card className="health-card">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-health-blue-500" />
              <span>Today's Appointments</span>
            </CardTitle>
            <Badge variant="secondary">{todayAppointments.length}</Badge>
          </CardHeader>
          <CardContent className="space-y-4">
            {todayAppointments.map((appointment) => (
              <div key={appointment.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-800">{appointment.patientName}</h4>
                  <p className="text-sm text-gray-600">{appointment.symptoms}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-health-blue-600">{appointment.time}</p>
                  <Badge variant="outline" className="text-xs">
                    {appointment.status}
                  </Badge>
                </div>
              </div>
            ))}
            <Button className="w-full health-button">
              <Calendar className="h-4 w-4 mr-2" />
              View All Appointments
            </Button>
          </CardContent>
        </Card>

        {/* Quick Actions & Notifications */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <Card className="health-card">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full health-button justify-start">
                <Plus className="h-4 w-4 mr-2" />
                Add New Patient Case
              </Button>
              <Button className="w-full health-button-secondary justify-start">
                <FileText className="h-4 w-4 mr-2" />
                Create Prescription
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Users className="h-4 w-4 mr-2" />
                Contact Lab Assistant
              </Button>
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card className="health-card">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center space-x-2">
                <Bell className="h-5 w-5 text-orange-500" />
                <span>Recent Notifications</span>
              </CardTitle>
              <Badge className="bg-red-500">3</Badge>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-health-blue-500">
                <p className="text-sm font-medium text-gray-800">Lab report uploaded</p>
                <p className="text-xs text-gray-600">Ramesh Patel - Blood Test Results</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border-l-4 border-health-green-500">
                <p className="text-sm font-medium text-gray-800">New case registered</p>
                <p className="text-xs text-gray-600">Sunita Devi - Online Registration</p>
              </div>
              <div className="p-3 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                <p className="text-sm font-medium text-gray-800">Medicine dispensed</p>
                <p className="text-xs text-gray-600">Mohan Kumar - Prescription #001</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
