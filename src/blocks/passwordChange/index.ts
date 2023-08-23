import { Input } from '../../components/input';
import Block from '../../utils/Block';
import { validation } from '../../utils/validation';
import template from './passwordChange.hbs';


export class PasswordChange extends Block {
  constructor() {
    super({
      pattern: {
        password: 'password',
      },

      passwordChange: (e: Event) => {
        e.preventDefault();
        const oldPassword = this.refs.oldPassword;
        const newPassword = this.refs.newPassword;
        const newPasswordRepeat = this.refs.newPasswordRepeat;
        
        const oldPasswordValue = (oldPassword as Input).value();
        const newPasswordValue = (newPassword as Input).value();
        const newPasswordRepeatValue = (newPasswordRepeat as Input).value();

        if (validation(oldPassword, oldPasswordValue) &&
            validation(newPassword, newPasswordValue) &&
            validation(newPasswordRepeat, newPasswordRepeatValue)) {
            console.log({
              newPassword: newPasswordValue,
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
