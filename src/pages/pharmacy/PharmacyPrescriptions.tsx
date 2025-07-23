import { Pill, Clock, User, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function PharmacyPrescriptions() {
  const prescriptions = [
    {
      id: '1',
      patientName: 'Ramesh Patel',
      patientAge: 45,
      doctorName: 'Dr. Rajesh Kumar',
      prescriptionDate: '2024-12-29',
      medicines: [
        { name: 'Paracetamol 500mg', quantity: '10 tablets', instructions: 'Twice daily after meals', inStock: true },
        { name: 'Cough Syrup', quantity: '100ml', instructions: '10ml three times daily', inStock: true }
      ],
      status: 'pending',
      priority: 'normal',
      totalAmount: 150
    },
    {
      id: '2',
      patientName: 'Sunita Devi',
      patientAge: 38,
      doctorName: 'Dr. Rajesh Kumar',
      prescriptionDate: '2024-12-29',
      medicines: [
        { name: 'Amoxicillin 250mg', quantity: '21 capsules', instructions: 'Three times daily for 7 days', inStock: true }
      ],
      status: 'ready',
      priority: 'urgent',
      totalAmount: 280
    },
    {
      id: '3',
      patientName: 'Priya Sharma',
      patientAge: 28,
      doctorName: 'Dr. Rajesh Kumar',
      prescriptionDate: '2024-12-28',
      medicines: [
        { name: 'Iron Tablets', quantity: '30 tablets', instructions: 'Once daily with breakfast', inStock: false },
        { name: 'Vitamin D3', quantity: '10 capsules', instructions: 'Once weekly', inStock: true }
      ],
      status: 'partial',
      priority: 'normal',
      totalAmount: 320
    }
  ];

  const pendingCount = prescriptions.filter(p => p.status === 'pending').length;
  const readyCount = prescriptions.filter(p => p.status === 'ready').length;
  const partialCount = prescriptions.filter(p => p.status === 'partial').length;

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Header */}
      <div className="health-card p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Prescriptions</h1>
        <p className="text-gray-600">Manage and process all incoming prescriptions</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="health-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Pending</p>
                <p className="text-3xl font-bold text-orange-600">{pendingCount}</p>
              </div>
              <Clock className="h-8 w-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="health-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Ready</p>
                <p className="text-3xl font-bold text-health-green-600">{readyCount}</p>
              </div>
              <Pill className="h-8 w-8 text-health-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="health-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Partial Stock</p>
                <p className="text-3xl font-bold text-yellow-600">{partialCount}</p>
              </div>
              <FileText className="h-8 w-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="health-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Today</p>
                <p className="text-3xl font-bold text-health-blue-600">{prescriptions.length}</p>
              </div>
              <User className="h-8 w-8 text-health-blue-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Prescriptions List */}
      <Card className="health-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Pill className="h-5 w-5 text-health-blue-500" />
            <span>All Prescriptions</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {prescriptions.map((prescription) => (
              <div key={prescription.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <User className="h-4 w-4 text-gray-500" />
                      <h3 className="font-semibold text-lg text-gray-800">
                        {prescription.patientName}
                      </h3>
                      <span className="text-sm text-gray-500">Age: {prescription.patientAge}</span>
                      <Badge 
                        variant={prescription.priority === 'urgent' ? 'destructive' : 'default'}
                      >
                        {prescription.priority}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">
                      Prescribed by {prescription.doctorName}
                    </p>
                    <p className="text-xs text-gray-500">
                      Date: {prescription.prescriptionDate}
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="text-right">
                      <p className="font-semibold text-health-blue-600">₹{prescription.totalAmount}</p>
                      <Badge 
                        variant={prescription.status === 'ready' ? 'secondary' : 'outline'}
                        className={
                          prescription.status === 'ready' 
                            ? 'bg-health-green-100 text-health-green-800' 
                            : prescription.status === 'partial'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-orange-100 text-orange-800'
                        }
                      >
                        {prescription.status}
                      </Badge>
                    </div>
                    <Button 
                      size="sm" 
                      className="health-button"
                      disabled={prescription.status === 'ready'}
                    >
                      {prescription.status === 'ready' ? 'Ready' : 
                       prescription.status === 'partial' ? 'Check Stock' : 'Process'}
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-700">Medicines:</h4>
                  {prescription.medicines.map((medicine, index) => (
                    <div key={index} className="bg-gray-50 p-3 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <p className="font-medium text-gray-800">{medicine.name}</p>
                            <Badge 
                              variant={medicine.inStock ? "secondary" : "destructive"}
                              className={medicine.inStock ? "bg-health-green-100 text-health-green-800" : ""}
                            >
                              {medicine.inStock ? 'In Stock' : 'Out of Stock'}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">{medicine.instructions}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-health-blue-600">{medicine.quantity}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {prescription.status === 'ready' && (
                  <div className="mt-4 p-3 bg-health-green-50 rounded-lg border-l-4 border-health-green-500">
                    <p className="text-sm text-health-green-800 font-medium">
                      Prescription ready for pickup - Patient has been notified
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}