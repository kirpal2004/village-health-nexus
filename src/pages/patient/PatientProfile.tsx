import { User, Mail, Phone, MapPin, Calendar, Edit, Save, Camera } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useState } from 'react';

export default function PatientProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Ramesh Patel',
    email: 'ramesh.patel@email.com',
    phone: '+91 9876543210',
    address: '123 MG Road, Mumbai, Maharashtra 400001',
    dateOfBirth: '1985-06-15',
    gender: 'Male',
    bloodGroup: 'O+',
    emergencyContact: '+91 9876543211',
    allergies: 'Penicillin, Nuts',
    medicalHistory: 'Hypertension (2020), Diabetes Type 2 (2022)',
    insurance: 'Star Health Insurance - Policy #SH123456789'
  });

  const handleInputChange = (field: string, value: string) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to backend
    console.log('Saving profile data:', profileData);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-foreground">My Profile</h1>
        <Button onClick={() => isEditing ? handleSave() : setIsEditing(true)}>
          {isEditing ? (
            <>
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </>
          ) : (
            <>
              <Edit className="w-4 h-4 mr-2" />
              Edit Profile
            </>
          )}
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Picture and Basic Info */}
        <Card>
          <CardContent className="p-6 text-center space-y-4">
            <div className="relative inline-block">
              <Avatar className="w-32 h-32">
                <AvatarImage src="/placeholder-avatar.jpg" />
                <AvatarFallback className="text-2xl">
                  {profileData.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              {isEditing && (
                <Button
                  size="sm"
                  className="absolute bottom-0 right-0 rounded-full w-8 h-8 p-0"
                >
                  <Camera className="w-4 h-4" />
                </Button>
              )}
            </div>
            <div>
              <h2 className="text-xl font-semibold">{profileData.name}</h2>
              <p className="text-muted-foreground">Patient ID: PT001234</p>
            </div>
          </CardContent>
        </Card>

        {/* Personal Information */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                {isEditing ? (
                  <Input
                    id="name"
                    value={profileData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                  />
                ) : (
                  <p className="text-muted-foreground">{profileData.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                {isEditing ? (
                  <Input
                    id="email"
                    type="email"
                    value={profileData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                  />
                ) : (
                  <p className="text-muted-foreground">{profileData.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                {isEditing ? (
                  <Input
                    id="phone"
                    value={profileData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                  />
                ) : (
                  <p className="text-muted-foreground">{profileData.phone}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="dob">Date of Birth</Label>
                {isEditing ? (
                  <Input
                    id="dob"
                    type="date"
                    value={profileData.dateOfBirth}
                    onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                  />
                ) : (
                  <p className="text-muted-foreground">{profileData.dateOfBirth}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="gender">Gender</Label>
                {isEditing ? (
                  <Input
                    id="gender"
                    value={profileData.gender}
                    onChange={(e) => handleInputChange('gender', e.target.value)}
                  />
                ) : (
                  <p className="text-muted-foreground">{profileData.gender}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="bloodGroup">Blood Group</Label>
                {isEditing ? (
                  <Input
                    id="bloodGroup"
                    value={profileData.bloodGroup}
                    onChange={(e) => handleInputChange('bloodGroup', e.target.value)}
                  />
                ) : (
                  <p className="text-muted-foreground">{profileData.bloodGroup}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              {isEditing ? (
                <Textarea
                  id="address"
                  value={profileData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  rows={2}
                />
              ) : (
                <p className="text-muted-foreground">{profileData.address}</p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Medical Information */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Medical Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="emergencyContact">Emergency Contact</Label>
                {isEditing ? (
                  <Input
                    id="emergencyContact"
                    value={profileData.emergencyContact}
                    onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
                  />
                ) : (
                  <p className="text-muted-foreground">{profileData.emergencyContact}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="insurance">Insurance Details</Label>
                {isEditing ? (
                  <Input
                    id="insurance"
                    value={profileData.insurance}
                    onChange={(e) => handleInputChange('insurance', e.target.value)}
                  />
                ) : (
                  <p className="text-muted-foreground">{profileData.insurance}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="allergies">Known Allergies</Label>
              {isEditing ? (
                <Textarea
                  id="allergies"
                  value={profileData.allergies}
                  onChange={(e) => handleInputChange('allergies', e.target.value)}
                  rows={2}
                />
              ) : (
                <p className="text-muted-foreground">{profileData.allergies}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="medicalHistory">Medical History</Label>
              {isEditing ? (
                <Textarea
                  id="medicalHistory"
                  value={profileData.medicalHistory}
                  onChange={(e) => handleInputChange('medicalHistory', e.target.value)}
                  rows={3}
                />
              ) : (
                <p className="text-muted-foreground">{profileData.medicalHistory}</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}