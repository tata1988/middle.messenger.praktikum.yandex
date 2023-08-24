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
import { WrapperMenu } from './components/wrapperMenu';
import { Menu } from './blocks/menu';
import { MessagesHeader } from './blocks/messageFeed/messagesHeader';
import { MessagesFooter } from './blocks/messageFeed/messagesFooter';
import { DataChange } from './blocks/dataChange';
import { PasswordChange } from './blocks/passwordChange';
import { AvatarChange } from './blocks/avatarChange';
import { ModalAddUser } from './blocks/modal/modalAddUser';
import { ModalDeleteUser } from './blocks/modal/modalDeleteUser';
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
registerComponent('wrapperMenu', WrapperMenu);
registerComponent('Menu', Menu);
registerComponent('ModalAddUser', ModalAddUser);
registerComponent('ModalDeleteUser', ModalDeleteUser);
registerComponent('MessagesHeader', MessagesHeader);
registerComponent('MessagesFooter', MessagesFooter);
registerComponent('AvatarChange', AvatarChange);
registerComponent('DataChange', DataChange);
registerComponent('PasswordChange', PasswordChange);


window.addEventListener('DOMContentLoaded', () => {
   render('auth')
});
