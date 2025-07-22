import { Calendar, Clock, User, MapPin, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const appointments = [
  {
    id: 1,
    doctorName: 'Dr. Rajesh Kumar',
    specialty: 'Cardiologist',
    date: '2024-01-20',
    time: '10:00 AM',
    status: 'confirmed',
    location: 'Room 201, Heart Care Clinic',
    phone: '+91 9876543210'
  },
  {
    id: 2,
    doctorName: 'Dr. Priya Sharma',
    specialty: 'Dermatologist',
    date: '2024-01-25',
    time: '2:30 PM',
    status: 'pending',
    location: 'Room 105, Skin Care Center',
    phone: '+91 9876543211'
  },
  {
    id: 3,
    doctorName: 'Dr. Amit Patel',
    specialty: 'General Physician',
    date: '2024-01-15',
    time: '11:00 AM',
    status: 'completed',
    location: 'Room 301, General Clinic',
    phone: '+91 9876543212'
  }
];

export default function PatientAppointments() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'completed':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-foreground">My Appointments</h1>
        <Button>
          <Calendar className="w-4 h-4 mr-2" />
          Book New Appointment
        </Button>
      </div>

      <div className="grid gap-4">
        {appointments.map((appointment) => (
          <Card key={appointment.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <div>
                      <h3 className="font-semibold text-lg">{appointment.doctorName}</h3>
                      <p className="text-muted-foreground">{appointment.specialty}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {appointment.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {appointment.time}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {appointment.location}
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-4 h-4 mr-2" />
                        {appointment.phone}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end space-y-3">
                  <Badge className={getStatusColor(appointment.status)}>
                    {appointment.status}
                  </Badge>
                  <div className="flex space-x-2">
                    {appointment.status === 'confirmed' && (
                      <>
                        <Button variant="outline" size="sm">
                          Reschedule
                        </Button>
                        <Button variant="destructive" size="sm">
                          Cancel
                        </Button>
                      </>
                    )}
                    {appointment.status === 'pending' && (
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    )}
                    {appointment.status === 'completed' && (
                      <Button size="sm">
                        Book Follow-up
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}