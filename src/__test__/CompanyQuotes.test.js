import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import CompanyQuotes from '../components/companyQuotes/CompanyQuotes';

const Container = () => {
  <BrowserRouter>
    <CompanyQuotes />
  </BrowserRouter>;
};

it('renders correctly', () => {
  const tree = renderer.create(<Container />).toJSON();
  expect(tree).toMatchSnapshot();
});
