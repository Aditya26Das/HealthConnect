import conf from "@/conf/config";
import { ID, Client, Account } from 'appwrite';


const appwriteClient =  new Client()
    .setEndpoint(conf.appwrite_url)
    .setProject(conf.appwrite_project_id);

export const account = new Account(appwriteClient);

