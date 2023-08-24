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
        
        if (!validation(login, loginValue) && !validation(password, passwordValue)) {
          
          alert('Пожалуйста, правильно заполните все поля');
          this.refs.error.getContent()!.style.display = 'block';
          return;
        } else {
          console.log({login: loginValue,
          password: passwordValue});
          render('chat');
        }
        
      },
      
      link: () => {
        render('registration');
      }
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
