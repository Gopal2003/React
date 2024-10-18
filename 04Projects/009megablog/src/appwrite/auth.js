import conf from "../conf/conf";
import {Client, Account, ID} from "appwrite";

export class AuthService{

    //? The Client object initializes the connection to the Appwrite backend, allowing the app to send requests (such as account creation, login, etc.) to Appwrite services.

    //! In JavaScript, const and let are used to define local variables within the scope of functions, blocks, or methods. However, class properties (like client and account) are automatically attached to the instance of the class when you define them outside of a method or function, so they do not require let or const.

    //! Class properties are a special feature of JavaScript classes that don't need let or const. When you define a property like client = new Client();, JavaScript automatically treats this as an instance property that will be available on every instance of the class.

    client = new Client();
    account;

    //? The setEndpoint() and setProject() methods are called to define the API's base URL and the project ID associated with Appwrite.
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client);

    }

    async createAccount({email, password,name}) {
        try{
            const userAccount = await this.account.create(ID.unique(),email,password,name);

            if(userAccount){
                //call another method
                return this.login({email, password});
            }
            else
            {
                return userAccount;
            }
        }catch(error){
            throw error;
        }
        
    }

    //? Allow the user to login into their account by providing a valid email and password combination. This route will create a new session for the user
    async login({email, password})
    {
        try{
            const userSession = await this.account.createEmailPasswordSession(email, password);
            return userSession;
        }catch(error){
            throw error;
        }
    
    }

    async getCurrentUser(){
        try{
                return await this.account.get();
        }catch(error) {
            console.log("Appwrite service :: getCurrentUser " , error); 
        }

        return null;
    }

    async logout(){
        try{
            await this.account.deleteSessions();
        }catch(error){
            console.log("Appwrite service :: logout :: error ", error); 
        }
    }

    
}

const authService = new AuthService();

export default authService;