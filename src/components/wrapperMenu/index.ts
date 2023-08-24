import Block from '../../utils/Block';
import template from './wrapperMenu.hbs';

interface WrapperMenuProps {
  className: string, 
  ref: string
}
export class WrapperMenu extends Block {
  constructor(props: WrapperMenuProps) {
    super({
      ...props
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
