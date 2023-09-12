import Block from "../../utils/Block";
import template from "./avatarChange.hbs";
import { Input } from "../../components/input";
import UserController from "../../controllers/UserController";
import { withStore } from "../../utils/Store";

interface IAvatar {
  name: string;
  avatar: string;
}

export class AvatarChangeBase extends Block {
  constructor(props: IAvatar) {
    super({
      ...props,
      title: {
        download: "Загрузите файл",
        loaded: "Файл загружен",
      },
      isChangeAvatar: false,
      changeAvatar: (e: Event) => {
        e.preventDefault();
        this.setProps({ isChangeAvatar: true });
      },
      onChange: (e: Event) => {
        e.preventDefault();
        const { avatar } = this.refs;
        const avatarValue = (avatar as Input).value();
        if (!avatarValue) {
          this.refs.titleAvatar.setProps({
            title: "Ошибка, попробуйте ещё раз",
          });
        } else {
          this.refs.labelAvatar.hide();
          const res = avatarValue?.replace(/\\/g, "/").split("/").pop();
          this.refs.avatarRes.setProps({ label: res });
          this.refs.titleAvatar.setProps({ title: "Файл загружен" });
          this.refs.error_avatar.hide();
        }
      },
      onClick: (e: Event) => {
        e.preventDefault();
        const { avatar } = this.refs;
        const avatarValue = (avatar as Input).value();
        const files: FileList | null = (avatar as Input).files();
        const file = files ? files[0] : "nofile";

        const formData: FormData = new FormData();
        formData.append("avatar", file);

        if (!avatarValue) {
          this.refs.error_avatar.show();
        } else {
          this.refs.error_avatar.hide();
          UserController.changeAvatar(formData);

          this.setProps({ isChangeAvatar: false });
        }
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}

const withAvatar = withStore((state) => ({
  avatar: `https://ya-praktikum.tech/api/v2/resources/${state.user.avatar}`,
  name: state.user.login,
}));

export const AvatarChange = withAvatar(AvatarChangeBase);
