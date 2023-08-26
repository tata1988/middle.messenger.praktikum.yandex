import Block from "../../utils/Block";
import template from "./title.hbs";

interface TitleProps {
  title: string;
  className: string;
}

export class Title extends Block {
  constructor(props: TitleProps) {
    super({
      ...props,
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
