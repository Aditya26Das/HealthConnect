"use server";
import conf from "@/conf/config";
import { Client, Account, ID } from "appwrite";
import { cookies } from "next/headers";

const client = new Client()
    .setEndpoint(conf.appwrite_url)
    .setProject(conf.appwrite_project_id);

const account = new Account(client);

export const signUp = async (email: string, password: string, name: string): Promise<any> => {
    try {
        const result = await account.create(
            ID.unique(),
            email,
            password,
            name
        );
        console.log(result);
        return result; // Return the result so we can handle the response in the client
    } catch (error:any) {
        console.error("Signup error:", error);
        throw new Error(`Signup failed: ${error.message}`);
    }
};

export const login = async (email: string, password: string): Promise<any> => {
    try {
        const session = await account.createEmailPasswordSession(
            email,
            password
        );
        // console.log(session);
        // const nextJsCookies = cookies();
        // nextJsCookies.set("my-custom-session", session.secret, {
        //     path: "/",
        //     httpOnly: true,
        //     sameSite: "strict",
        //     secure: true,
        // });
        return session; // Return the session so we can handle the response in the client
    } catch (error:any) {
        console.error("Login error:", error);
        throw new Error(`Login failed: ${error.message}`);
    }
};

