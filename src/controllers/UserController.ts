import API, { UserAPI, UserPassword, UserProfile } from '../api/UserAPI';
import AuthController from './AuthController';

export class UserController {
  private readonly api: UserAPI;

  constructor() {
    this.api = API;
  }

  async changeProfile(data: UserProfile) {
    try {
      await this.api.changeProfile(data);
      AuthController.fetchUser();
    } catch (e: any) {
      console.error(e);
    }
  }

  async changePassword(password: UserPassword) {
    try {
      await this.api.changePassword(password);
      AuthController.fetchUser();
    
    } catch (e: any) {
      console.error(e);
    }
  }

  async changeAvatar(avatar: FormData) {
    try {
      await this.api.changeAvatar(avatar);
      AuthController.fetchUser();

    } catch (e: any) {
      console.error(e);
    }
  }
}

export default new UserController();
