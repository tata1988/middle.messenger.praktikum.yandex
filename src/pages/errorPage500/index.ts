import Block from "../../utils/Block";
import template from "./error500.hbs";
import { render } from "../../utils/render";

export class ErrorPage500 extends Block {
  constructor() {
    super({
      type: "button",
      class: "className",
      onClick: () => {
        render("chat");
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
