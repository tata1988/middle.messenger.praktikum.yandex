import Block from "../../utils/Block";;
import template from "./profilePage.hbs";
import { withStore } from "../../utils/Store";
import AuthController from "../../controllers/AuthController";
import { User } from "../../api/AuthAPI";

interface IProfileProps extends User {}

export class Profile extends Block {
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
  avatar: state.user.avatar}))
export const ProfilePage = withUser(Profile);

