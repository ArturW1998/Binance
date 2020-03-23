import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store';
import MarketPairs from './containers/MarketPairs';
import Header from './components/Header';

const App = () => (
  <Provider store={store}>
    <Router basename="/Binance/">
      <Fragment>
        <Header />
        <main role="main" className="main">
          <section className="container-fluid">
            <div className="row">
              <div className="col-12">
                <Route exact path="/" component={MarketPairs} />
              </div>
            </div>
          </section>
        </main>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
