import { registerComponent } from './utils/registerComponent';
import { render } from './utils/render';

import './index.scss';

import { Button } from './components/button';
import { Input } from './components/input';
import { Title } from './components/title';
import { Label } from './components/label';
import { Line } from './components/line';
import { ChatItem } from './blocks/chatList/chatItem';
import { ChatList } from './blocks/chatList';
import { MessagesHeader } from './blocks/messageFeed/messagesHeader';
import { Message } from './blocks/messageFeed/messagesMain/message';
import { MessagesMain } from './blocks/messageFeed/messagesMain';
import { MessagesFooter } from './blocks/messageFeed/messagesFooter';
import { AvatarChange } from './blocks/avatarChange';
import { Error } from './components/error';

registerComponent('Button', Button);
registerComponent('ButtonSubmit', Button);
registerComponent('Input', Input);
registerComponent('Title', Title);
registerComponent('Label', Label);
registerComponent('Line', Line);
registerComponent('Error', Error);
registerComponent('ChatItem', ChatItem);
registerComponent('ChatList', ChatList);
registerComponent('MessagesHeader', MessagesHeader);
registerComponent('Message', Message);
registerComponent('MessagesMain', MessagesMain);
registerComponent('MessagesFooter', MessagesFooter);
registerComponent('AvatarChange', AvatarChange);

window.addEventListener('DOMContentLoaded', () => {
  render('homePage');
});
