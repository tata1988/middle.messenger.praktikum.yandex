import Block from '../../utils/Block';
import template from './line.hbs';

interface LineProps {
  className: string;
}

export class Line extends Block {
  constructor(props: LineProps) {
    super({
      ...props,
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
