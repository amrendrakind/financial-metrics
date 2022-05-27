const API = 'https://financialmodelingprep.com/api/v3/';

const APIQUOTES = 'https://financialmodelingprep.com/api/v3/quote/';

const KEY = 'b910dda5a91116817f2abf37854a3177';
// const KEY = '177e7470a52d9fcb6780331b067db588';
// const KEY = 'c72f83b1dfc59f79c4cdee3c9b93c7f4';

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

const getCompanyQuotes = async (exchangeName, symbol) => {
  const companyQuotesAPI = `${APIQUOTES}${symbol}?apikey=${KEY}`;
  const response = await fetch(companyQuotesAPI, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });
  const companySymbolData = await response.json();
  const exchange = exchangeName.toUpperCase();
  const companyDataWithExchange = companySymbolData.map((item) => ({ ...item, exchange }));
  return companyDataWithExchange;
};

export default { getCompanyData, getCompanyQuotes };
