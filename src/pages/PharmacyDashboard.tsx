
import { Pill, CheckCircle, Clock, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function PharmacyDashboard() {
  const currentDate = new Date().toLocaleDateString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const prescriptions = [
    {
      id: '1',
      patientName: 'Ramesh Patel',
      doctorName: 'Dr. Rajesh Kumar',
      medicines: [
        { name: 'Paracetamol 500mg', quantity: '10 tablets', instructions: 'Twice daily after meals' },
        { name: 'Cough Syrup', quantity: '100ml', instructions: '10ml three times daily' }
      ],
      date: '2024-12-29',
      status: 'pending'
    },
    {
      id: '2',
      patientName: 'Sunita Devi',
      doctorName: 'Dr. Rajesh Kumar',
      medicines: [
        { name: 'Amoxicillin 250mg', quantity: '21 capsules', instructions: 'Three times daily for 7 days' }
      ],
      date: '2024-12-28',
      status: 'dispensed'
    }
  ];

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Welcome Section */}
      <div className="health-card p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Pharmacy Dashboard
            </h1>
            <p className="text-gray-600 text-lg">{currentDate}</p>
          </div>
          <div className="text-center">
            <Button className="health-button">
              <Pill className="h-4 w-4 mr-2" />
              View All Prescriptions
            </Button>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="health-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Pending</p>
                <p className="text-3xl font-bold text-orange-600">8</p>
              </div>
              <Clock className="h-8 w-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="health-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Dispensed Today</p>
                <p className="text-3xl font-bold text-health-green-600">12</p>
              </div>
              <CheckCircle className="h-8 w-8 text-health-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="health-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total This Week</p>
                <p className="text-3xl font-bold text-health-blue-600">45</p>
              </div>
              <Pill className="h-8 w-8 text-health-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="health-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Low Stock Items</p>
                <p className="text-3xl font-bold text-red-600">3</p>
              </div>
              <FileText className="h-8 w-8 text-red-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Prescriptions List */}
      <Card className="health-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Pill className="h-5 w-5 text-health-blue-500" />
            <span>Recent Prescriptions</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {prescriptions.map((prescription) => (
              <div key={prescription.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">
                      {prescription.patientName}
                    </h3>
                    <p className="text-sm text-gray-600">
                      Prescribed by {prescription.doctorName} on {prescription.date}
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge 
                      variant={prescription.status === 'dispensed' ? 'secondary' : 'outline'}
                      className={
                        prescription.status === 'dispensed' 
                          ? 'bg-health-green-100 text-health-green-800' 
                          : 'bg-orange-100 text-orange-800'
                      }
                    >
                      {prescription.status}
                    </Badge>
                    {prescription.status === 'pending' && (
                      <Button size="sm" className="health-button">
                        Mark as Dispensed
                      </Button>
                    )}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-700">Medicines:</h4>
                  {prescription.medicines.map((medicine, index) => (
                    <div key={index} className="bg-gray-50 p-3 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-800">{medicine.name}</p>
                          <p className="text-sm text-gray-600">{medicine.instructions}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-health-blue-600">{medicine.quantity}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="health-card">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full health-button justify-start">
              <Pill className="h-4 w-4 mr-2" />
              View All Prescriptions
            </Button>
            <Button className="w-full health-button-secondary justify-start">
              <CheckCircle className="h-4 w-4 mr-2" />
              Dispensed Medicines
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <FileText className="h-4 w-4 mr-2" />
              Stock Management
            </Button>
          </CardContent>
        </Card>

        <Card className="health-card">
          <CardHeader>
            <CardTitle>Low Stock Alert</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
              <p className="font-medium text-red-800">Paracetamol 500mg</p>
              <p className="text-sm text-red-600">Only 15 tablets remaining</p>
            </div>
            <div className="p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
              <p className="font-medium text-red-800">Cough Syrup</p>
              <p className="text-sm text-red-600">Only 2 bottles remaining</p>
            </div>
            <div className="p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
              <p className="font-medium text-red-800">Amoxicillin 250mg</p>
              <p className="text-sm text-red-600">Only 8 capsules remaining</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
