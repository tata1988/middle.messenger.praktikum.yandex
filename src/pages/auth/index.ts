import { SigninData } from "../../api/AuthAPI";
import { Input } from "../../components/input";
import AuthController from "../../controllers/AuthController";
import Block from "../../utils/Block";
import Router from "../../utils/Router";
import { validation } from "../../utils/validation";
import template from "./auth.hbs";

export class Auth extends Block {
  constructor() {
    super({
      pattern: {
        login: "login",
        password: "password",
      },

      onBlurLogin: (e: Event) => {
        e.preventDefault();
        const { login } = this.refs;
        const loginValue = (this.refs.login as Input).value();
        if (validation(login, loginValue)) {
          console.log({ login: loginValue });
        } else {
          this.refs.error.getContent()!.style.display = "block";
        }
      },

      onBlurPassword: (e: Event) => {
        e.preventDefault();
        const { password } = this.refs;
        const passwordValue = (this.refs.password as Input).value();
        if (validation(password, passwordValue)) {
          console.log({ password: passwordValue });
        } else {
          this.refs.error.getContent()!.style.display = "block";
        }
      },

      login: (e: Event) => {
        e.preventDefault();
        const { login } = this.refs;
        const loginValue = (login as Input).value();
        const password = this.refs.login;
        const passwordValue = (this.refs.password as Input).value();

        if (
          validation(login, loginValue) &&
          validation(password, passwordValue)
        ) {
          const data = {
            login: loginValue,
            password: passwordValue,
          }
      
          AuthController.signin(data as SigninData);
        } else {
          this.refs.error.getContent()!.style.display = "block";
        }
      },

      link: () => {
        Router.go('/sign-up')
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
