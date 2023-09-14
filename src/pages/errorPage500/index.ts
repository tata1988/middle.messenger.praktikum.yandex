import Block from "../../utils/Block";
import template from "./error500.hbs";
import Router from "../../utils/Router";

export class ErrorPage500 extends Block {
  constructor() {
    super({
      type: "button",
      class: "className",
      onClick: () => {
        Router.go("/messenger");
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
