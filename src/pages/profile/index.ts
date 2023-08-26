import { Input } from "../../components/input";
import Block from "../../utils/Block";
import { render } from "../../utils/render";
import { validation } from "../../utils/validation";
import template from "./profile.hbs";

export class Profile extends Block {
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
      edit: false,
      isData: true,
      btnState: true,

      changeData: () => {
        this.setProps({ edit: true, isData: true });
      },
      changePassword: () => {
        this.setProps({ edit: true, isData: false, btnState: false });
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
      blurDisplayName: (e: Event) => {
        e.preventDefault();
        const displayName = this.refs.display_name;
        const displayNameValue = (displayName as Input).value();
        if (!validation(displayName, displayNameValue)) {
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
      blurOldPassword: (e: Event) => {
        e.preventDefault();
        const { oldPassword } = this.refs;
        const oldPasswordValue = (oldPassword as Input).value();
        if (!validation(oldPassword, oldPasswordValue)) {
          console.log("Пожалуйста, правильно заполните поле");
        }
      },
      blurNewPassword: (e: Event) => {
        e.preventDefault();
        const { newPassword } = this.refs;
        const newPasswordValue = (newPassword as Input).value();
        if (!validation(newPassword, newPasswordValue)) {
          console.log("Пожалуйста, правильно заполните поле");
        }
      },
      blurNewPasswordRepeat: (e: Event) => {
        e.preventDefault();
        const { newPasswordRepeat } = this.refs;
        const newPasswordRepeatValue = (newPasswordRepeat as Input).value();
        if (!validation(newPasswordRepeat, newPasswordRepeatValue)) {
          console.log("Пожалуйста, правильно заполните поле");
        }
      },
      onClickData: (e: Event) => {
        e.preventDefault();

        const { login } = this.refs;
        const { email } = this.refs;
        const firstName = this.refs.first_name;
        const secondName = this.refs.second_name;
        const displayName = this.refs.display_name;
        const { phone } = this.refs;

        const loginValue = (login as Input).value();
        const emailValue = (email as Input).value();
        const firstNameValue = (firstName as Input).value();
        const secondNameValue = (secondName as Input).value();
        const displayNameValue = (displayName as Input).value();
        const phoneValue = (phone as Input).value();

        if (
          validation(login, loginValue) &&
          validation(email, emailValue) &&
          validation(firstName, firstNameValue) &&
          validation(displayName, displayNameValue) &&
          validation(secondName, secondNameValue) &&
          validation(phone, phoneValue)
        ) {
          console.log({
            login: loginValue,
            email: emailValue,
            firstName: firstNameValue,
            secondName: secondNameValue,
            phone: phoneValue,
          });
          this.setProps({ edit: false, isData: true });
        } else {
          alert("Пожалуйста, правильно заполните все поля");
        }
      },
      onClickPassword: (e: Event) => {
        e.preventDefault();

        const { oldPassword } = this.refs;
        const { newPassword } = this.refs;
        const { newPasswordRepeat } = this.refs;
        const oldPasswordValue = (oldPassword as Input).value();
        const newPasswordValue = (newPassword as Input).value();
        const newPasswordRepeatValue = (newPasswordRepeat as Input).value();

        if (
          validation(oldPassword, oldPasswordValue) &&
          validation(newPassword, newPasswordValue) &&
          validation(newPasswordRepeat, newPasswordRepeatValue) &&
          newPasswordValue === newPasswordRepeatValue
        ) {
          console.log({
            password: newPasswordValue,
          });
          this.setProps({ edit: false, isData: true });
        } else {
          console.log(
            "oldPasswordValue",
            oldPasswordValue,
            "newPassword",
            newPasswordValue,
            "newPasswordRepeatValue",
            newPasswordRepeatValue,
          );
          alert("Пожалуйста, правильно заполните все поля");
        }
      },
      link: () => {
        render("chat");
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
