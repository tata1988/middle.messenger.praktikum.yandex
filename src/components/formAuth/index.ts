import Block from '../../utils/Block';

import template from './formAuth.hbs';

export class FormAuth extends Block {
  constructor() {
    super({
      inputLogin: (e: Event) => {
        console.log(e.target)
      },
      auth: (e: Event) => {
        e.preventDefault();
        console.log('Submit');
      },
    });
  }


  render() {
    return this.compile(template, this.props);
  }
}
