import Block from '../../../utils/Block';

import template from './messagesHeader.hbs';

interface MessagesHeaderProps {
  avatar: string;
  name: string;
}

export class MessagesHeader extends Block {
  constructor(props: MessagesHeaderProps) {
    super({
      ...props,
      avatar: '',
      name: 'Вадим',
      menu: () => {
        const menu = this.refs.menu;
        if (menu.getContent()!.style.display == '') {
          menu.getContent()!.style.display = 'flex'
        } else {
          menu.getContent()!.style.display = '';
        }
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
