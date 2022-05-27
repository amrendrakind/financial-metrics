import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import CompanyQuotesItem from '../components/companyQuotes/CompanyQuotesItem';

const Container = () => {
  <BrowserRouter>
    <CompanyQuotesItem />
  </BrowserRouter>;
};

it('renders correctly', () => {
  const tree = renderer.create(<Container />).toJSON();
  expect(tree).toMatchSnapshot();
});
