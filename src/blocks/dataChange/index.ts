import { Input } from '../../components/input';
import Block from '../../utils/Block';
import { validation } from '../../utils/validation';
import template from './dataChange.hbs';


export class DataChange extends Block {
  constructor() {
    super({
      pattern: {
          login: 'login',
          password: 'password',
          name: 'name',
          email: 'email',
          phone: 'phone',
      },

      dataChange: (e: Event) => {
          e.preventDefault();
          const email = this.refs.email;
          const login = this.refs.login;
          const firstName = this.refs.first_name;
          const secondName = this.refs.second_name;
          const displayName = this.refs.display_name;
          const phone = this.refs.phone;
          
          const loginValue = (login as Input).value();
          const emailValue = (email as Input).value();
          const firstNameValue = (firstName as Input).value();
          const displayNameValue = (displayName as Input).value();
          const secondNameValue = (secondName as Input).value();
          const phoneValue = (phone as Input).value();
          

          if (validation(login, loginValue) &&
              validation(email, emailValue) &&
              validation(firstName, firstNameValue) &&
              validation(secondName, secondNameValue) &&
              validation(displayName, displayNameValue) &&
              validation(phone, phoneValue)) {
              console.log({
                  login: loginValue,
                  email: emailValue,
                  firstName: firstNameValue,
                  secondName: secondNameValue,
                  displayName: displayNameValue,
                  phone: phoneValue
              });
          } else {
              alert('Пожалуйста, правильно заполните все поля');
              return;
          }
      }

  });
  }

  render() {
    return this.compile(template, this.props);
  }
}
