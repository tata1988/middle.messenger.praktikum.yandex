import Block from "../../utils/Block";
import template from "./title.hbs";

interface ITitleProps {
  title: string;
  className: string;
}

export class Title extends Block {
  constructor(props: ITitleProps) {
    super({
      ...props,
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
