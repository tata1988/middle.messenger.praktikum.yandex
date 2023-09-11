import Block from "../../utils/Block";
import Router from "../../utils/Router";
import template from "./error404.hbs";

export class ErrorPage404 extends Block {
  constructor() {
    super({
      type: "button",
      class: "className",
      onClick: () => {
        Router.go('/messenger');
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
