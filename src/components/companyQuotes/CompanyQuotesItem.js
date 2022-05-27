import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

function CompanyQuotesItem(props) {
  const { quotes } = props;

  const allData = Object.entries(quotes).map((entry) => {
    const [key, value] = entry;
    return { key, value };
  });

  return (
    <div className="detailsContainer">
      <ul className="dataList">
        {allData.map((data) => (
          <li
            key={uuidv4()}
            className="financialDetails"
          >
            <div className="key">
              {data.key}
            </div>
            <div className="value">
              {data.value}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default CompanyQuotesItem;

CompanyQuotesItem.propTypes = {
  quotes:
          PropTypes.objectOf(
            {
              name: PropTypes.string,
              symbol: PropTypes.string,
            },
          ).isRequired,
};
