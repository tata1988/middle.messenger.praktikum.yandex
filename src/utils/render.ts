import { Auth } from "../pages/auth";
import { Registration } from "../pages/registration";
import {ErrorPage404} from "../pages/errorPage404";
import { ErrorPage500 } from "../pages/errorPage500";

const ROUTES = {
  'auth': Auth,
  'registration': Registration,
  'error404': ErrorPage404,
  'error500': ErrorPage500,
}

export function render(name: keyof typeof ROUTES) {
  const root = document.querySelector('#app')!;

  root.innerHTML = '';

  const Page = ROUTES[name];

  const page = new Page();

  root.append(page.getContent()!);

  page.dispatchComponentDidMount();
}