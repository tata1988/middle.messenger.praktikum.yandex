import Block from '../../utils/Block';
import { render } from '../../utils/render';
import template from './profile.hbs';

export class Profile extends Block {
  constructor() {
    super({
      link: () => {
        render('chat');
      }
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
