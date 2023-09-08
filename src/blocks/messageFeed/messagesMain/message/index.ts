import Block from "../../../../utils/Block";
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
  isMine: boolean;
}

export class Message extends Block {
  constructor(props: IMessageProps) {
    super({
      ...props,
    });
  }

  render() {
    console.log('Message', this.props);
    
    return this.compile(template, this.props);
  }
}
