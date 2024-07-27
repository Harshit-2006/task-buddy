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
      console.log("Appwrite service :: createAccount :: error ", error.code);
      return parseInt(error.code);
    }
  }

  // function to login user to the app
  async login({ email, password }) {
    try {
      // const sessionId = window.localStorage.getItem("cookieFallback");
      // //logging out the user if he is still logged in
      // this.logout(sessionId);
      const session = await this.account.createEmailPasswordSession(
        email,
        password
      );
      console.log(`Session created ${session}`);
      return session;
    } catch (error) {
      console.log("Appwrite service :: login :: error ", error);
      return parseInt(error.code);
    }
  }

  // function to logout the user
  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite service :: logout :: error ", error);
      return parseInt(error.code);
    }
  }

  // function to get the info of the currently login user
  async getCurrentUser() {
    try {
      const user = await this.account.get();
      console.log("Current user:", user);
      return user;
    } catch (error) {
      console.log("Appwrite service :: getCurrentUser :: error", error);
      throw error;
    }
  }
}
const authService = new AuthService();

export default authService;
