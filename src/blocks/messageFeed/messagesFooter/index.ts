import { Input } from "../../../components/input";
import Block from "../../../utils/Block";
import template from "./messagesFooter.hbs";
import clip from "../../../img/clip.svg";
import arrow from "../../../img/right-arrow.svg";

export class MessagesFooter extends Block {
  constructor() {
    super({
      clip,
      arrow,
      sendMessage: (e: Event) => {
        e.preventDefault();
        const { message } = this.refs;
        const messageValue = (message as Input).value();

        if (!messageValue) {
          alert("Пожалуйста, введите значение");
        } else {
          console.log({ message: messageValue });
        }
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
