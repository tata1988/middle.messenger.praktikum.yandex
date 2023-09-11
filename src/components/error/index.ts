import Block from "../../utils/Block";
import template from "./error.hbs";

interface IErrorProps {
  className: string;
  message: string;
  ref: string;
}

export class Error extends Block {
  constructor(props: IErrorProps) {
    super({
      ...props,
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
