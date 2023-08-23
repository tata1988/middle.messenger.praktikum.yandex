import Block from '../../../utils/Block';

import template from './chatItem.hbs';

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
      chats: [{ avatar: 'ghbbb',
        title: 'Вадим',
        message: 'В 2008 году художник Jon Rafman  начал собирать...',
        time: 'string',
        count: 'string'},
        { avatar: 'ghbbb',
        title: 'Вадим',
        message: 'В 2008 году художник Jon Rafman  начал собирать...',
        time: 'string',
        count: 'string',
        active: true}]
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
