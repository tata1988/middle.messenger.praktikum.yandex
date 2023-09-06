import API, { ResourcesAPI } from '../api/ResourcesAPI';
import store from '../utils/Store';



export class UserController {
  private readonly api: ResourcesAPI;

  constructor() {
    this.api = API;
  }

  async getAvatar() {
    try {
      const allStore = store.getState();
      const puth = allStore.user.avatar;
      await this.api.read(puth);
  
    } catch (e: any) {
      console.error(e);
    }
  }


}

export default new UserController();
