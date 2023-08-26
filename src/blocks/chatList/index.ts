import { Input } from "../../components/input";
import Block from "../../utils/Block";
import { render } from "../../utils/render";
import template from "./chatList.hbs";

interface IChatItemProps {
  avatar: string;
  title: string;
  message: string;
  time: string;
  count: string;
  active?: boolean;
}

export class ChatList extends Block {
  constructor(props: IChatItemProps[]) {
    super({
      ...props,
      chats: [
        {
          avatar: "",
          title: "Вадим",
          message: "В 2008 году художник Jon Rafman начал собирать...",
          time: "11:33",
          count: "3",
        },
        {
          avatar: "",
          title: "Вадим",
          message: "В 2008 году художник Jon Rafman начал собирать...",
          time: "12:45",
          count: "3",
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
        render("profile");
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
