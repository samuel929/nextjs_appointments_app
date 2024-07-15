import * as sdk from 'node-appwrite'

export const {
    PROJECT_ID,
    API_KEY,
    DATABASE_ID,
    PATIENT_COLLECTION_ID,
    DOCTOR_COLLECTION_ID,
    APPOINTMENTS_COLLECTION_ID,
    NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
    NEXT_PUBLIC_ENDPOINT: ENDPOINT
} = process.env;

const client = new sdk.Client();

client.
    setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('668e5f50003592fe22a9')
    .setKey('cc9294017216546e6348c149d70cc5203fdb35100fcb6c5a868495ca4d60ea8c57ae09884a04d9798fd9bd7d48b64023da070e9571c023c521f0167cbbef6b21b08bf03c601f253ce2deaef201704723a3034e9bea4521bf297c1d00feda943fe7a695fa840ea03d35bcf9a400e17124bdba036b526e773149677d48a1128edd');


export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const messaging = new sdk.Messaging(client);
export const users = new sdk.Users(client);

