import React, {Component} from 'react';
import {Provider} from 'react-redux';

import Register from './components/register.js'
import Login from './components/login.js';

import store from './store';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Register />
        <hr />
        <Login />
      </Provider>
    );
  }
}

export default App;
