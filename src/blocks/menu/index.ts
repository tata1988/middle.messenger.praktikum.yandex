import Block from '../../utils/Block';
import template from './menu.hbs';

interface MenuProps {
  refs: string;
}

export class Menu extends Block {
  constructor(props: MenuProps) {
    super({
      ...props,
      
      setModalUser: () => {
        const setModalAddUser = this.refs.add;
        
        setModalAddUser.getContent()!.style.display = 'flex';
      },
      setModalDeleteUser: () => {
        const setModalAddUser = this.refs.delete;
        setModalAddUser.getContent()!.style.display = 'flex';
      }
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
