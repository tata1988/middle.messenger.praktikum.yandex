import { User } from './AuthAPI';
import BaseAPI from './BaseAPI';

export interface UserProfile {
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
}

export interface UserPassword {
  oldPassword: string;
  newPassword: string;
}

export interface UserSearch {
    id: number;
    first_name: string;
    second_name: string;
    display_name?: string,
    login: string;
    avatar?: string;
  }


export class UserAPI extends BaseAPI {
  constructor() {
    super('/user');
  }

  changeProfile(data: UserProfile) {
    return this.http.put('/profile', data);
  }

  changeAvatar(avatar: FormData) {
    return this.http.put('/profile/avatar', avatar);
  }

  changePassword(password: UserPassword): Promise<unknown> {
    return this.http.put('/password', password);
  }

  read(id: number): Promise<User> {
    return this.http.get(`/${id}`);
  }

  search(login: string): Promise<Array<UserSearch>> {
    return this.http.post('/search', { login });
  }

  create = undefined;
  update = undefined;
  delete = undefined;
}
 
export default new UserAPI();
