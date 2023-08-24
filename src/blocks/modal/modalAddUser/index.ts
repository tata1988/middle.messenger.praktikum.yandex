import { Input } from '../../../components/input';
import Block from '../../../utils/Block';
import { validation } from '../../../utils/validation';
import template from '../modal.hbs';

interface ModalProps {
  title: string;
  className: string;
  ref: string;
}

export class ModalAddUser extends Block {
  constructor(props: ModalProps) {
    super({
      ...props,
      title: 'Добавить пользователя',
      btnLabel: 'Добавить',
      onClick: (e: Event) => {
        e.preventDefault();
        const newLogin = this.refs.newLogin;
        const newLoginValue = (newLogin as Input).value();
        
        if (!validation(newLogin, newLoginValue)) {
          alert('Пожалуйста, правильно заполните поле');
          return;
        } else {
          console.log({login: newLoginValue});
          console.log(this.refs.add);
          //const setModalAddUser = this.refs.addUser;
          this.refs.modal.getContent()!.style.display = 'none';
        }

      }
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
