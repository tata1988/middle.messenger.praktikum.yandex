import Block from "../../../../utils/Block";
import { withStore } from "../../../../utils/Store";
import template from "./message.hbs";

/* interface IMessageProps {
  text?: string;
  image?: string;
  time: string;
  companion: boolean;
  active: boolean;
  isStateText: boolean;
} */

interface IMessageProps {
  content: string;
  time: string;
}

export class MessageBase extends Block {
  constructor(props: IMessageProps) {
    super({
      ...props,
    });
  }

  render() {
    return this.compile(template, {
      ...this.props,
      isMine: this.props.userId === this.props.userIdChat,
    });
  }
}

export const withSelectedChatMessage = withStore((state) => {
  return { userId: state.user.id };
});

export const Message = withSelectedChatMessage(MessageBase);
