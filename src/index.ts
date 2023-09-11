import { registerComponent } from "./utils/registerComponent";

import "./index.scss";

import { Button } from "./components/button";
import { Input } from "./components/input";
import { Title } from "./components/title";
import { Label } from "./components/label";
import { Line } from "./components/line";
import { ChatItem } from "./blocks/chatList/chatItem";
import { MessagesHeader } from "./blocks/messageFeed/messagesHeader";
import { Message } from "./blocks/messageFeed/messagesMain/message";
import { MessagesMain } from "./blocks/messageFeed/messagesMain";
import { MessagesFooter } from "./blocks/messageFeed/messagesFooter";
import { AvatarChange } from "./blocks/avatarChange";
import { Error } from "./components/error";
import { Avatar } from "./components/avatar";
import AuthController from "./controllers/AuthController";
import Router from "./utils/Router";
import { Auth } from "./pages/auth";
import { Registration } from "./pages/registration";
import { Chat } from "./pages/chat";
import { ChatsList } from "./blocks/chatList";
import { ProfileField } from "./blocks/profileFieldList/profileField";
import { ProfileFieldsList } from "./blocks/profileFieldList";
import { ProfileSettingsPage } from "./pages/profileSettings";

registerComponent("Button", Button);
registerComponent("ButtonSubmit", Button);
registerComponent("Input", Input);
registerComponent("Title", Title);
registerComponent("Label", Label);
registerComponent("Line", Line);
registerComponent("Error", Error);
registerComponent("ChatItem", ChatItem);
registerComponent("ChatList", ChatsList);
registerComponent("MessagesHeader", MessagesHeader);
registerComponent("Message", Message);
registerComponent("MessagesMain", MessagesMain);
registerComponent("MessagesFooter", MessagesFooter);
registerComponent("Avatar", Avatar);
registerComponent("AvatarChange", AvatarChange);
registerComponent("ProfileField", ProfileField);
registerComponent("ProfileFieldsList", ProfileFieldsList);

enum Routes {
  Index = "/",
  Register = "/sign-up",
  Profile = "/settings",
  Messenger = "/messenger",
}

window.addEventListener("DOMContentLoaded", async () => {
  Router.use(Routes.Index, Auth)
    .use(Routes.Register, Registration)
    .use(Routes.Messenger, Chat)
    .use(Routes.Profile, ProfileSettingsPage);

  let isProtectedRoute = true;

  switch (window.location.pathname) {
    case Routes.Index:
    case Routes.Register:
      isProtectedRoute = false;
      break;
    default:
  }

  try {
    await AuthController.fetchUser();

    Router.start();

    if (!isProtectedRoute) {
      Router.go(Routes.Messenger);
    }
  } catch (e) {
    Router.start();

    if (isProtectedRoute) {
      Router.go(Routes.Index);
    }
  }
});
