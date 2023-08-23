import { Input } from '../../components/input';
import Block from '../../utils/Block';
import { render } from '../../utils/render';

import template from './chatList.hbs';

interface ChatItemProps {
  avatar: string;
  title: string;
  message: string;
  time: string;
  count: string;
  active?: boolean;
}


export class ChatList extends Block {
  constructor(props: ChatItemProps[]) {
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
        active: true}],
      search: (e: Event) => {
        e.preventDefault();
        //const login = this.refs.login;
        const searchValue = (this.refs.search as Input).value();
        
        if (!searchValue) {
            console.log({search: searchValue});
        } else {
          alert('Пожалуйста, введите запрос');
          return;
        }
      },
      
      link: () => {
        render('registration');
      }
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
