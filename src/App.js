import '@fontsource/roboto';
import Footer from 'Layout/Footer';
import Header from 'Layout/Header';
import 'moment/locale/vi';
import HomePage from 'pages/HomePage';
import NewsPage from 'pages/NewsPage';
import NotFoundPage from 'pages/NotFoundPage';
import VietNamPage from 'pages/VietNamPage';
import WorldPage from 'pages/WorldPage';
import { Route, Switch } from 'react-router-dom';

// moment.locale('vi')

function App() {
  return (
    <>
      <Header />

      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>

        <Route path='/news' exact>
          <NewsPage />
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
