
export interface User {
  id: string;
  name: string;
  role: 'doctor' | 'patient' | 'lab' | 'pharmacy';
  email: string;
  phone?: string;
}

export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: 'male' | 'female' | 'other';
  phone: string;
  symptoms: string;
  registrationDate: string;
  status: 'registered' | 'diagnosed' | 'completed';
  caseNumber: string;
}

export interface Appointment {
  id: string;
  patientId: string;
  patientName: string;
  date: string;
  time: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  symptoms: string;
}

export interface Prescription {
  id: string;
  patientId: string;
  patientName: string;
  medicines: Medicine[];
  instructions: string;
  date: string;
  doctorName: string;
  status: 'pending' | 'dispensed';
}

export interface Medicine {
  name: string;
  dosage: string;
  frequency: string;
  duration: string;
}

export interface LabReport {
  id: string;
  patientId: string;
  patientName: string;
  testType: string;
  reportUrl: string;
  uploadDate: string;
  status: 'pending' | 'uploaded' | 'reviewed';
  assistantName: string;
}
