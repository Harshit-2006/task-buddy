import conf from "../conf/config.js";
import { Client, Databases, Query, ID } from "appwrite";

class Service {
  client = new Client();
  databases;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
  }

  // Function to create todo
  async createTodo({ title, description, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        ID.unique(),
        {
          title,
          description,
          status,
          userId,
        }
      );
    } catch (error) {
      console.error("Appwrite service :: createTodo :: error", error);
      return {err:error,message:error};
    }
  }

  // Function to update todo
  async updateTodo(todoId, updatedTodo) {
    // updatedTodo = { title, description, status }
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        todoId,
        updatedTodo
      );
    } catch (error) {
      console.error("Appwrite service :: updateTodo :: error", error);
      throw error;
    }
  }

  // Function to delete todo
  async deleteTodo(todoId) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        todoId
      );
      return true;
    } catch (error) {
      console.error("Appwrite service :: deleteTodo :: error", error);
      return false;
    }
  }

  // Function to get all the todos for a particular user
  async getTodos(userId) {
    try {
      const response = await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        [
          Query.equal("userId", userId), // Filtering by userId
        ]
      );
      return response.documents;
    } catch (error) {
      console.error("Appwrite service :: getTodos :: error", error);
      throw error;
    }
  }
}

const service=new Service();

export default service;