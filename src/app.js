import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import 'bulma';

import Register from './components/auth/Register';
import Login from './components/auth/Login';

class App extends React.Component {
  render() {
    return (
      <section className="section">
        <BrowserRouter>
          <Switch>
            <Route path ="/login" component={Login} />
            <Route path ="/register" component={Register} />
          </Switch>
        </BrowserRouter>
      </section>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
