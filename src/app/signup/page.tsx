import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Signup() {
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
                <Input id="name" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input id="email" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="phone">Phone No.</Label>
                <Input id="phone" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="gender">Gender</Label>
                <Input id="gender" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="specialization">Specialization</Label>
                <Input id="specialization" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input id="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="fees">Fees (per appointment in INR)</Label>
                <Input id="fees" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="address">Address</Label>
                <Input id="address" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Register</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="Patient">
          <Card>
            <CardHeader>
              <CardTitle>Patient</CardTitle>
              <CardDescription>
                Register as a Patient
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input id="email" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="phone">Phone No.</Label>
                <Input id="phone" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="gender">Gender</Label>
                <Input id="gender" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input id="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Register</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Signup;
