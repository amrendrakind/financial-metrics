// const companySymbolAPI = 'https://financialmodelingprep.com/api/v3/nasdaq_constituent?apikey=b910dda5a91116817f2abf37854a3177';

// https://financialmodelingprep.com/api/v3/dowjones_constituent?apikey=YOUR_API_KEY

// https://financialmodelingprep.com/api/v3/sp500_constituent?apikey=YOUR_API_KEY

// const companySymbolAPI = 'https://financialmodelingprep.com/api/v3/dowjones_constituent?apikey=b910dda5a91116817f2abf37854a3177';

const API = 'https://financialmodelingprep.com/api/v3/';
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

export default { getCompanyData };