import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EvictionReportHomePage from './components/EvictionReports';
import store from './store';
import './shared/style.css';
import CreditCheckHomePage from './components/CreditChecks';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const paths = ['/', '/eviction-report'];

  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
