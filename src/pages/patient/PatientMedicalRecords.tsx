import { FileText, Download, Eye, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const labReports = [
  {
    id: 1,
    name: 'Complete Blood Count',
    date: '2024-01-18',
    doctor: 'Dr. Rajesh Kumar',
    status: 'normal',
    type: 'Blood Test'
  },
  {
    id: 2,
    name: 'Chest X-Ray',
    date: '2024-01-15',
    doctor: 'Dr. Priya Sharma',
    status: 'abnormal',
    type: 'Imaging'
  },
  {
    id: 3,
    name: 'ECG Report',
    date: '2024-01-10',
    doctor: 'Dr. Amit Patel',
    status: 'normal',
    type: 'Cardiac'
  }
];

const prescriptions = [
  {
    id: 1,
    medicine: 'Paracetamol 500mg',
    dosage: 'Twice daily after meals',
    doctor: 'Dr. Rajesh Kumar',
    date: '2024-01-18',
    duration: '7 days'
  },
  {
    id: 2,
    medicine: 'Cough Syrup',
    dosage: '10ml three times daily',
    doctor: 'Dr. Priya Sharma',
    date: '2024-01-15',
    duration: '5 days'
  }
];

const visitHistory = [
  {
    id: 1,
    doctor: 'Dr. Rajesh Kumar',
    date: '2024-01-18',
    diagnosis: 'Mild fever and cold',
    treatment: 'Prescribed medication and rest'
  },
  {
    id: 2,
    doctor: 'Dr. Priya Sharma',
    date: '2024-01-15',
    diagnosis: 'Skin allergy',
    treatment: 'Topical cream and antihistamine'
  }
];

export default function PatientMedicalRecords() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'normal':
        return 'bg-green-100 text-green-800';
      case 'abnormal':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-foreground">Medical Records</h1>
        <Button variant="outline">
          <Download className="w-4 h-4 mr-2" />
          Download All Records
        </Button>
      </div>

      <Tabs defaultValue="lab-reports" className="space-y-4">
        <TabsList>
          <TabsTrigger value="lab-reports">Lab Reports</TabsTrigger>
          <TabsTrigger value="prescriptions">Prescriptions</TabsTrigger>
          <TabsTrigger value="visit-history">Visit History</TabsTrigger>
        </TabsList>

        <TabsContent value="lab-reports">
          <div className="grid gap-4">
            {labReports.map((report) => (
              <Card key={report.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <FileText className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{report.name}</h3>
                        <p className="text-muted-foreground">{report.type}</p>
                        <div className="flex items-center text-sm text-muted-foreground mt-1">
                          <Calendar className="w-4 h-4 mr-1" />
                          {report.date} • {report.doctor}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge className={getStatusColor(report.status)}>
                        {report.status}
                      </Badge>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-2" />
                          View
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="prescriptions">
          <div className="grid gap-4">
            {prescriptions.map((prescription) => (
              <Card key={prescription.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg">{prescription.medicine}</h3>
                      <p className="text-muted-foreground">{prescription.dosage}</p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-1" />
                        {prescription.date} • {prescription.doctor} • Duration: {prescription.duration}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-2" />
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="visit-history">
          <div className="grid gap-4">
            {visitHistory.map((visit) => (
              <Card key={visit.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-lg">{visit.doctor}</h3>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-1" />
                        {visit.date}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div>
                        <span className="font-medium">Diagnosis: </span>
                        <span className="text-muted-foreground">{visit.diagnosis}</span>
                      </div>
                      <div>
                        <span className="font-medium">Treatment: </span>
                        <span className="text-muted-foreground">{visit.treatment}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}