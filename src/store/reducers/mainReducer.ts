import { IAction, IMainState } from "../store.module";

const mainState: IMainState = {

}

export const mainReducer = (state = mainState, action: IAction): IMainState => {
  switch(action.type) {
    default:
      return state;
  }
};
