import isEqual, { set } from "./helpers";
import Block from "./Block.ts";
import { IUser } from "../api/AuthAPI";
import { IChatInfo } from "../api/ChatsAPI";
import { IMessage } from "../controllers/MessagesController";
import { EventBus } from "./EventBus";
import { IUserSearch } from "../api/UserAPI";

export enum StoreEvents {
  Updated = "updated",
}

interface IState {
  user: IUser;
  chats: IChatInfo[];
  messages: Record<number, IMessage[]>;
  selectedChat?: number;
  searchUsers?: IUserSearch[];
}

type Props = Record<string, any>;

export class Store extends EventBus {
  private state: any = {};

  public set(keypath: string, data: unknown) {
    set(this.state, keypath, data);

    this.emit(StoreEvents.Updated, this.getState());
  }

  public getState() {
    return this.state;
  }
}

const store = new Store();

export function withStore<SP extends Props>(
  mapStateToProps: (state: IState) => SP,
) {
  return function wrap<P>(Component: typeof Block) {
    return class WithStore extends Component {
      private onStoreUpdate: () => void;

      constructor(props: Omit<P, keyof SP>) {
        let previousState: any = mapStateToProps(store.getState());
        super({ ...(props as P), ...previousState });
        this.onStoreUpdate = () => {
          const stateProps = mapStateToProps(store.getState());
          if (isEqual(previousState, stateProps)) {
            return;
          }
          previousState = stateProps;
          this.setProps({ ...stateProps });
        };
        store.on(StoreEvents.Updated, this.onStoreUpdate);
      }

      componentWillUnmount() {
        store.off(StoreEvents.Updated, this.onStoreUpdate);
      }
    };
  };
}

export default store;
