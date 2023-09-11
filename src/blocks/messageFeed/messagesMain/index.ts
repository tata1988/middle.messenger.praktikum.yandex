import Block from "../../../utils/Block";
import template from "./messagesMain.hbs";
import { IMessage } from "../../../controllers/MessagesController";
import { withStore } from "../../../utils/Store";

interface IMessagesMain {
  selectedChat: number | undefined;
  messages: IMessage[];
  userId: number;
}

export class MessagesMainBase extends Block {
  constructor(props: IMessagesMain) {
    super({
      ...props,
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}

const withSelectedChatMessages = withStore((state) => {
  const selectedChatId = state.selectedChat;

  if (!selectedChatId) {
    return {
      messages: [],
      selectedChat: undefined,
      userId: state.user.id,
    };
  }

  return {
    messages: (state.messages || {})[selectedChatId] || [],
    selectedChat: state.selectedChat,
    userId: state.user.id,
  };
});

export const MessagesMain = withSelectedChatMessages(MessagesMainBase);
