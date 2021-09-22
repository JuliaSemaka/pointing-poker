import { IChatMessage } from '../../components/UI/ui.module';
import { ADD_CHAT_MESSAGE, IAction } from '../store.module';

export const chat = (
  state: IChatMessage[] = [],
  action: IAction
): IChatMessage[] => {
  switch (action.type) {
    case ADD_CHAT_MESSAGE:
      return state.concat(action.payload);
    default:
      return state;
  }
};
