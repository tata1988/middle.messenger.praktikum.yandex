import { IChatInfo } from "../../api/ChatsAPI";
import { Input } from "../../components/input";
import Block from "../../utils/Block";
import { withStore } from "../../utils/Store";
import template from "./chatList.hbs";
import Router from "../../utils/Router";
import ChatsController from '../../controllers/ChatsController';
import { ChatItem } from "./chatItem";

interface IChatsListProps {
  chats: IChatInfo[];
  //isLoaded: boolean;
}

export class ChatsListBase extends Block {
  constructor(props: IChatsListProps) {
    super({
      ...props,
      isAddChat: false,
      showInputAddChat: () => {
        this.setProps({ isAddChat: true });
      },

      addChat: (e: Event) => {
        e.preventDefault();
        const addChat = this.refs.addChat;
        const addChatValue = (addChat as Input).value();
        if (!addChatValue) {
          alert("Пожалуйста, введите запрос");
        } else {
          this.setProps({ isAddChat: false });
          ChatsController.create(addChatValue); 
        }
      },

      search: (e: Event) => {
        e.preventDefault();
        const { search } = this.refs;
        const searchValue = (search as Input).value();

        if (!searchValue) {
          alert("Пожалуйста, введите запрос");
        } else {
          console.log({ search: searchValue });
        }
      },
      link: () => {
        Router.go('/settings');
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}

const withChats = withStore((state) => ({
  chats: [...(state.chats || [])]
}));

export const ChatsList = withChats(ChatsListBase);
withChats(ChatItem);
