import Block from '../../../../utils/Block';

import template from './message.hbs';

interface MessageProps {
  text?: string;
  image?: string;
  time: string;
  companion: boolean;
  active: boolean;
  isStateText: boolean,
}

export class Message extends Block {
  constructor(props: MessageProps) {
    super({
     ...props,

  });
  }

  render() {
    return this.compile(template, this.props);
  }
}
