import BaseAPI from './BaseAPI';

export interface ISigninData {
  login: string;
  password: string;
}

export interface ISignupData {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
}

export interface IUser {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
  avatar: string;
}

export class AuthAPI extends BaseAPI {
  constructor() {
    super('/auth');
  }

  signin(data: ISigninData) {
    return this.http.post('/signin', data);
  }


  signup(data: ISignupData) {
    return this.http.post('/signup', data);
  }

  read(): Promise<IUser> {
    return this.http.get('/user');
  }

  logout() {
    return this.http.post('/logout');
  }

  create = undefined;
  update = undefined;
  delete = undefined;
}

export default new AuthAPI();
