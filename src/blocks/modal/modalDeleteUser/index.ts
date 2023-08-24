import Block from '../../../utils/Block';
import template from '../modal.hbs';

interface ModalProps {
  title: string;
  className: string;
  refs: string;
}

export class ModalDeleteUser extends Block {
  constructor(props: ModalProps) {
    super({
      ...props,
      title: 'Удалить пользователя',
      btnLabel: 'Удалить',
      onclick: (e: Event) => {
        e.preventDefault();
        console.log("Пользователь удален");
        this.refs.delete.getContent()!.style.display = 'none';
      }
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
