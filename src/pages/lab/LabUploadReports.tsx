import { Upload, FileText, Check, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function LabUploadReports() {
  const recentUploads = [
    {
      id: '1',
      patientName: 'Mohan Kumar',
      testType: 'Blood Test',
      uploadDate: '2024-12-29',
      status: 'uploaded',
      fileName: 'blood_test_mohan_kumar_291224.pdf'
    },
    {
      id: '2',
      patientName: 'Sunita Devi',
      testType: 'X-Ray',
      uploadDate: '2024-12-28',
      status: 'uploaded',
      fileName: 'xray_sunita_devi_281224.jpg'
    }
  ];

  const pendingTests = [
    {
      id: '3',
      patientName: 'Ramesh Patel',
      testType: 'Blood Test',
      testDate: '2024-12-29',
      priority: 'high'
    },
    {
      id: '4',
      patientName: 'Priya Sharma',
      testType: 'ECG',
      testDate: '2024-12-29',
      priority: 'high'
    }
  ];

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Header */}
      <div className="health-card p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Upload Reports</h1>
            <p className="text-gray-600">Upload and manage laboratory test reports</p>
          </div>
          <Button className="health-button">
            <Upload className="h-4 w-4 mr-2" />
            Quick Upload
          </Button>
        </div>
      </div>

      {/* Upload Form */}
      <Card className="health-card">
        <CardHeader>
          <CardTitle>Upload New Report</CardTitle>
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
                <option value="4">Priya Sharma</option>
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
                <option value="ultrasound">Ultrasound</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Test Results/Comments
            </label>
            <textarea 
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-health-blue-500 focus:border-transparent"
              rows={3}
              placeholder="Enter test results, observations, or comments..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload Report Files (PDF/Images)
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-health-blue-400 transition-colors">
              <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-lg text-gray-600 mb-2">Drag and drop files here</p>
              <p className="text-sm text-gray-500 mb-4">or click to browse</p>
              <Button variant="outline" className="mx-auto">
                <FileText className="h-4 w-4 mr-2" />
                Choose Files
              </Button>
              <p className="text-xs text-gray-400 mt-2">Supported formats: PDF, JPG, PNG (Max 10MB per file)</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <input type="checkbox" id="notify" className="rounded" />
            <label htmlFor="notify" className="text-sm text-gray-700">
              Notify doctor and patient immediately after upload
            </label>
          </div>

          <Button className="w-full health-button">
            <Upload className="h-4 w-4 mr-2" />
            Upload Report & Notify
          </Button>
        </CardContent>
      </Card>

      {/* Pending Tests for Upload */}
      <Card className="health-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertCircle className="h-5 w-5 text-orange-500" />
            <span>Pending Report Uploads</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {pendingTests.map((test) => (
              <div key={test.id} className="flex items-center justify-between p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                <div>
                  <h4 className="font-medium text-gray-800">{test.patientName}</h4>
                  <p className="text-sm text-gray-600">{test.testType} - {test.testDate}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge variant={test.priority === 'high' ? 'destructive' : 'default'}>
                    {test.priority} priority
                  </Badge>
                  <Button size="sm" className="health-button">
                    Upload Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Uploads */}
      <Card className="health-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Check className="h-5 w-5 text-health-green-500" />
            <span>Recent Uploads</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentUploads.map((upload) => (
              <div key={upload.id} className="flex items-center justify-between p-4 bg-health-green-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <FileText className="h-5 w-5 text-health-green-600" />
                  <div>
                    <h4 className="font-medium text-gray-800">{upload.patientName}</h4>
                    <p className="text-sm text-gray-600">{upload.testType} - {upload.uploadDate}</p>
                    <p className="text-xs text-gray-500">{upload.fileName}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge className="bg-health-green-100 text-health-green-800">
                    {upload.status}
                  </Badge>
                  <Button size="sm" variant="outline">
                    View
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}