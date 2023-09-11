import Block from "../../utils/Block";;
import template from "./profileFieldsList.hbs";
import { withStore } from "../../utils/Store";
import AuthController from "../../controllers/AuthController";
import { IUser } from "../../api/AuthAPI";

interface IProfileProps extends IUser {}

export class FieldsList extends Block {
  constructor(props: IProfileProps) {
    super({
      ...props,
      changeData: () => {
        this.setProps({ edit: true, isData: true });
      },
      changePassword: () => {
        this.setProps({ edit: true, isData: false, btnState: false });
      },
      link: () => {
        AuthController.logout();
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}


const withUser = withStore((state) => ({ 
  fields: [
  {name: 'Почта', value: state.user.email},
  {name: 'Логин', value: state.user.login},
  {name: 'Имя', value: state.user.first_name},
  {name: 'Фамилия', value: state.user.second_name},
  {name: 'Имя в чате', value: state.user.display_name},
  {name: 'Телефон', value: state.user.phone},
  ],
  avatar: `https://ya-praktikum.tech/api/v2/resources/${state.user.avatar}`}))
export const ProfileFieldsList = withUser(FieldsList);



