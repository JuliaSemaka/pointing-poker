import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { chat } from './chat';
import { game } from './game';
import { main } from './main';

export const rootReducer = combineReducers({
  main: main,
  chat: chat,
  game: game,
  form: formReducer,
});
