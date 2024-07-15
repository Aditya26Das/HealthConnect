import conf from "@/conf/config";
import { ID, Client, Account } from 'appwrite';

type RegisterDoctorSchema = {
    name: string,
    email: string,
    phone: number,
    gender: string,
    specialization: string,
    password: string,
    fees: number
}

type RegisterUserSchema = {
    name: string,
    email: string,
    phone: number,
    gender: string,
    password: string
}

type LoginSchema = {
    email: string,
    password: string
}

const appwriteClient =  new Client()
    .setEndpoint(conf.appwrite_url)
    .setProject(conf.appwrite_project_id);

export const account = new Account(appwriteClient);

export class Doctor{
    async CreateUserAccount({name,email,phone,gender,specialization,password,fees} : RegisterDoctorSchema)
    {
        try {
            
        } catch (error) {
            throw error;
        }
    }
}

