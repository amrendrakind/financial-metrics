import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BiChevronLeft } from 'react-icons/bi';
import CompanyQuotesItem from './CompanyQuotesItem';

import './CompanyQuotes.css';

function CompanyQuotes() {
  const companyQuote = useSelector((state) => state.CompanyQuotes);
  const exchangeName = companyQuote[0].exchange;
  return (
    <>
      <Link to={`/company/${exchangeName}`}>
        <BiChevronLeft className="backBtn" />
      </Link>
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
