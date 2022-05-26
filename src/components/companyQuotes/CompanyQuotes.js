import { useSelector } from 'react-redux';
import CompanyQuotesItem from './CompanyQuotesItem';
import './CompanyQuotes.css';

function CompanyQuotes() {
  const companyQuote = useSelector((state) => state.CompanyQuotes);
  // console.log(companyQuote);
  return (
    <ul className="company-list-conatiner">
      {companyQuote.map((quotes) => (
        <CompanyQuotesItem
          key={quotes.symbol}
          quotes={quotes}
        />
      ))}
    </ul>
  );
}

export default CompanyQuotes;
