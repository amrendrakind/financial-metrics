import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function HomepageItem(props) {
  const { exchange } = props;
  const {
    symbol, name, image, alt,
  } = exchange;
  return (
    <li
      key={symbol}
    >
      <Link
        to={`/comapny/${symbol}`}
        className="exchange-detail-container"
      >
        <div className="name">{name}</div>
        <div className="imgContainer">
          <img src={image} alt={alt} />
        </div>
      </Link>
    </li>
  );
}
export default HomepageItem;

HomepageItem.propTypes = {
  exchange:
          PropTypes.objectOf(
            {
              name: PropTypes.string.isRequired,
              alt: PropTypes.string.isRequired,
              image: PropTypes.string.isRequired,
              symbol: PropTypes.string.isRequired,
            },
          ).isRequired,
};
