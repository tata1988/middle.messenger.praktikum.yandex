import Block from "../../../utils/Block";
import template from "./chatItem.hbs";

interface ChatItemProps {
  avatar: string;
  title: string;
  message: string;
  time: string;
  count: string;
  active?: boolean;
}
export class ChatItem extends Block {
  constructor(props: ChatItemProps) {
    super({
      ...props,
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
