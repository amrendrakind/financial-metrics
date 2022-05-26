import { COMPANY_QUOTES } from '../types';
import APIServices from '../APIServices';

const initialState = [];

const companyQuotesLists = (company) => {
  const quoteslist = company.map((company) => ({
    name: company.name,
    symbol: company.symbol,
  }));
  return {
    type: COMPANY_QUOTES,
    payload: quoteslist,
  };
};

const companyQuotesFromAPI = (symbol) => async (dispatch) => {
  const response = await APIServices.getCompanyQuotes(symbol);
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
