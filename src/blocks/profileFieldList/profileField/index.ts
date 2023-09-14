import Block from "../../../utils/Block";
import template from "./profileField.hbs";

interface IProfileFieldProps {
  name: string;
  value: string | number;
}

export class ProfileField extends Block {
  constructor(props: IProfileFieldProps) {
    super({
      ...props,
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
