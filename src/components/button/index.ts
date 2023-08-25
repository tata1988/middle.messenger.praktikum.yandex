import Block from '../../utils/Block';
import template from './button.hbs';

interface ButtonProps {
  label: any;
  type?: 'submit' | 'button';
  className: string;
  onClick?: () => void;
  events: {
    click: () => void;
  };
}

export class Button extends Block {
  constructor(props: ButtonProps) {
    super({
      ...props,
      events: {
        click: props.onClick
      }
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
