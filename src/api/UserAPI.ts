import { IUser } from "./AuthAPI";
import BaseAPI from "./BaseAPI";

export interface IUserProfile {
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
}

export interface IUserPassword {
  oldPassword: string;
  newPassword: string;
}

export interface IUserSearch {
  id: number;
  first_name: string;
  second_name: string;
  display_name?: string;
  login: string;
  avatar?: string;
}

export class UserAPI extends BaseAPI {
  constructor() {
    super("/user");
  }

  changeProfile(data: IUserProfile) {
    return this.http.put("/profile", data);
  }

  changeAvatar(avatar: FormData) {
    return this.http.put("/profile/avatar", avatar);
  }

  changePassword(password: IUserPassword): Promise<unknown> {
    return this.http.put("/password", password);
  }

  read(id: number): Promise<IUser> {
    return this.http.get(`/${id}`);
  }

  search(login: string): Promise<Array<IUserSearch>> {
    return this.http.post("/search", { login });
  }

  create = undefined;

  update = undefined;

  delete = undefined;
}

export default new UserAPI();
