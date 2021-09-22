import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { chat } from './chat';
import { main } from './main';

export const rootReducer = combineReducers({
  main: main,
  chat: chat,
  form: formReducer,
});
