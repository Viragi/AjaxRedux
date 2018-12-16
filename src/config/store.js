import { createStore, combineReducers } from 'redux';
import simpleAjax from '../redux/reducer';

const rootReducer = combineReducers({
  data: simpleAjax
});
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
