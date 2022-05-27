import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import SearchBar from '../components/search/SearchBar';

const Container = () => {
  <BrowserRouter>
    <SearchBar />
  </BrowserRouter>;
};

it('renders correctly', () => {
  const tree = renderer.create(<Container />).toJSON();
  expect(tree).toMatchSnapshot();
});
