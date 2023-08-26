import Block from '../../../utils/Block';
import photo from '../../../img/photo.jpg';
import template from './messagesMain.hbs';

export class MessagesMain extends Block {
  constructor() {
    super({
      messages: [
        {
          companion: true,
          active: false,
          isStateText: true,
          text: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой. Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
          time: '11:56',
        },
        {
          companion: true,
          active: false,
          isStateText: false,
          image: photo,
          time: '11:56',
        },
        {
          companion: false,
          active: true,
          isStateText: true,
          text: 'Круто',
          time: '11:56',
        },
      ],

    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
