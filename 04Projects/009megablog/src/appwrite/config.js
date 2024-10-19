import conf from "../conf/conf";
import {Client, Databases, ID, Storage, Query} from "appwrite";

export class Service{

    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log("Appwrite CreatePost: " , error);
            
        }
    }

    async updatePost(slug,{title,  content, featuredImage, status}){
        try {

            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
            
        } catch (error) {
            console.log("Appwrite UpdatePost " , error);
            
        }
    }
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )

            return true;
        } catch (error) {
            console.log("Appwrite DeletePost: " , error);
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite GetPost: " , error);
            
        }
    }

    async getAllPosts(queries = [Query.equal("status","active")]){ // status is key in appwrite
        try {

            return await this.databases.listDocuments(
                conf.appwriteDatabaseId, 
                conf.appwriteCollectionId, 
                queries,
            )
        } catch (error) {
            console.log("Appwrite GetAllPosts: " , error);
            return false;
        }
    }

    //file upload service
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )

        } catch (error) {
            console.log("Appwrite UploadFile " , error);
            return false;
        }
    }

    async deleteFile(fildId){
        try {

            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fildId
            )
            return true;
        } catch (error) {
            console.log("Appwrite deleteFile " , error);
            return false;
            
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
        
}




const service = new Service();
export default Service