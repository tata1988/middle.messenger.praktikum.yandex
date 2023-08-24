import { Input } from '../../components/input';
import Block from '../../utils/Block';
import { render } from '../../utils/render';
import { validation } from '../../utils/validation';
import template from './profile.hbs';

interface ProfileProps {
  edit: boolean;
  isData: boolean;
}
export class Profile extends Block {
  constructor(props: ProfileProps) {
    super({
      ...props,
      pattern: {
        login: 'login',
        password: 'password',
        name: 'name',
        email: 'email',
        phone: 'phone',
      },
      edit: false,
      isData: true,
      btnState: true,
      changeData: () => {
        this.setProps({edit: true, isData: true})
        },
      changePassword: () => {
      this.setProps({edit: true, isData: false, btnState: false})
      },
      onClickData: (e: Event) => {
        e.preventDefault();
        console.log('onClickData');
        
        const login = this.refs.login;
        const email = this.refs.email;
        const firstName = this.refs.first_name;
        const secondName = this.refs.second_name;
        const displayName = this.refs.display_name;
        const phone = this.refs.phone;

        const loginValue = (login as Input).value();
        const emailValue = (email as Input).value();
        const firstNameValue = (firstName as Input).value();
        const secondNameValue = (secondName as Input).value();
        const displayNameValue = (displayName as Input).value();
        const phoneValue = (phone as Input).value();

        if (validation(login, loginValue) &&
            validation(email, emailValue) &&
            validation(firstName, firstNameValue) &&
            validation(displayName, displayNameValue) &&
            validation(secondName, secondNameValue) &&
            validation(phone, phoneValue)) {
            console.log({
                login: loginValue,
                email: emailValue,
                firstName: firstNameValue,
                secondName: secondNameValue,
                phone: phoneValue
            });
        } else {
            alert('Пожалуйста, правильно заполните все поля');
            return;
        }
      },
      onClickPassword: (e: Event) => {
        e.preventDefault();
        console.log('onClickPassword');
        
        const oldPassword = this.refs.oldPassword;
        const newPassword = this.refs.newPassword;
        const newPasswordRepeat = this.refs.newPasswordRepeat;
        const oldPasswordValue = (oldPassword as Input).value();
        const newPasswordValue = (newPassword as Input).value();
        const newPasswordRepeatValue = (newPasswordRepeat as Input).value();

        if (validation(oldPassword, oldPasswordValue) &&
            validation(newPassword, newPasswordValue) &&
            validation(newPasswordRepeat, newPasswordRepeatValue) &&
            newPasswordValue == newPasswordRepeatValue) {
            console.log({
              password: newPasswordValue,
            });
        } else {
          console.log('oldPasswordValue', oldPasswordValue, 'newPassword', newPasswordValue, 'newPasswordRepeatValue', newPasswordRepeatValue);
          alert('Пожалуйста, правильно заполните все поля');
            return;
        }
      },
      link: () => {
        render('chat');
      }
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
