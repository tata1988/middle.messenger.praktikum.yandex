import Block from "../../utils/Block";
import template from "./siteMap.hbs";
import { render } from "../../utils/render";

export class SiteMap extends Block {
  constructor() {
    super({
      linkAuth: () => {
        render("auth");
      },
      linkRegistration: () => {
        render("registration");
      },
      linkChat: () => {
        render("chat");
      },
      linkProfile: () => {
        render("profile");
      },
      linkError404: () => {
        render("error404");
      },
      linkError500: () => {
        render("error500");
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
