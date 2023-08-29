import Block from "../../utils/Block";
import template from "./avatarChange.hbs";
import avatar from "../../img/union.svg";
import { Input } from "../../components/input";

export class AvatarChange extends Block {
  constructor() {
    super({
      avatar,
      title: {
        download: "Загрузите файл",
        loaded: "Файл загружен"
      }, 
      isChangeAvatar: false,
      name: "Виталий",
      changeAvatar: (e: Event) => {
        e.preventDefault();
        this.setProps({isChangeAvatar: true})
      },
      onChange: (e: Event) => {
        e.preventDefault();
        const { avatar } = this.refs;
        const avatarValue = (avatar as Input).value();
        if (!avatarValue) {
          this.refs.titleAvatar.setProps({title: "Ошибка, попробуйте ещё раз"})
        } else {
          this.refs.labelAvatar.hide();
          const res = avatarValue?.replace(/\\/g, "/").split('/').pop();
          this.refs.avatarRes.setProps({label: res})
          this.refs.titleAvatar.setProps({title: "Файл загружен"});
          this.refs.error_avatar.hide();
        }
      },
      onClick: (e: Event) => {
        e.preventDefault();
        const { avatar } = this.refs;
        const avatarValue = (avatar as Input).value();

        if (!avatarValue) {
          this.refs.error_avatar.show();
        } else {
          this.refs.error_avatar.hide();
          this.setProps({isChangeAvatar: false});
        }
        
      }
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
