import { CheckCircle, User, Calendar, Pill, Receipt } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function PharmacyDispensed() {
  const dispensedPrescriptions = [
    {
      id: '1',
      patientName: 'Mohan Kumar',
      patientAge: 32,
      doctorName: 'Dr. Rajesh Kumar',
      dispensedDate: '2024-12-29',
      dispensedTime: '10:30 AM',
      totalAmount: 240,
      paymentMethod: 'Cash',
      medicines: [
        { name: 'Paracetamol 500mg', quantity: '10 tablets', dispensed: '10 tablets' },
        { name: 'Antacid Syrup', quantity: '200ml', dispensed: '200ml' }
      ],
      dispensedBy: 'Pharmacist Amit'
    },
    {
      id: '2',
      patientName: 'Kavita Devi',
      patientAge: 42,
      doctorName: 'Dr. Rajesh Kumar',
      dispensedDate: '2024-12-29',
      dispensedTime: '09:15 AM',
      totalAmount: 180,
      paymentMethod: 'UPI',
      medicines: [
        { name: 'Cough Syrup', quantity: '100ml', dispensed: '100ml' }
      ],
      dispensedBy: 'Pharmacist Amit'
    },
    {
      id: '3',
      patientName: 'Suresh Patel',
      patientAge: 55,
      doctorName: 'Dr. Rajesh Kumar',
      dispensedDate: '2024-12-28',
      dispensedTime: '04:45 PM',
      totalAmount: 450,
      paymentMethod: 'Card',
      medicines: [
        { name: 'Diabetes Medicine', quantity: '30 tablets', dispensed: '30 tablets' },
        { name: 'Blood Pressure Medicine', quantity: '30 tablets', dispensed: '30 tablets' }
      ],
      dispensedBy: 'Pharmacist Amit'
    },
    {
      id: '4',
      patientName: 'Anjali Sharma',
      patientAge: 26,
      doctorName: 'Dr. Rajesh Kumar',
      dispensedDate: '2024-12-28',
      dispensedTime: '02:20 PM',
      totalAmount: 95,
      paymentMethod: 'Cash',
      medicines: [
        { name: 'Vitamin B12', quantity: '10 tablets', dispensed: '10 tablets' }
      ],
      dispensedBy: 'Pharmacist Amit'
    }
  ];

  const todayDispensed = dispensedPrescriptions.filter(p => p.dispensedDate === '2024-12-29');
  const totalRevenue = dispensedPrescriptions.reduce((sum, p) => sum + p.totalAmount, 0);
  const todayRevenue = todayDispensed.reduce((sum, p) => sum + p.totalAmount, 0);

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Header */}
      <div className="health-card p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Dispensed Medicines</h1>
        <p className="text-gray-600">View all dispensed prescriptions and transaction history</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="health-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Today's Dispensed</p>
                <p className="text-3xl font-bold text-health-green-600">{todayDispensed.length}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-health-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="health-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Dispensed</p>
                <p className="text-3xl font-bold text-health-blue-600">{dispensedPrescriptions.length}</p>
              </div>
              <Pill className="h-8 w-8 text-health-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="health-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Today's Revenue</p>
                <p className="text-3xl font-bold text-green-600">₹{todayRevenue}</p>
              </div>
              <Receipt className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="health-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Revenue</p>
                <p className="text-3xl font-bold text-purple-600">₹{totalRevenue}</p>
              </div>
              <Calendar className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="health-card">
        <CardContent className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date Range</label>
              <select className="w-full p-2 border border-gray-300 rounded-lg">
                <option>Today</option>
                <option>Yesterday</option>
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Custom Range</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Patient Name</label>
              <input 
                type="text" 
                placeholder="Search patient..." 
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Payment Method</label>
              <select className="w-full p-2 border border-gray-300 rounded-lg">
                <option>All Methods</option>
                <option>Cash</option>
                <option>Card</option>
                <option>UPI</option>
              </select>
            </div>
            <div className="flex items-end">
              <Button className="health-button w-full">Filter Results</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Dispensed List */}
      <Card className="health-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5 text-health-green-500" />
            <span>Dispensed Prescriptions</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {dispensedPrescriptions.map((prescription) => (
              <div key={prescription.id} className="border border-gray-200 rounded-lg p-4 bg-gradient-to-r from-health-green-50 to-transparent">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <User className="h-4 w-4 text-gray-500" />
                      <h3 className="font-semibold text-lg text-gray-800">
                        {prescription.patientName}
                      </h3>
                      <span className="text-sm text-gray-500">Age: {prescription.patientAge}</span>
                      <Badge className="bg-health-green-100 text-health-green-800">
                        Dispensed
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">
                      Prescribed by {prescription.doctorName}
                    </p>
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <span>Dispensed: {prescription.dispensedDate} at {prescription.dispensedTime}</span>
                      <span>By: {prescription.dispensedBy}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="text-right">
                      <p className="font-semibold text-lg text-green-600">₹{prescription.totalAmount}</p>
                      <Badge variant="outline" className="text-xs">
                        {prescription.paymentMethod}
                      </Badge>
                    </div>
                    <Button size="sm" variant="outline">
                      Print Receipt
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-700">Dispensed Medicines:</h4>
                  {prescription.medicines.map((medicine, index) => (
                    <div key={index} className="bg-white p-3 rounded-lg border">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <p className="font-medium text-gray-800">{medicine.name}</p>
                          <p className="text-sm text-gray-600">
                            Prescribed: {medicine.quantity} | Dispensed: {medicine.dispensed}
                          </p>
                        </div>
                        <CheckCircle className="h-4 w-4 text-health-green-500" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}