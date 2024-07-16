"use client";
import { useState, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { signUp } from '@/api/appwrite/auth';

function Signup() {
  const router = useRouter();
  const [doctorDetails, setDoctorDetails] = useState({ name: '', email: '', password: '' });
  const [patientDetails, setPatientDetails] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>, userType: 'Doctor' | 'Patient') => {
    const { id, value } = e.target;
    if (userType === 'Doctor') {
      setDoctorDetails({ ...doctorDetails, [id]: value });
    } else {
      setPatientDetails({ ...patientDetails, [id]: value });
    }
  };

  const handleRegister = async (userType: 'Doctor' | 'Patient') => {
    const details = userType === 'Doctor' ? doctorDetails : patientDetails;
    try {
      await signUp(details.email, details.password, details.name);
      router.push('/login'); // Redirect to login page after successful signup
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unknown error occurred');
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Tabs defaultValue="Patient" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="Doctor">Doctor</TabsTrigger>
          <TabsTrigger value="Patient">Patient</TabsTrigger>
        </TabsList>
        <TabsContent value="Doctor">
          <Card>
            <CardHeader>
              <CardTitle>Doctor</CardTitle>
              <CardDescription>Register As a Doctor</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" value={doctorDetails.name} onChange={(e) => handleInputChange(e, 'Doctor')} />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input id="email" value={doctorDetails.email} onChange={(e) => handleInputChange(e, 'Doctor')} />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" value={doctorDetails.password} onChange={(e) => handleInputChange(e, 'Doctor')} />
              </div>
              {error && <div className="text-red-500">{error}</div>}
            </CardContent>
            <CardFooter>
              <Button onClick={() => handleRegister('Doctor')}>Register</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="Patient">
          <Card>
            <CardHeader>
              <CardTitle>Patient</CardTitle>
              <CardDescription>Register as a Patient</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" value={patientDetails.name} onChange={(e) => handleInputChange(e, 'Patient')} />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input id="email" value={patientDetails.email} onChange={(e) => handleInputChange(e, 'Patient')} />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" value={patientDetails.password} onChange={(e) => handleInputChange(e, 'Patient')} />
              </div>
              {error && <div className="text-red-500">{error}</div>}
            </CardContent>
            <CardFooter>
              <Button onClick={() => handleRegister('Patient')}>Register</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Signup;
