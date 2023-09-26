import Block from "./Block.js";


export interface BlockConstructable<P = any> {
  new (props: P): Block;
}

function isEqual(lhs: string, rhs: string): boolean {
  return lhs === rhs;
}

function render(query: string, block: Block) {
  const root = document.querySelector(query);

  if (root === null) {
    throw new Error(`root not found by selector "${query}"`);
  }

  root.innerHTML = "";

  root.append(block.getContent()!);

  return root;
}

class Route {
  private _block: Block | null = null;

  constructor(
    private pathname: string,
    private readonly _blockClass: BlockConstructable,
    private readonly query: string,
  ) {
    this.pathname = pathname;
    this._block = null;
  }

  leave() {
    this._block = null;
  }

  match(pathname: string) {
    return isEqual(pathname, this.pathname);
  }

  render() {
    if (!this._block) {
      this._block = new this._blockClass({});

      render(this.query, this._block);
    }
  }
}

class Router {
  private static _instance: Router;

  private routes: Route[] = [];

  private currentRoute: Route | null = null;

  private history = window.history;

  constructor(private readonly rootQuery: string) {
    if (Router._instance) {
      return Router._instance;
    }

    this.routes = [];

    Router._instance = this;
  }

  public use(pathname: string, block: BlockConstructable) {
    const route = new Route(pathname, block, this.rootQuery);
    this.routes.push(route);

    return this;
  }

  public start() {
    window.onpopstate = (event: PopStateEvent) => {
      const target = event.currentTarget as Window;

      this._onRoute(target.location.pathname);
    };

    this._onRoute(window.location.pathname);
  }

  private _onRoute(pathname: string) {
    const route = this.getRoute(pathname);

    if (!route) {
      return;
    }

    if (this.currentRoute && this.currentRoute !== route) {
      this.currentRoute.leave();
    }

    this.currentRoute = route;

    route.render();
  }

  public go(pathname: string) {
    this.history.pushState({}, "", pathname);

    this._onRoute(pathname);
  }

  public back() {
    this.history.back();
  }

  public forward() {
    this.history.forward();
  }

  private getRoute(pathname: string) {
    return this.routes.find((route) => route.match(pathname));
  }
}

export default new Router("#app");
