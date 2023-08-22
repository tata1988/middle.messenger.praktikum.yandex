import Block from "../../utils/Block";
import template from "./error404.hbs";
import {render} from "../../utils/render";

export class ErrorPage404 extends Block {
  constructor() {
    super({
      type: 'button',
      class: 'className',
      onClick: () => {
        render('auth');
      }
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
