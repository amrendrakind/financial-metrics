import { COMPANY_QUOTES } from '../types';
import APIServices from '../APIServices';

const initialState = [];

const companyQuotesLists = (quoteslist) => ({
  type: COMPANY_QUOTES,
  payload: quoteslist,
});

const companyQuotesFromAPI = (exchange, symbol) => async (dispatch) => {
  const response = await APIServices.getCompanyQuotes(exchange, symbol);
  dispatch(companyQuotesLists(response));
};

const companyQuotesReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMPANY_QUOTES:
      return action.payload;
    default:
      return state;
  }
};

export default companyQuotesReducer;
export { companyQuotesFromAPI, companyQuotesLists };
