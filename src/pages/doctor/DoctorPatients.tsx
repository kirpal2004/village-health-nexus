import { Search, User, Phone, Mail, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const patients = [
  {
    id: 1,
    name: 'John Doe',
    age: 35,
    gender: 'Male',
    phone: '+1234567890',
    email: 'john.doe@email.com',
    address: '123 Main St, City',
    lastVisit: '2024-01-15',
    condition: 'Hypertension'
  },
  {
    id: 2,
    name: 'Jane Smith',
    age: 28,
    gender: 'Female',
    phone: '+1234567891',
    email: 'jane.smith@email.com',
    address: '456 Oak Ave, City',
    lastVisit: '2024-01-10',
    condition: 'Diabetes'
  },
  {
    id: 3,
    name: 'Mike Johnson',
    age: 42,
    gender: 'Male',
    phone: '+1234567892',
    email: 'mike.johnson@email.com',
    address: '789 Pine Rd, City',
    lastVisit: '2024-01-08',
    condition: 'Asthma'
  }
];

export default function DoctorPatients() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-foreground">Patients</h1>
        <Button>
          <User className="w-4 h-4 mr-2" />
          Add New Patient
        </Button>
      </div>

      <div className="flex space-x-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Search patients..." className="pl-10" />
        </div>
      </div>

      <div className="grid gap-4">
        {patients.map((patient) => (
          <Card key={patient.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <div>
                      <h3 className="font-semibold text-lg">{patient.name}</h3>
                      <p className="text-muted-foreground">{patient.age} years • {patient.gender}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Phone className="w-4 h-4 mr-2" />
                        {patient.phone}
                      </div>
                      <div className="flex items-center">
                        <Mail className="w-4 h-4 mr-2" />
                        {patient.email}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {patient.address}
                      </div>
                      <div>
                        Last visit: {patient.lastVisit}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end space-y-3">
                  <Badge variant="outline">{patient.condition}</Badge>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      View Records
                    </Button>
                    <Button size="sm">
                      Schedule Appointment
                    </Button>
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