import Block from "../utils/Block";
import Router from "../utils/Router";

type P = Record<string, any>;

export function withRouter(Component: typeof Block) {
  type Props = typeof Component extends typeof Block ? P : any;

  return class WithRouter extends Component {
    constructor(props: Props & IPropsWithRouter) {
      super({ ...props, router: Router });
    }
  };
}

export interface IPropsWithRouter {
  router: typeof Router;
}
