import { ID, Query } from "node-appwrite"
import {
    users, storage,
    databases
} from "../appwrite.config"
import { parseStringify } from "../utils"
import { InputFile } from "node-appwrite/file"
export const createUser = async (user: CreateUserParams) => {
    try {
        const newUser = await users.create(ID.unique(), user.email, user.phone, undefined, user.name)
        return parseStringify(newUser)
    } catch (error: any) {
        if (error && error?.code === 409) {
            const documents = await users.list([
                Query.equal('email', [user.email])
            ])

            return documents?.users[0]
        }
    }
}

export const getUser = async (userId: string) => {
    try {
        const user = await users.get(userId);
        return parseStringify(user)
    } catch (error) {
        console.log(error)
    }
}

export const registerPatient = async ({ identificationDocument, ...patient }: RegisterUserParams) => {
    try {
        let file;
        if (identificationDocument) {
            const inputFile = InputFile.fromBuffer(
                identificationDocument?.get('blobFile') as Blob,
                identificationDocument?.get('fileName') as string,
            )
            file = await storage.createFile('668e60a5001580289b5c', ID.unique(), inputFile)
        }
        const newPatient = await databases.createDocument(
            '668e5ff60016285a0f4e',
            '668e601e0029949083a4',
            ID.unique(),
            {
                identificationDocument: file?.$id || null,
                identificationDocumentUrl: `https://cloud.appwrite.io/v1/storage/buckets/668e60a5001580289b5c/files/${file?.$id}/view?project=668e5f50003592fe22a9`,
                ...patient
            }
        )
        return parseStringify(newPatient)
    } catch (error) {
        console.log(error)
    }
}