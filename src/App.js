import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CONFIG } from './constants';
import store from './store';
import MarketPairs from './containers/MarketPairs';
import Header from './components/Header';

const { BASE_NAME } = CONFIG;

const App = () => (
  <Provider store={store}>
    <Router basename={BASE_NAME}>
      <>
        <Header />
        <main className="main" data-testid="MainWrapper">
          <section className="container-fluid">
            <div className="row">
              <div className="col-12">
                <Route exact path="/" component={MarketPairs} />
              </div>
            </div>
          </section>
        </main>
      </>
    </Router>
  </Provider>
);

export default App;
