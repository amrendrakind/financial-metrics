import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import exchangeReducer from './exchange/exchange';
import companyReducer from './company/company';
import companyQuotesReducer from './companyquotes/companyquotes';

const rootReducers = combineReducers({
  Exchange: exchangeReducer,
  Company: companyReducer,
  CompanyQuotes: companyQuotesReducer,
});

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk, logger)),
);

export default store;
export { rootReducers };
