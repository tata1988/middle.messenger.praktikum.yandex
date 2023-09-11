import Block from "../../utils/Block";
import template from "./label.hbs";

interface ILabelProps {
  label: string;
  for: string;
  className: string;
}

export class Label extends Block {
  constructor(props: ILabelProps) {
    super({
      ...props,
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
