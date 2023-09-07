import { ChatInfo } from "../../api/ChatsAPI";
import { Input } from "../../components/input";
import Block from "../../utils/Block";
import { withStore } from "../../utils/Store";
import template from "./chatList.hbs";
import Router from "../../utils/Router";

interface ChatsListProps {
  chats: ChatInfo[];
  isLoaded: boolean;
}

export class ChatsListBase extends Block {
  constructor(props: ChatsListProps) {
    super({
      ...props,
      chats: [
        {
          avatar: "",
          title: "Вадим",
          message: "В 2008 году художник Jon Rafman начал собирать...",
          time: "11:33",
          unread_count: "3",
        },
        {
          avatar: "",
          title: "Вадим",
          message: "В 2008 году художник Jon Rafman начал собирать...",
          time: "12:45",
          unread_count: "3",
          active: true,
        },
      ],
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
    return this.compile(template, this.props);
  }
}

const withChats = withStore((state) => ({chats: [...(state.chats || [])]}));

export const ChatsList = withChats(ChatsListBase);
