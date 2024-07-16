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
import { login } from '@/api/appwrite/auth';

function Login() {
  const router = useRouter();
  const [doctorDetails, setDoctorDetails] = useState({ email: '', password: '' });
  const [patientDetails, setPatientDetails] = useState({ email: '', password: '' });
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>, userType: 'Doctor' | 'Patient') => {
    const { id, value } = e.target;
    if (userType === 'Doctor') {
      setDoctorDetails({ ...doctorDetails, [id]: value });
    } else {
      setPatientDetails({ ...patientDetails, [id]: value });
    }
  };

  const handleLogin = async (userType: 'Doctor' | 'Patient') => {
    const details = userType === 'Doctor' ? doctorDetails : patientDetails;
    try {
      await login(details.email, details.password);
      router.push('/dashboard'); // Redirect after successful login
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
              <CardDescription>Login As a Doctor</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="doctor-email">Email</Label>
                <Input
                  id="doctor-email"
                  value={doctorDetails.email}
                  onChange={(e) => handleInputChange(e, 'Doctor')}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="doctor-password">Password</Label>
                <Input
                  id="doctor-password"
                  type="password"
                  value={doctorDetails.password}
                  onChange={(e) => handleInputChange(e, 'Doctor')}
                />
              </div>
              {error && <div className="text-red-500">{error}</div>}
            </CardContent>
            <CardFooter>
              <Button onClick={() => handleLogin('Doctor')}>Login</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="Patient">
          <Card>
            <CardHeader>
              <CardTitle>Patient</CardTitle>
              <CardDescription>Login as a Patient</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="patient-email">Email</Label>
                <Input
                  id="patient-email"
                  value={patientDetails.email}
                  onChange={(e) => handleInputChange(e, 'Patient')}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="patient-password">Password</Label>
                <Input
                  id="patient-password"
                  type="password"
                  value={patientDetails.password}
                  onChange={(e) => handleInputChange(e, 'Patient')}
                />
              </div>
              {error && <div className="text-red-500">{error}</div>}
            </CardContent>
            <CardFooter>
              <Button onClick={() => handleLogin('Patient')}>Login</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Login;
