import Block from "../../utils/Block";
import template from "./avatar.hbs";

export class Avatar extends Block {
  constructor() {
    super({
  
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
