import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'


import App from './app/components/App/App';
import Home from './app/components/Home/Home';
import Mota from './app/components/Mota/Mota';
import './public/styles/styles.scss';




render((
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route  path="/mota" component={Mota} />
      </Switch>
    </App>
  </Router>
), document.getElementById('app'));