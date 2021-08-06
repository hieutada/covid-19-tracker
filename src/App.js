import '@fontsource/roboto';
import 'moment/locale/vi';
import Footer from './Layout/Footer';
import Header from './Layout/Header';
import HomePage from './pages/HomePage';
import WorldPage from './pages/WorldPage';
import VietNamPage from './pages/VietNamPage';
import NotFoundPage from './pages/NotFoundPage';
import { Redirect, Route, Switch } from 'react-router-dom';

// moment.locale('vi')

function App() {
  return (
    <>
      <Header />

      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/world' exact>
          <WorldPage />
        </Route>
        <Route path='/vietnam' exact>
          <VietNamPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>

      <Footer />
    </>
  );
}

export default App;
