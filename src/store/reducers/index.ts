import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { mainReducer } from './mainReducer';

export const rootReducer = combineReducers({
  main: mainReducer,
  form: formReducer,
});
