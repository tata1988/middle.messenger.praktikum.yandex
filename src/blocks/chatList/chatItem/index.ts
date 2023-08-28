import Block from "../../../utils/Block";
import template from "./chatItem.hbs";

interface IChatItemProps {
  avatar: string;
  title: string;
  message: string;
  time: string;
  count: string;
  active?: boolean;
}
export class ChatItem extends Block {
  constructor(props: IChatItemProps) {
    super({
      ...props,
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
