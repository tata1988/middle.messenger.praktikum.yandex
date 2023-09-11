import Block from "../../utils/Block";
import template from "./chat.hbs";
import ChatsController from '../../controllers/ChatsController';

export class Chat extends Block {
  constructor() {
    super({
    });
  }

  protected init() {
    ChatsController.fetchChats();
  }

  render() {
    return this.compile(template, this.props);
  }
}
