import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BiChevronLeft } from 'react-icons/bi';
import CompanyQuotesItem from './CompanyQuotesItem';

import './CompanyQuotes.css';

function CompanyQuotes() {
  const { id } = useParams();
  let exchange = '';
  const companyQuote = useSelector((state) => state.CompanyQuotes);
  if (companyQuote.length) {
    exchange = companyQuote[0].exchange;
  } else { exchange = 'DOWJONES'; }

  const CompanyData = useSelector((state) => state.Company);
  const companyInfo = CompanyData.filter((company) => company.symbol === id);
  const { name, symbol } = companyInfo[0];

  return (
    <>
      <div className="back-header">
        <Link to={`/company/${exchange}`}>
          <BiChevronLeft className="backBtn" />
        </Link>
        <div className="comapny-info">
          <h2 className="comapny-symbol">{symbol}</h2>
          <h2 className="comapny-name">{name}</h2>
        </div>
      </div>

      <ul className="company-list-conatiner">
        {companyQuote.map((quotes) => (
          <CompanyQuotesItem
            key={quotes.symbol}
            quotes={quotes}
          />
        ))}
      </ul>
    </>
  );
}

export default CompanyQuotes;
