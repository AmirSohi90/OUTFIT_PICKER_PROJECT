import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import 'bulma';

import Register from './components/auth/Register';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path ="/register" component={Register} />
        </Switch>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
