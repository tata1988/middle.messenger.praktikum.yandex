import { ISignupData } from "../../api/AuthAPI";
import { Input } from "../../components/input";
import AuthController from "../../controllers/AuthController";
import Block from "../../utils/Block";
import Router from "../../utils/Router";
import { validation } from "../../utils/validation";
import template from "./registration.hbs";

export class Registration extends Block {
  constructor() {
    super({
      pattern: {
        login: "login",
        password: "password",
        name: "name",
        email: "email",
        phone: "phone",
      },

      title: {
        login:
          "от 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание).",
        password:
          "от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра.",
        name: "Латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис).",
        email:
          "Латиница, может включать цифры и спецсимволы вроде дефиса и подчёркивания, обязательно должна быть «собака» (@) и точка после неё, но перед точкой обязательно должны быть буквы.",
        tel: "от 10 до 15 символов, состоит из цифр, может начинается с плюса.",
      },

      blurEmail: (e: Event) => {
        e.preventDefault();
        const { email } = this.refs;
        const emailValue = (email as Input).value();
        if (!validation(email, emailValue)) {
          this.refs.error_email.show();
        } else {
          this.refs.error_email.hide();
        }
      },
      blurLogin: (e: Event) => {
        e.preventDefault();
        const { login } = this.refs;
        const loginValue = (login as Input).value();
        if (!validation(login, loginValue)) {
          this.refs.error_login.show();
        } else {
          this.refs.error_login.hide();
        }
      },
      blurFirstName: (e: Event) => {
        e.preventDefault();
        const firstName = this.refs.first_name;
        const firstNameValue = (firstName as Input).value();
        if (!validation(firstName, firstNameValue)) {
          this.refs.error_first_name.show();
        } else {
          this.refs.error_first_name.hide();
        }
      },
      blurSecondName: (e: Event) => {
        e.preventDefault();
        const secondName = this.refs.second_name;
        const secondNameValue = (secondName as Input).value();
        if (!validation(secondName, secondNameValue)) {
          this.refs.error_second_name.show();
        } else {
          this.refs.error_second_name.hide();
        }
      },
      blurTel: (e: Event) => {
        e.preventDefault();
        const { phone } = this.refs;
        const phoneValue = (phone as Input).value();
        if (!validation(phone, phoneValue)) {
          this.refs.error_phone.show();
        } else {
          this.refs.error_phone.hide();
        }
      },
      blurPassword: (e: Event) => {
        e.preventDefault();
        const { password } = this.refs;
        const passwordValue = (this.refs.password as Input).value();
        if (!validation(password, passwordValue)) {
          this.refs.error_password.show();
        } else {
          this.refs.error_password.hide();
        }
      },
      blurPasswordAgain: (e: Event) => {
        e.preventDefault();
        const passwordAgain = this.refs.password_again;
        const passwordAgainValue = (passwordAgain as Input).value();
        if (!validation(passwordAgain, passwordAgainValue)) {
          this.refs.error_password_again.show();
        } else {
          this.refs.error_password_again.hide();
        }
      },

      registration: (e: Event) => {
        e.preventDefault();
        const { login } = this.refs;
        const { email } = this.refs;
        const firstName = this.refs.first_name;
        const secondName = this.refs.second_name;
        const { phone } = this.refs;
        const { password } = this.refs;
        const passwordAgain = this.refs.password_again;

        const loginValue = (login as Input).value();
        const emailValue = (email as Input).value();
        const firstNameValue = (firstName as Input).value();
        const secondNameValue = (secondName as Input).value();
        const phoneValue = (phone as Input).value();
        const passwordValue = (password as Input).value();
        const passwordAgainValue = (passwordAgain as Input).value();

        if (
          validation(login, loginValue) &&
          validation(password, passwordValue) &&
          validation(email, emailValue) &&
          validation(firstName, firstNameValue) &&
          validation(secondName, secondNameValue) &&
          validation(phone, phoneValue) &&
          validation(passwordAgain, passwordAgainValue) &&
          passwordValue === passwordAgainValue
        ) {
          const data = {
            login: loginValue,
            password: passwordValue,
            email: emailValue,
            first_name: firstNameValue,
            second_name: secondNameValue,
            phone: phoneValue,
          }
          AuthController.signup(data as ISignupData);
        } else {
          alert("Пожалуйста, правильно заполните все поля");
        }
      },

      link: () => {
        Router.go('/');
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
