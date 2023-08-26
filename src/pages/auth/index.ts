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

      onBlurLogin: (e: Event) => {
        e.preventDefault();
        const { login } = this.refs;
        const loginValue = (this.refs.login as Input).value();
        if (validation(login, loginValue)) {
          console.log({ login: loginValue });
        } else {
          this.refs.error.getContent()!.style.display = 'block';
        }
      },

      onBlurPassword: (e: Event) => {
        e.preventDefault();
        const { password } = this.refs;
        const passwordValue = (this.refs.password as Input).value();
        if (validation(password, passwordValue)) {
          console.log({ password: passwordValue });
        } else {
          this.refs.error.getContent()!.style.display = 'block';
        }
      },

      login: (e: Event) => {
        e.preventDefault();
        const { login } = this.refs;
        const loginValue = (login as Input).value();
        const password = this.refs.login;
        const passwordValue = (this.refs.password as Input).value();

        if (validation(login, loginValue) && validation(password, passwordValue)) {
          console.log({
            login: loginValue,
            password: passwordValue,
          });
          render('chat');
        } else {
            this.refs.error.getContent()!.style.display = 'block';
        }
      },

      link: () => {
        render('registration');
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
