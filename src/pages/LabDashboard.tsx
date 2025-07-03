
import { FileText, Upload, Clock, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function LabDashboard() {
  const currentDate = new Date().toLocaleDateString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const assignedTests = [
    {
      id: '1',
      patientName: 'Ramesh Patel',
      testType: 'Blood Test',
      assignedDate: '2024-12-29',
      status: 'pending',
      priority: 'high'
    },
    {
      id: '2',
      patientName: 'Sunita Devi',
      testType: 'X-Ray',
      assignedDate: '2024-12-29',
      status: 'in-progress',
      priority: 'medium'
    },
    {
      id: '3',
      patientName: 'Mohan Kumar',
      testType: 'Urine Test',
      assignedDate: '2024-12-28',
      status: 'completed',
      priority: 'low'
    }
  ];

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Welcome Section */}
      <div className="health-card p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Lab Assistant Dashboard
            </h1>
            <p className="text-gray-600 text-lg">{currentDate}</p>
          </div>
          <div className="text-center">
            <Button className="health-button">
              <Upload className="h-4 w-4 mr-2" />
              Upload Report
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
                <p className="text-sm text-gray-600 mb-1">Pending Tests</p>
                <p className="text-3xl font-bold text-orange-600">3</p>
              </div>
              <Clock className="h-8 w-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="health-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">In Progress</p>
                <p className="text-3xl font-bold text-health-blue-600">2</p>
              </div>
              <FileText className="h-8 w-8 text-health-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="health-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Completed Today</p>
                <p className="text-3xl font-bold text-health-green-600">5</p>
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
                <p className="text-3xl font-bold text-gray-800">18</p>
              </div>
              <FileText className="h-8 w-8 text-gray-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Assigned Tests */}
      <Card className="health-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FileText className="h-5 w-5 text-health-blue-500" />
            <span>Assigned Tests</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {assignedTests.map((test) => (
              <div key={test.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <h4 className="font-medium text-gray-800">{test.patientName}</h4>
                    <Badge 
                      variant={test.priority === 'high' ? 'destructive' : test.priority === 'medium' ? 'default' : 'secondary'}
                    >
                      {test.priority}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600">{test.testType}</p>
                  <p className="text-xs text-gray-500">Assigned: {test.assignedDate}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge 
                    variant={test.status === 'completed' ? 'secondary' : 'outline'}
                    className={
                      test.status === 'completed' ? 'bg-health-green-100 text-health-green-800' :
                      test.status === 'in-progress' ? 'bg-health-blue-100 text-health-blue-800' :
                      'bg-orange-100 text-orange-800'
                    }
                  >
                    {test.status}
                  </Badge>
                  <Button size="sm" className="health-button">
                    {test.status === 'completed' ? 'View' : 'Upload'}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Upload Section */}
      <Card className="health-card">
        <CardHeader>
          <CardTitle>Quick Report Upload</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Patient Name
              </label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-health-blue-500 focus:border-transparent">
                <option value="">Select Patient</option>
                <option value="1">Ramesh Patel</option>
                <option value="2">Sunita Devi</option>
                <option value="3">Mohan Kumar</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Test Type
              </label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-health-blue-500 focus:border-transparent">
                <option value="">Select Test Type</option>
                <option value="blood">Blood Test</option>
                <option value="xray">X-Ray</option>
                <option value="urine">Urine Test</option>
                <option value="ecg">ECG</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload Report (PDF/Image)
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Drag and drop files here or click to browse</p>
              <Button variant="outline" className="mt-2">
                Choose Files
              </Button>
            </div>
          </div>
          <Button className="w-full health-button">
            <Upload className="h-4 w-4 mr-2" />
            Upload Report & Notify
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
