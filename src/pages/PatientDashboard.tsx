
import { Calendar, FileText, Clock, CreditCard } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function PatientDashboard() {
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
              Welcome, Ramesh Patel
            </h1>
            <p className="text-gray-600 text-lg">{currentDate}</p>
          </div>
          <div className="text-center">
            <Button className="health-button">
              <Calendar className="h-4 w-4 mr-2" />
              Book Appointment
            </Button>
          </div>
        </div>
      </div>

      {/* Quick Registration */}
      <Card className="health-card">
        <CardHeader>
          <CardTitle className="text-center text-health-blue-700">
            Quick Patient Registration
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Symptoms
              </label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-health-blue-500 focus:border-transparent"
                rows={3}
                placeholder="Describe your symptoms..."
              />
            </div>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Date
                </label>
                <input
                  type="date"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-health-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Case Fee: ₹100
                </label>
                <Button className="w-full health-button">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Pay & Register
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="health-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Next Appointment</CardTitle>
            <Calendar className="h-4 w-4 text-health-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Tomorrow</div>
            <p className="text-xs text-muted-foreground">10:00 AM with Dr. Rajesh</p>
            <Badge className="mt-2 bg-health-green-100 text-health-green-800">
              Confirmed
            </Badge>
          </CardContent>
        </Card>

        <Card className="health-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Lab Reports</CardTitle>
            <FileText className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Available to view</p>
            <Badge className="mt-2 bg-orange-100 text-orange-800">
              New
            </Badge>
          </CardContent>
        </Card>

        <Card className="health-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Prescriptions</CardTitle>
            <FileText className="h-4 w-4 text-health-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">Active prescription</p>
            <Badge className="mt-2 bg-health-blue-100 text-health-blue-800">
              Active
            </Badge>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="health-card">
          <CardHeader>
            <CardTitle>Recent Prescriptions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-l-4 border-health-blue-500 pl-4 py-2">
              <h4 className="font-medium">Paracetamol 500mg</h4>
              <p className="text-sm text-gray-600">Take twice daily after meals</p>
              <p className="text-xs text-gray-500">Prescribed on Dec 28, 2024</p>
            </div>
            <div className="border-l-4 border-health-green-500 pl-4 py-2">
              <h4 className="font-medium">Cough Syrup</h4>
              <p className="text-sm text-gray-600">10ml three times daily</p>
              <p className="text-xs text-gray-500">Prescribed on Dec 25, 2024</p>
            </div>
          </CardContent>
        </Card>

        <Card className="health-card">
          <CardHeader>
            <CardTitle>Available Lab Reports</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <h4 className="font-medium">Blood Test Results</h4>
                <p className="text-sm text-gray-600">Uploaded 2 days ago</p>
              </div>
              <Button size="sm" variant="outline">
                View
              </Button>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <h4 className="font-medium">X-Ray Report</h4>
                <p className="text-sm text-gray-600">Uploaded 5 days ago</p>
              </div>
              <Button size="sm" variant="outline">
                View
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
