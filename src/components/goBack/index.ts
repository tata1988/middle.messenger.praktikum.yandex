import Block from "../../utils/Block";
import template from "./line.hbs";

interface ILineProps {
  className: string;
}

export class Line extends Block {
  constructor(props: ILineProps) {
    super({
      ...props,
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
