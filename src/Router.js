import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Home from './pages/Home';
import Wallet from './pages/Wallet';
import Metamask from './pages/Metamask';
import Ledger from './pages/Ledger';
import Trezor from './pages/Trezor';
import NotFound from './pages/NotFound';
import { Route, Switch } from 'react-router-dom';

class Router extends Component {
  componentDidMount() {
    window.browserHistory = this.context.router.history;
  }
  render = () => (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/wallet" component={Wallet} />
      <Route exact path="/metamask" component={Metamask} />
      <Route exact path="/ledger" component={Ledger} />
      <Route exact path="/trezor" component={Trezor} />
      <Route component={NotFound} />
    </Switch>
  );
}

Router.contextTypes = {
  router: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
  email: PropTypes.string,
  signup: PropTypes.any
};

export default Router;