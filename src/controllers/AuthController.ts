import API, { AuthAPI, ISigninData, ISignupData } from "../api/AuthAPI";
import store from "../utils/Store";
import router from "../utils/Router";
import MessagesController from "./MessagesController";

export class AuthController {
  private readonly api: AuthAPI;

  constructor() {
    this.api = API;
  }

  async signin(data: ISigninData) {
    try {
      await this.api.signin(data);
      await this.fetchUser();
      router.go("/messenger");
    } catch (e: any) {
      console.error(e);
    }
  }

  async signup(data: ISignupData) {
    try {
      await this.api.signup(data);
      await this.fetchUser();
      router.go("/messenger");
    } catch (e: any) {
      console.error(e.message);
    }
  }

  async fetchUser() {
    const user = await this.api.read();
    store.set("user", user);
  }

  async logout() {
    try {
      MessagesController.closeAll();

      await this.api.logout();

      router.go("/");
    } catch (e: any) {
      console.error(e.message);
    }
  }
}

export default new AuthController();
