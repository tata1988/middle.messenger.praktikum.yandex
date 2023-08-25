import Block from '../../utils/Block';
import template from './avatarChange.hbs';

interface avatarChangeProps {
  name: string;
}

export class AvatarChange extends Block {
  constructor(props: avatarChangeProps) {
    super({
      ...props,
      name: 'Виталий',
      changeAvatar: (e: Event) => {
        e.preventDefault();
        console.log('Avatar')
      }
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
