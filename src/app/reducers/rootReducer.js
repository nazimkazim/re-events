import { combineReducers } from 'redux';
import eventReducer from '../../features/event/eventReducer';
import { reducer as FormReducer } from 'redux-form';
import modalsReducer from '../../features/modals/modalReducer';

const rootReducer = combineReducers({
  form: FormReducer,
  events: eventReducer,
  modals: modalsReducer
});

export default rootReducer;
