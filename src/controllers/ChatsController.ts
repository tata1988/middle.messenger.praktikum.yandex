import API, { ChatsAPI } from "../api/ChatsAPI";
import { IUserSearch } from "../api/UserAPI";
import store from "../utils/Store";
import MessagesController from "./MessagesController";
import UserController from "./UserController";

class ChatsController {
  private readonly api: ChatsAPI;

  constructor() {
    this.api = API;
  }

  async create(title: string) {
    try {
      await this.api.create(title);

      this.fetchChats();
    } catch (e: any) {
      console.error(e.message);
    }
  }

  async fetchChats() {
    try {
      const chats = await this.api.read();

      chats.map(async (chat) => {
        const token = await this.getToken(chat.id);

        await MessagesController.connect(chat.id, token);
      });

      store.set("chats", chats);
    } catch (e: any) {
      console.error(e.message);
    }
  }

  async addUserToChat(login: string) {
    try {
      await UserController.searchUser(login);
      const { selectedChat } = store.getState();
      const storeUser = store.getState().searchUsers;
      const userId = storeUser.map((user: IUserSearch) => {
        return user.id;
      });
      await this.api.addUsers(selectedChat, userId);
    } catch (e: any) {
      console.error(e.message);
    }
  }

  async deleteUserToChat(login: string) {
    try {
      await UserController.searchUser(login);
      const { selectedChat } = store.getState();
      const storeUser = store.getState().searchUsers;
      const userId = storeUser.map((user: IUserSearch) => {
        return user.id;
      });
      await this.api.deleteUsers(selectedChat, userId);
    } catch (e: any) {
      console.error(e.message);
    }
  }

  async delete(id: number) {
    try {
      await this.api.delete(id);
      this.fetchChats();
    } catch (e: any) {
      console.error(e.message);
    }
  }

  getToken(id: number) {
    return this.api.getToken(id);
  }

  selectChat(id: number) {
    store.set("selectedChat", id);
  }
}

export default new ChatsController();
