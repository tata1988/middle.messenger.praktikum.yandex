import { UserProfile } from "../../api/UserAPI";
import Block from "../../utils/Block";
import template from "./chatList.hbs";
import { ProfileField } from "./profileField";

interface IProfileFieldsListProps extends UserProfile {}

const userFields = ['id', 'first_name', 'second_name', 'display_name', 'login', 'avatar', 'email', 'phone'] as Array<keyof IProfileFieldsListProps>;

export class ProfileFieldsList extends Block {
  constructor(props: IProfileFieldsListProps) {
    super({
      ...props,
      fields: [
        
      ]
     
    });
  }

  protected componentDidUpdate(oldProps: IProfileFieldsListProps, newProps: IProfileFieldsListProps): boolean {

    (fields as ProfileField[]).forEach((field, i) => {
      field.setProps({  value: newProps[userFields[i]] });
    });

    /**
     * Другой вариант — просто заново создать всех детей. Но тогда метод должен возвращать true, чтобы новые дети отрендерились
     *
     * this.children.fields = userFields.map(name => {
     *   return new ProfileField({ name, value: newProps[name] });
     * });
     */

    /**
     * Так как мы обновили детей, этот компонент не обязательно рендерить
     */
    return false;
  }
  render() {
    return this.compile(template, this.props);
  }
}
