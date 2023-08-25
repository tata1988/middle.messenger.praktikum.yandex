import { Input } from '../../../components/input';
import Block from '../../../utils/Block';
import { validation } from '../../../utils/validation';

import template from './messagesHeader.hbs';

interface MessagesHeaderProps {
  avatar: string;
  name: string;
  isMenu: boolean;
  isStateAddUser: boolean;
  isStateDeleteUser: boolean;
}

export class MessagesHeader extends Block {
  constructor(props: MessagesHeaderProps) {
    super({
      ...props,
      avatar: '',
      name: 'Вадим',
      isMenu: false,
      isStateAddUser: false,
      isStateDeleteUser: false,

      menu: () => {
        this.setProps({ isMenu: true })
      },
      setModalUser: () => {
        this.setProps({ isStateAddUser: true });
      },
      setModalDeleteUser: () => {
        this.setProps({ isStateDeleteUser: true });

      },
      addUser: (e: Event) => {
        e.preventDefault();
        const newLogin = this.refs.newLogin;
        const newLoginValue = (newLogin as Input).value();

        if (!validation(newLogin, newLoginValue)) {
          alert('Пожалуйста, правильно заполните поле');
          return;
        } else {
          console.log({ login: newLoginValue });
          this.setProps({ isStateAddUser: false, isMenu: false });
        }
      },
      deleteUser: (e: Event) => {
        e.preventDefault();
        console.log("Пользователь удален");
        this.setProps({ isStateDeleteUser: false, isMenu: false });
      }

    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
