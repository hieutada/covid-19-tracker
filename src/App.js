import '@fontsource/roboto';
import Footer from 'Layout/Footer';
import 'moment/locale/vi';
import VietNamPage from 'pages/VietNamPage';
import { Route, Switch } from 'react-router-dom';
import Header from './Layout/Header';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import WorldPage from './pages/WorldPage';

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
