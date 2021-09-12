import '@fontsource/roboto';
import Footer from './layout/Footer';
import Header from './layout/Header';
import 'moment/locale/vi';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import WorldPage from './pages/WorldPage';
import VietNamPage from './pages/VietNamPage';
import NotFoundPage from './pages/NotFoundPage';

// moment.locale('vi')

function App() {
  return (
    <>
      <Header />

      {/* Content */}
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
