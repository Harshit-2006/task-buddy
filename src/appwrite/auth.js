import conf from "../conf/config";
import { Client, Account, ID } from "appwrite";

// created a class for the authentication service
export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  //function to create account
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log("Appwrite service :: createAccount :: error ", error);
      throw error;
    }
  }

  // function to login user to the app
  async login({ email, password }) {
    try {
      const session = await this.account.createEmailPasswordSession(
        email,
        password
      );
      console.log(`Session created ${session}`);
      return session;
    } catch (error) {
      console.log("Appwrite service :: login :: error ", error);
      throw error;
    }
  }

  // function to logout the user
  async logout() {
    try {
      await this.account.deleteSession();
    } catch (error) {
      console.log("Appwrite service :: logout :: error ", error);
      throw error;
    }
  }
}

const authService=new AuthService();

export default authService;
