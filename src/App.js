import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import EvictionReportHomePage from 'components/EvictionReports';
import CreditCheckHomePage from 'components/CreditChecks';

import 'assets/style.css';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const paths = ['/', '/eviction-report'];

  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route
          exact
          path="/credit-checks"
          Component={CreditCheckHomePage}
        ></Route>
        {paths.map((path, index) => (
          <Route key={index} path={path} Component={EvictionReportHomePage} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
