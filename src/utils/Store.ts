import { isEqual, set } from './helpers';
import Block from './Block';
import { EventBus } from './EventBas';
import { User } from '../api/AuthAPI';
import { ChatInfo } from '../api/ChatsAPI';
import { Message } from '../controllers/MessagesController';

export enum StoreEvents {
  Updated = 'updated'
}

interface State {
  user: User;
  chats: ChatInfo[];
  messages: Record<number, Message[]>;
  selectedChat?: number;
}

export class Store extends EventBus {
  private state: State = {} as State;

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
