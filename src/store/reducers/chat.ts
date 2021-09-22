import { IChatMessage } from '../../components/UI/ui.module';
import { IAction } from '../store.module';

export const chat = (
  state: IChatMessage[] = [],
  action: IAction
): IChatMessage[] => {
  switch (action.type) {
    default:
      return state;
  }
};
