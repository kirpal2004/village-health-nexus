import { FileText, Clock, CheckCircle, User } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function LabAssignedTests() {
  const assignedTests = [
    {
      id: '1',
      patientName: 'Ramesh Patel',
      patientAge: 45,
      testType: 'Blood Test',
      doctorName: 'Dr. Rajesh Kumar',
      assignedDate: '2024-12-29',
      dueDate: '2024-12-30',
      status: 'pending',
      priority: 'high',
      testDetails: 'Complete Blood Count (CBC), Blood Sugar, Cholesterol'
    },
    {
      id: '2',
      patientName: 'Sunita Devi',
      patientAge: 38,
      testType: 'X-Ray',
      doctorName: 'Dr. Rajesh Kumar',
      assignedDate: '2024-12-29',
      dueDate: '2024-12-29',
      status: 'in-progress',
      priority: 'medium',
      testDetails: 'Chest X-Ray'
    },
    {
      id: '3',
      patientName: 'Mohan Kumar',
      patientAge: 32,
      testType: 'Urine Test',
      doctorName: 'Dr. Rajesh Kumar',
      assignedDate: '2024-12-28',
      dueDate: '2024-12-28',
      status: 'completed',
      priority: 'low',
      testDetails: 'Routine Urine Analysis'
    },
    {
      id: '4',
      patientName: 'Priya Sharma',
      patientAge: 28,
      testType: 'ECG',
      doctorName: 'Dr. Rajesh Kumar',
      assignedDate: '2024-12-29',
      dueDate: '2024-12-30',
      status: 'pending',
      priority: 'high',
      testDetails: 'Electrocardiogram'
    }
  ];

  const pendingTests = assignedTests.filter(test => test.status === 'pending');
  const inProgressTests = assignedTests.filter(test => test.status === 'in-progress');
  const completedTests = assignedTests.filter(test => test.status === 'completed');

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Header */}
      <div className="health-card p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Assigned Tests</h1>
        <p className="text-gray-600">Manage and track all laboratory tests assigned to you</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="health-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Pending Tests</p>
                <p className="text-3xl font-bold text-orange-600">{pendingTests.length}</p>
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
                <p className="text-3xl font-bold text-health-blue-600">{inProgressTests.length}</p>
              </div>
              <FileText className="h-8 w-8 text-health-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="health-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Completed</p>
                <p className="text-3xl font-bold text-health-green-600">{completedTests.length}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-health-green-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tests List */}
      <Card className="health-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FileText className="h-5 w-5 text-health-blue-500" />
            <span>All Assigned Tests</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {assignedTests.map((test) => (
              <div key={test.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <User className="h-4 w-4 text-gray-500" />
                      <h4 className="font-semibold text-gray-800">{test.patientName}</h4>
                      <span className="text-sm text-gray-500">Age: {test.patientAge}</span>
                      <Badge 
                        variant={test.priority === 'high' ? 'destructive' : test.priority === 'medium' ? 'default' : 'secondary'}
                      >
                        {test.priority} priority
                      </Badge>
                    </div>
                    <h3 className="font-medium text-lg text-health-blue-700 mb-1">{test.testType}</h3>
                    <p className="text-sm text-gray-600 mb-2">{test.testDetails}</p>
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <span>Assigned by: {test.doctorName}</span>
                      <span>Date: {test.assignedDate}</span>
                      <span>Due: {test.dueDate}</span>
                    </div>
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
                      {test.status.replace('-', ' ')}
                    </Badge>
                    <Button 
                      size="sm" 
                      className="health-button"
                      disabled={test.status === 'completed'}
                    >
                      {test.status === 'completed' ? 'Completed' : 
                       test.status === 'in-progress' ? 'Continue' : 'Start Test'}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}