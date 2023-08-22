import { Input } from '../../components/input';
import Block from '../../utils/Block';
import { render } from '../../utils/render';
import { validation } from '../../utils/validation';

import template from './auth.hbs';

export class Auth extends Block {
  constructor() {
    super({
    pattern: {
      login: 'login',
      password: 'password',
    },
      titleLogin: 'Ошибка',
      login: (e: Event) => {
        e.preventDefault();
        const login = this.refs.login;
        const password = this.refs.password;
        const loginValue = (this.refs.login as Input).value();
        const passwordValue = (this.refs.password as Input).value();

        if (!loginValue || !passwordValue) {
          alert('Пожалуйста, заполните все поля');
          return;
        } 

        if (validation(login, loginValue) && validation(password, passwordValue)) {
            console.log({login: loginValue,
                        password: passwordValue
            });
        } else {
          alert('Пожалуйста, правильно заполните все поля');
          return;
        }
      },
      
      link: () => {
        render('error404');
      }
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
