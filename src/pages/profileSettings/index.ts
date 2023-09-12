import { Input } from "../../components/input";
import Block from "../../utils/Block";
import { validation } from "../../utils/validation";
import template from "./profile.hbs";
import arrow from "../../img/right-arrow.svg";
import store, { withStore } from "../../utils/Store";
import AuthController from "../../controllers/AuthController";
import UserController from "../../controllers/UserController";
import Router from "../../utils/Router";

export class ProfileSettings extends Block {
  constructor(props: any) {
    super({
      ...props,
      pattern: {
        login: "login",
        password: "password",
        name: "name",
        email: "email",
        phone: "phone",
      },
      title: {
        login:
          "Поле должно содержать от 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание).",
        password:
          "Поле должно содержать от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра.",
        name: "Латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис).",
        email:
          "Поле должно содержать латиницу, может включать цифры и спецсимволы вроде дефиса и подчёркивания, обязательно должна быть «собака» (@) и точка после неё, но перед точкой обязательно должны быть буквы.",
        tel: "Поле должно содержать от 10 до 15 символов, состоит из цифр, может начинается с плюса.",
      },
      edit: false,
      isData: true,
      btnState: true,
      arrow,
      goBack: () => {
        Router.back();
      },
      changeData: () => {
        this.setProps({ edit: true, isData: true });
        const { login } = this.refs;
        const { email } = this.refs;
        const firstName = this.refs.first_name;
        const secondName = this.refs.second_name;
        const displayName = this.refs.display_name;
        const { phone } = this.refs;

        const storeUser = store.getState().user;

        (login as Input).setValue(storeUser.login);
        (email as Input).setValue(storeUser.email);
        (firstName as Input).setValue(storeUser.first_name);
        (secondName as Input).setValue(storeUser.second_name);
        (displayName as Input).setValue(storeUser.display_name);
        (phone as Input).setValue(storeUser.phone);
      },
      changePassword: () => {
        this.setProps({ edit: true, isData: false, btnState: false });

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
      blurDisplayName: (e: Event) => {
        e.preventDefault();
        const displayName = this.refs.display_name;
        const displayNameValue = (displayName as Input).value();
        if (!validation(displayName, displayNameValue)) {
          this.refs.error_display_name.show();
        } else {
          this.refs.error_display_name.hide();
        }
      },
      blurTel: (e: Event) => {
        e.preventDefault();
        const phone = this.refs.display_name;
        const phoneValue = (phone as Input).value();
        if (!validation(phone, phoneValue)) {
          this.refs.error_phone.show();
        } else {
          this.refs.error_phone.hide();
        }
      },
      blurOldPassword: (e: Event) => {
        e.preventDefault();
        const { oldPassword } = this.refs;
        const oldPasswordValue = (oldPassword as Input).value();
        if (!validation(oldPassword, oldPasswordValue)) {
          this.refs.error_old_password.show();
        } else {
          this.refs.error_old_password.hide();
        }
      },
      blurNewPassword: (e: Event) => {
        e.preventDefault();
        const { newPassword } = this.refs;
        const newPasswordValue = (newPassword as Input).value();
        if (!validation(newPassword, newPasswordValue)) {
          this.refs.error_new_password.show();
        } else {
          this.refs.error_new_password.hide();
        }
      },
      blurNewPasswordRepeat: (e: Event) => {
        e.preventDefault();
        const { newPasswordRepeat } = this.refs;
        const newPasswordRepeatValue = (newPasswordRepeat as Input).value();
        if (!validation(newPasswordRepeat, newPasswordRepeatValue)) {
          this.refs.error_new_password_repeat.show();
        } else {
          this.refs.error_new_password_repeat.hide();
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

        const storeUser = store.getState().user;

        (login as Input).setValue(storeUser.login);
        (email as Input).setValue(storeUser.email);

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
          const data = {
            login: loginValue,
            email: emailValue,
            display_name: displayNameValue,
            first_name: firstNameValue,
            second_name: secondNameValue,
            phone: phoneValue,
          };
          UserController.changeProfile(data);
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
          const password = {
            oldPassword: oldPasswordValue,
            newPassword: newPasswordValue,
          };
          UserController.changePassword(password);
          this.setProps({ edit: false, isData: true });
        } else {
          alert("Пожалуйста, правильно заполните все поля");
        }
      },
      link: () => {
        AuthController.logout();
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}

const withUser = withStore((state) => ({ ...state.user }));

export const ProfileSettingsPage = withUser(ProfileSettings);

