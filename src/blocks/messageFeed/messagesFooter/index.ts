import { Input } from '../../../components/input';
import Block from '../../../utils/Block';
import template from './messagesFooter.hbs';

export class MessagesFooter extends Block {
  constructor() {
    super({
      sendMessage: (e: Event) => {
        e.preventDefault();
        const message = this.refs.message;
        const messageValue = (message as Input).value();
        
        if (!messageValue) {
          alert('Пожалуйста, введите значение');
          return;
        } else {
          console.log({message: messageValue});
        }
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
