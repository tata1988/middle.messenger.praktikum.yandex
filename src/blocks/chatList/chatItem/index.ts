import { IChatInfo } from "../../../api/ChatsAPI";
//import { Chat } from "../../../pages/chat";
import Block from "../../../utils/Block";
import store, { withStore } from "../../../utils/Store";
import template from "./chatItem.hbs";
import ChatsController from '../../../controllers/ChatsController';
import cross from "../../../img/cross.svg";

interface IChatItemProps {
  id: number;
  title: string;
  unread_count: number;
  selectedChat: IChatInfo;
  events: {
    click: () => void;
  }
}

export class ChatItemBase extends Block {
  constructor(props: IChatItemProps) {
    super({
      ...props,
      deleteChat: () => {
        const idChat = store.getState().selectedChat;
        console.log('idChat', idChat);
        ChatsController.delete(idChat);
        
        
      },
      image: cross,
      events: { click: () => ChatsController.selectChat(props.id) } 
    });
  }

  render() {
    //console.log('ChatItem', this.props);
    return this.compile(template, {...this.props, isSelected: this.props.id === this.props.selectedChat?.id});
  }
}

export const withSelectedChat = withStore(state => ({
  selectedChat: (state.chats || []).find(({id}) => id === state.selectedChat)}));

export const ChatItem = withSelectedChat(ChatItemBase);
