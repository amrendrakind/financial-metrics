import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { v4 as uuidv4 } from 'uuid';

function CompanyQuotesItem(props) {
  const { quotes } = props;
  const { symbol, name } = quotes;

  return (
    <li
      key={symbol}
      className="companyName"
    >
      <Link
        to={`/quotes/${symbol}`}
        className="company-detail-container"
      >
        <div className="company-symbol">
          {symbol}
        </div>
        <div className="company-name">
          {name}
        </div>

      </Link>
    </li>
  );
}
export default CompanyQuotesItem;

CompanyQuotesItem.propTypes = {
  quotes:
          PropTypes.objectOf(
            {
              name: PropTypes.string.isRequired,
              symbol: PropTypes.string.isRequired,
            },
          ).isRequired,
};
