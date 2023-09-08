import { ChatInfo } from "../../api/ChatsAPI";
import { Input } from "../../components/input";
import Block from "../../utils/Block";
import { withStore } from "../../utils/Store";
import template from "./chatList.hbs";
import Router from "../../utils/Router";
import ChatsController from '../../controllers/ChatsController';
import { ChatItem } from "./chatItem";

interface ChatsListProps {
  chats: ChatInfo[];
  //isLoaded: boolean;
}

export class ChatsListBase extends Block {
  constructor(props: ChatsListProps) {
    super({
      ...props,
    
      addChat: (e: Event) => {
        e.preventDefault();
        const addChat = this.refs.addChat;
        const addChatValue = (addChat as Input).value();
        if (!addChatValue) {
          alert("Пожалуйста, введите запрос");
        } else {
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
        Router.go('profile');
      },
    });
  }

  render() {
    console.log('chatlist', this.props);
    return this.compile(template, this.props);
  }
}

const withChats = withStore((state) => ({ 
  chats: [...(state.chats || [])] }));

export const ChatsList = withChats(ChatsListBase);
withChats(ChatItem);
