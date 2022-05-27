import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import HomepageItem from '../pages/HomepageItem';

const Container = () => {
  <BrowserRouter>
    <HomepageItem />
  </BrowserRouter>;
};

it('renders correctly', () => {
  const tree = renderer.create(<Container />).toJSON();
  expect(tree).toMatchSnapshot();
});
