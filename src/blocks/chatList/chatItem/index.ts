import Block from "../../../utils/Block";
import template from "./chatItem.hbs";
//import ChatsController from '../../controllers/ChatsController';
interface IChatItemProps {
  avatar: string;
  title: string;
  message: string;
  time: string;
  count: string;
  active?: boolean;
  events: {
    click: () => void;
  }
}
export class ChatItem extends Block {
  constructor(props: IChatItemProps) {
    super({
      ...props,
      onClick: () => {
        console.log('ghbdtn');
        
        //ChatsController.selectChat(id);
      }
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
