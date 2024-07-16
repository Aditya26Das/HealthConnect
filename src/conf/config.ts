const conf = {
    appwrite_url : String(process.env.APPWRITE_URL),
    appwrite_project_id : String(process.env.APPWRITE_PROJECT_ID),
    appwrite_db_id : String(process.env.APPWRITE_DATABASE_ID),
    appwrite_collection_doctors : String(process.env.APPWRITE_COLLECTION_DOCTORS),
    appwrite_collection_patients : String(process.env.APPWRITE_COLLECTION_PATIENTS),
    appwrite_bucket_profileImage_id : String(process.env.APPWRITE_BUCKET_PROFILE_IMAGE_ID)
}

export default conf