import Block from '../../../utils/Block';
import template from './MessagesHeader.hbs';

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
        console.log('Сделать меню')
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
