import { render } from '@testing-library/react';
import CriminalRecords from 'components/Records/CriminalRecords';
import TenantInformation from 'components/Records/TenantInformation';
import TenantReport from 'components/Records/TenantReport';

test('renders Criminal Records component', () => {
  render(<CriminalRecords />);
});

test('renders Tenant Information component', () => {
  render(<TenantInformation />);
});

test('renders Tenant Report component', () => {
  render(<TenantReport />);
});
