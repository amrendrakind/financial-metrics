import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import exchangeReducer from './exchange/exchange';

const rootReducers = combineReducers({
  Exchange: exchangeReducer,
});

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk, logger)),
);

export default store;
export { rootReducers };
