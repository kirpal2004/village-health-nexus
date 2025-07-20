import { Calendar, Clock, User, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const appointments = [
  {
    id: 1,
    patient: 'John Doe',
    time: '09:00 AM',
    date: 'Today',
    type: 'Consultation',
    status: 'confirmed',
    phone: '+1234567890'
  },
  {
    id: 2,
    patient: 'Jane Smith',
    time: '10:30 AM',
    date: 'Today',
    type: 'Follow-up',
    status: 'pending',
    phone: '+1234567891'
  },
  {
    id: 3,
    patient: 'Mike Johnson',
    time: '02:00 PM',
    date: 'Tomorrow',
    type: 'Check-up',
    status: 'confirmed',
    phone: '+1234567892'
  }
];

export default function DoctorAppointments() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-foreground">Appointments</h1>
        <Button>
          <Calendar className="w-4 h-4 mr-2" />
          Schedule New
        </Button>
      </div>

      <div className="grid gap-4">
        {appointments.map((appointment) => (
          <Card key={appointment.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{appointment.patient}</h3>
                    <div className="flex items-center space-x-4 text-muted-foreground">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {appointment.time}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {appointment.date}
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-4 h-4 mr-1" />
                        {appointment.phone}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge variant={appointment.status === 'confirmed' ? 'default' : 'secondary'}>
                    {appointment.status}
                  </Badge>
                  <Badge variant="outline">{appointment.type}</Badge>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}