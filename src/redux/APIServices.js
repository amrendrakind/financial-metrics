const API = 'https://financialmodelingprep.com/api/v3/';

const APIQUOTES = 'https://financialmodelingprep.com/api/v3/quote/';

const KEY = 'b910dda5a91116817f2abf37854a3177';

const getCompanyData = async (symbol) => {
  const companyAPI = `${API}${symbol}_constituent?apikey=${KEY}`;
  const response = await fetch(companyAPI, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });
  const companySymbolData = await response.json();
  return companySymbolData;
};

const getCompanyQuotes = async (symbol) => {
  const companyQuotesAPI = `${APIQUOTES}${symbol}?apikey=${KEY}`;
  const response = await fetch(companyQuotesAPI, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });
  const companySymbolData = await response.json();
  return companySymbolData;
};

export default { getCompanyData, getCompanyQuotes };
