import { Auth } from "../pages/auth";
import { Registration } from "../pages/registration";
import { ErrorPage404 } from "../pages/errorPage404";
import { ErrorPage500 } from "../pages/errorPage500";
import { Chat } from "../pages/chat";
import { Profile } from "../pages/profileSettings";
import { SiteMap } from "../pages/siteMap";

const ROUTES = {
  homePage: SiteMap,
  auth: Auth,
  registration: Registration,
  chat: Chat,
  profile: Profile,
  error404: ErrorPage404,
  error500: ErrorPage500,
};

export function render(name: keyof typeof ROUTES) {
  const root = document.querySelector("#app")!;

  root.innerHTML = "";

  const Page = ROUTES[name];

  const page = new Page();

  root.append(page.getContent()!);

  page.dispatchComponentDidMount();
}
