import { render } from '@testing-library/react';
import Banner from 'components/Records/RecordList/Banner';
import CheckList from 'components/Records/RecordList/CheckList';

test('renders Banner component', () => {
  render(<Banner />);
});

test('renders Check list component', () => {
  render(<CheckList />);
});
