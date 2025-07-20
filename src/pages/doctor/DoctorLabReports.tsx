import { FileText, Download, Eye, Calendar, User } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const labReports = [
  {
    id: 1,
    patient: 'John Doe',
    testType: 'Blood Test',
    testName: 'Complete Blood Count',
    date: '2024-01-15',
    status: 'completed',
    result: 'Normal',
    lab: 'City Medical Lab'
  },
  {
    id: 2,
    patient: 'Jane Smith',
    testType: 'Urine Test',
    testName: 'Urinalysis',
    date: '2024-01-14',
    status: 'completed',
    result: 'Abnormal',
    lab: 'Health Care Labs'
  },
  {
    id: 3,
    patient: 'Mike Johnson',
    testType: 'X-Ray',
    testName: 'Chest X-Ray',
    date: '2024-01-12',
    status: 'pending',
    result: 'Pending',
    lab: 'Diagnostic Center'
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'completed':
      return 'default';
    case 'pending':
      return 'secondary';
    default:
      return 'outline';
  }
};

const getResultColor = (result: string) => {
  switch (result) {
    case 'Normal':
      return 'default';
    case 'Abnormal':
      return 'destructive';
    case 'Pending':
      return 'secondary';
    default:
      return 'outline';
  }
};

export default function DoctorLabReports() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-foreground">Lab Reports</h1>
        <Button>
          <FileText className="w-4 h-4 mr-2" />
          Request Lab Test
        </Button>
      </div>

      <div className="grid gap-4">
        {labReports.map((report) => (
          <Card key={report.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <div>
                      <h3 className="font-semibold text-lg">{report.testName}</h3>
                      <p className="text-muted-foreground">{report.testType}</p>
                    </div>
                    <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {report.patient}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {report.date}
                      </div>
                      <div>
                        Lab: {report.lab}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex flex-col space-y-2">
                    <Badge variant={getStatusColor(report.status)}>
                      {report.status}
                    </Badge>
                    <Badge variant={getResultColor(report.result)}>
                      {report.result}
                    </Badge>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </Button>
                    {report.status === 'completed' && (
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-1" />
                        Download
                      </Button>
                    )}
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