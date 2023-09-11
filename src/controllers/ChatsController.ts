import API, { ChatsAPI } from '../api/ChatsAPI';
import { IUserSearch } from '../api/UserAPI';
import store from '../utils/Store';
import MessagesController from './MessagesController';
import UserController from './UserController';

class ChatsController {
  private readonly api: ChatsAPI;

  constructor() {
    this.api = API;
  }

  async create(title: string) {
    await this.api.create(title);

    this.fetchChats();
  }

  async fetchChats() {
    const chats = await this.api.read();

    chats.map(async (chat) => {
      const token = await this.getToken(chat.id);
      
      await MessagesController.connect(chat.id, token);
    });

    store.set('chats', chats);
  }

  async addUserToChat(login: string) {
    await UserController.searchUser(login);
    const selectedChat = store.getState().selectedChat;
    const storeUser = store.getState().searchUsers;
    const userId = storeUser.map((user: IUserSearch) => {
      return user.id
    })
    await this.api.addUsers(selectedChat, userId);
  }

  async deleteUserToChat(login: string) {
    await UserController.searchUser(login);
    const selectedChat = store.getState().selectedChat;
    const storeUser = store.getState().searchUsers;
    const userId = storeUser.map((user: IUserSearch) => {
      return user.id
    })
    await this.api.deleteUsers(selectedChat, userId);
  }

  async delete(id: number) {
    await this.api.delete(id);

    this.fetchChats();
  }

  getToken(id: number) {
    return this.api.getToken(id);
  }

  selectChat(id: number) {
    store.set('selectedChat', id);
  }
}

export default new ChatsController();

