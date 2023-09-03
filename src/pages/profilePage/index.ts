import Block from "../../utils/Block";;
import template from "./profile.hbs";
import { withStore } from "../../utils/Store";
import AuthController from "../../controllers/AuthController";

export class Profile extends Block {
  constructor() {
    super({
      title: {
        login: "login",
        password: "password",
        name: "name",
        email: "email",
        phone: "phone",
      },

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


const withUser = withStore((state) => ({ ...state.user }))
export const ProfilePage = withUser(Profile);