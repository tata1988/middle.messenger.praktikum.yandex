import isEqual, { set } from './helpers';

import Block from './Block';
import { User } from '../api/AuthAPI';
import { ChatInfo } from '../api/ChatsAPI';
import { Message } from '../controllers/MessagesController';
import { EventBus } from './EventBas';
import { UserSearch } from '../api/UserAPI';

export enum StoreEvents {
  Updated = 'updated'
}

interface State {
  user: User;
  chats: ChatInfo[];
  messages: Record<number, Message[]>;
  selectedChat?: number;
  searchUsers?: UserSearch[];
}


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

// @ts-ignore
window.store = store;

export function withStore<SP>(mapStateToProps: (state: State) => SP) {
  return function wrap<P>(Component: typeof Block){

    return class WithStore extends Component {

      private onStoreUpdate: () => void;

      constructor(props: Omit<P, keyof SP>) {
        let previousState = mapStateToProps(store.getState());

        super({ ...(props as P), ...previousState });

        this.onStoreUpdate = () => {
          const stateProps = mapStateToProps(store.getState());

          if(isEqual(previousState, stateProps)) {
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
    }

  }
}

export default store;
