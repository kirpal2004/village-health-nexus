import { Pill, Clock, User, Calendar, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const prescriptions = [
  {
    id: 1,
    medicine: 'Paracetamol 500mg',
    dosage: 'Twice daily after meals',
    frequency: '2 times/day',
    duration: '7 days',
    remaining: 3,
    total: 7,
    doctor: 'Dr. Rajesh Kumar',
    prescribedDate: '2024-01-18',
    status: 'active',
    instructions: 'Take with food to avoid stomach upset'
  },
  {
    id: 2,
    medicine: 'Cough Syrup',
    dosage: '10ml three times daily',
    frequency: '3 times/day',
    duration: '5 days',
    remaining: 1,
    total: 5,
    doctor: 'Dr. Priya Sharma',
    prescribedDate: '2024-01-15',
    status: 'active',
    instructions: 'Take before meals'
  },
  {
    id: 3,
    medicine: 'Vitamin D3',
    dosage: 'Once daily',
    frequency: '1 time/day',
    duration: '30 days',
    remaining: 0,
    total: 30,
    doctor: 'Dr. Amit Patel',
    prescribedDate: '2024-01-01',
    status: 'completed',
    instructions: 'Take with breakfast'
  }
];

export default function PatientPrescriptions() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'completed':
        return 'bg-gray-100 text-gray-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getProgressPercentage = (remaining: number, total: number) => {
    return ((total - remaining) / total) * 100;
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-foreground">My Prescriptions</h1>
        <Button variant="outline">
          <Pill className="w-4 h-4 mr-2" />
          Medicine Reminder Settings
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Prescriptions</CardTitle>
            <Pill className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Currently taking</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <CheckCircle className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Next Dose</CardTitle>
            <Clock className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2:00 PM</div>
            <p className="text-xs text-muted-foreground">Paracetamol</p>
          </CardContent>
        </Card>
      </div>

      {/* Prescriptions List */}
      <div className="grid gap-4">
        {prescriptions.map((prescription) => (
          <Card key={prescription.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Pill className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{prescription.medicine}</h3>
                      <p className="text-muted-foreground">{prescription.dosage}</p>
                    </div>
                  </div>
                  <Badge className={getStatusColor(prescription.status)}>
                    {prescription.status}
                  </Badge>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Frequency:</span>
                    <p className="text-muted-foreground">{prescription.frequency}</p>
                  </div>
                  <div>
                    <span className="font-medium">Duration:</span>
                    <p className="text-muted-foreground">{prescription.duration}</p>
                  </div>
                  <div>
                    <span className="font-medium">Prescribed by:</span>
                    <p className="text-muted-foreground">{prescription.doctor}</p>
                  </div>
                  <div>
                    <span className="font-medium">Date:</span>
                    <p className="text-muted-foreground">{prescription.prescribedDate}</p>
                  </div>
                </div>

                {prescription.status === 'active' && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Progress</span>
                      <span>{prescription.total - prescription.remaining}/{prescription.total} days</span>
                    </div>
                    <Progress value={getProgressPercentage(prescription.remaining, prescription.total)} />
                    <p className="text-sm text-muted-foreground">
                      {prescription.remaining} days remaining
                    </p>
                  </div>
                )}

                <div className="bg-muted/50 p-3 rounded-lg">
                  <span className="font-medium text-sm">Instructions: </span>
                  <span className="text-sm text-muted-foreground">{prescription.instructions}</span>
                </div>

                {prescription.status === 'active' && (
                  <div className="flex space-x-2">
                    <Button size="sm">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Mark as Taken
                    </Button>
                    <Button variant="outline" size="sm">
                      Set Reminder
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}