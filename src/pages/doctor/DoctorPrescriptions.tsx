import { Pill, User, Calendar, Clock, Printer } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const prescriptions = [
  {
    id: 1,
    patient: 'John Doe',
    medications: [
      { name: 'Lisinopril', dosage: '10mg', frequency: 'Once daily' },
      { name: 'Metformin', dosage: '500mg', frequency: 'Twice daily' }
    ],
    date: '2024-01-15',
    status: 'active',
    duration: '30 days',
    pharmacy: 'City Pharmacy'
  },
  {
    id: 2,
    patient: 'Jane Smith',
    medications: [
      { name: 'Insulin', dosage: '10 units', frequency: 'Before meals' },
      { name: 'Metformin', dosage: '1000mg', frequency: 'Twice daily' }
    ],
    date: '2024-01-14',
    status: 'dispensed',
    duration: '30 days',
    pharmacy: 'Health Pharmacy'
  },
  {
    id: 3,
    patient: 'Mike Johnson',
    medications: [
      { name: 'Albuterol', dosage: '100mcg', frequency: 'As needed' }
    ],
    date: '2024-01-12',
    status: 'pending',
    duration: '15 days',
    pharmacy: 'Community Pharmacy'
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'active':
      return 'default';
    case 'dispensed':
      return 'secondary';
    case 'pending':
      return 'destructive';
    default:
      return 'outline';
  }
};

export default function DoctorPrescriptions() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-foreground">Prescriptions</h1>
        <Button>
          <Pill className="w-4 h-4 mr-2" />
          New Prescription
        </Button>
      </div>

      <div className="grid gap-4">
        {prescriptions.map((prescription) => (
          <Card key={prescription.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Pill className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{prescription.patient}</h3>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {prescription.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {prescription.duration}
                        </div>
                        <div>
                          Pharmacy: {prescription.pharmacy}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge variant={getStatusColor(prescription.status)}>
                      {prescription.status}
                    </Badge>
                    <Button variant="outline" size="sm">
                      <Printer className="w-4 h-4 mr-1" />
                      Print
                    </Button>
                  </div>
                </div>

                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-medium mb-3">Medications</h4>
                  <div className="space-y-2">
                    {prescription.medications.map((med, index) => (
                      <div key={index} className="flex justify-between items-center p-2 bg-background rounded">
                        <div>
                          <span className="font-medium">{med.name}</span>
                          <span className="text-muted-foreground ml-2">{med.dosage}</span>
                        </div>
                        <Badge variant="outline">{med.frequency}</Badge>
                      </div>
                    ))}
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