import Block from "../../../utils/Block";
import template from "./messagesMain.hbs";

import { Message } from "../../../controllers/MessagesController";
import { withStore } from "../../../utils/Store";

interface IMessagesMain {
  selectedChat: number | undefined;
  messages: Message[];
  userId: number;
}

export class MessagesMain extends Block {
  constructor(props: IMessagesMain) {
    super({
        ...props,
    });
  }

  render() {
    console.log('MessagesMain', this.props);
    return this.compile(template, this.props);
  }
}

const withSelectedChatMessages = withStore(state => {
  const selectedChatId = state.selectedChat;

  if (!selectedChatId) {
    
    return {
      messages: [],
      selectedChat: undefined,
      userId: state.user.id
    };
  }

  return {
    messages: (state.messages || {})[selectedChatId] || [],
    selectedChat: state.selectedChat,
    userId: state.user.id
  };
});

export const MessengerPage = withSelectedChatMessages(MessagesMain);

