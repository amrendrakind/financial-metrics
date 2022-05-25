import { COMPANY } from '../types';
import APIServices from '../APIServices';

const initialState = [];

const companyLists = (company) => {
  const companylist = company.map((company) => ({
    name: company.name,
    symbol: company.symbol,
  }));
  return {
    type: COMPANY,
    payload: companylist,
  };
};

const companyDataFromAPI = (symbol) => async (dispatch) => {
  const response = await APIServices.getCompanyData(symbol);
  dispatch(companyLists(response));
};

const companyReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMPANY:
      return action.payload;
    default:
      return state;
  }
};

export default companyReducer;
export { companyLists, companyDataFromAPI };
