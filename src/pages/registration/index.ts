import { Input } from "../../components/input";
import Block from "../../utils/Block";
import { render } from "../../utils/render";
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
          console.log("Пожалуйста, правильно заполните поле");
        }
      },
      blurLogin: (e: Event) => {
        e.preventDefault();
        const { login } = this.refs;
        const loginValue = (login as Input).value();
        if (!validation(login, loginValue)) {
          console.log("Пожалуйста, правильно заполните поле");
        }
      },
      blurFirstName: (e: Event) => {
        e.preventDefault();
        const firstName = this.refs.first_name;
        const firstNameValue = (firstName as Input).value();
        if (!validation(firstName, firstNameValue)) {
          console.log("Пожалуйста, правильно заполните поле");
        }
      },
      blurSecondName: (e: Event) => {
        e.preventDefault();
        const secondName = this.refs.second_name;
        const secondNameValue = (secondName as Input).value();
        if (!validation(secondName, secondNameValue)) {
          console.log("Пожалуйста, правильно заполните поле");
        }
      },
      blurTel: (e: Event) => {
        e.preventDefault();
        const { phone } = this.refs;
        const phoneValue = (phone as Input).value();
        if (!validation(phone, phoneValue)) {
          console.log("Пожалуйста, правильно заполните поле");
        }
      },
      blurPassword: (e: Event) => {
        e.preventDefault();
        const { password } = this.refs;
        const passwordValue = (this.refs.password as Input).value();
        if (!validation(password, passwordValue)) {
          console.log("Пожалуйста, правильно заполните поле");
        }
      },
      blurPasswordAgain: (e: Event) => {
        e.preventDefault();
        const passwordAgain = this.refs.password_again;
        const passwordAgainValue = (passwordAgain as Input).value();
        if (!validation(passwordAgain, passwordAgainValue)) {
          console.log("Пожалуйста, правильно заполните поле");
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
          console.log({
            login: loginValue,
            password: passwordValue,
            email: emailValue,
            firstName: firstNameValue,
            secondName: secondNameValue,
            phone: phoneValue,
          });
          render("chat");
        } else {
          alert("Пожалуйста, правильно заполните все поля");
        }
      },

      link: () => {
        render("auth");
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
