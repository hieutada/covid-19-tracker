import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
// import i18n (needs to be bundled ;))
import './i18n';

ReactDOM.render(
  // <React.StrictMode>
  <Router>
    <Suspense fallback={<div>Loading ~~~</div>}>
      <App />
    </Suspense>
  </Router>,
  // </React.StrictMode>
  document.getElementById('root')
);
