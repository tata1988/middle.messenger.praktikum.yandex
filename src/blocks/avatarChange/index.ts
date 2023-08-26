import Block from "../../utils/Block";
import template from "./avatarChange.hbs";
import avatar from "../../img/union.svg";

export class AvatarChange extends Block {
  constructor() {
    super({
      avatar,
      name: "Виталий",
      changeAvatar: (e: Event) => {
        e.preventDefault();
        console.log("Avatar");
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
