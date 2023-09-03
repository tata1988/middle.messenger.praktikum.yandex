import BaseAPI from './BaseAPI';

export interface UserProfile {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
  avatar: string;
}

export interface UserPassword {
  oldPassword: string;
  newPassword: string;
}

export class UserAPI extends BaseAPI {
  constructor() {
    super('/user');
  }

  changeProfile(data: UserProfile): Promise<unknown> {
    return this.http.put('/profile', data);
  }

  changeAvatar(avatar: string): Promise<unknown> {
    return this.http.put('/profile/avatar', avatar);
  }

  changePassword(password: UserPassword): Promise<unknown> {
    return this.http.put('/password', password);
  }

  read(id: number): Promise<UserProfile> {
    return this.http.get(`/${id}`);
  }

  searchUser() {
    return this.http.post('/search');
  }

  create = undefined;
  update = undefined;
  delete = undefined;
}

export default new UserAPI();
