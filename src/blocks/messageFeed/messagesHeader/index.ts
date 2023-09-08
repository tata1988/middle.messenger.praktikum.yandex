import { Input } from "../../../components/input";
import Block from "../../../utils/Block";
import { validation } from "../../../utils/validation";
import cross from "../../../img/cross.svg";
import menuImg from "../../../img/btn.svg";
import template from "./messagesHeader.hbs";
import store from "../../../utils/Store";
import ChatsController from '../../../controllers/ChatsController';

export class MessagesHeader extends Block {
  constructor(props: any) {
    super({
      ...props,
      image: cross,
      menuImg,
      avatar: "",
      title: "Вадим",
      isMenu: false,
      isStateAddUser: false,
      isStateDeleteUser: false,

      menu: () => {
        this.setProps({ isMenu: true });
      },
      setModalUser: () => {
        this.setProps({ isStateAddUser: true });
      },
      setModalDeleteUser: () => {
        this.setProps({ isStateDeleteUser: true });
      },
      addUser: (e: Event) => {
        e.preventDefault();
        const { newLogin } = this.refs;
        const newLoginValue = (newLogin as Input).value();

        if (!validation(newLogin, newLoginValue)) {
          alert("Пожалуйста, правильно заполните поле");
        } else {
          console.log({ login: newLoginValue });
          const selectedChat = store.getState().selectedChat;
          ChatsController.addUserToChat(selectedChat, +newLoginValue);
          this.setProps({ isStateAddUser: false, isMenu: false });
        }
      },
      deleteUser: (e: Event) => {
        e.preventDefault();
        console.log("Пользователь удален");
        this.setProps({ isStateDeleteUser: false, isMenu: false });
      },
    });
  }

  render() {

    return this.compile(template, this.props);
  }
}


