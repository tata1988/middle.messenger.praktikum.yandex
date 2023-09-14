import { IChatInfo } from "../../../api/ChatsAPI";
import Block from "../../../utils/Block";
import store, { withStore } from "../../../utils/Store";
import template from "./chatItem.hbs";
import ChatsController from "../../../controllers/ChatsController";
import cross from "../../../img/cross.svg";

interface IChatItemProps {
  id: number;
  title: string;
  unread_count: number;
  selectedChat: IChatInfo;
  events: {
    click: () => void;
  };
}

export class ChatItemBase extends Block {
  constructor(props: IChatItemProps) {
    super({
      ...props,
      deleteChat: () => {
        const idChat = store.getState().selectedChat;
        ChatsController.delete(idChat);
      },
      image: cross,
      events: { click: () => ChatsController.selectChat(props.id) },
    });
  }

  render() {
    return this.compile(template, {
      ...this.props,
      isSelected: this.props.id === this.props.selectedChat?.id,
      avatar:
        this.props.avatar !== null
          ? `https://ya-praktikum.tech/api/v2/resources/${this.props.avatar}`
          : this.props.avatar,
    });
  }
}

export const withSelectedChat = withStore((state) => ({
  selectedChat: (state.chats || []).find(({ id }) => id === state.selectedChat),
}));

export const ChatItem = withSelectedChat(ChatItemBase);
