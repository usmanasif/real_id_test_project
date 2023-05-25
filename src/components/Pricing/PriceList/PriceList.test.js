import { render } from '@testing-library/react';
import Checklist from 'components/Pricing/PriceList/Checklist';
import InstantPrice from 'components/Pricing/PriceList/InstantPrice';

test('renders Checklist component', () => {
  render(<Checklist />);
});

test('renders Instant Price component', () => {
  render(<InstantPrice />);
});
