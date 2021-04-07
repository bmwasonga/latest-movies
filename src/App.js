import React from 'react';
import Header from './components/header.js/Header';
import Switcher from './components/switcher/switcher';
import General from './pages/general';
import Movies from './pages/movies';
import Series from './pages/series';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header>
        <Header.Form>
          <Header.Input />
        </Header.Form>
      </Header>
      <Switcher />
      <Switch>
        <Route path="/" exact component={Movies} />
        <Route path="/series" component={Series} />
        <Route path="/general" component={General} />
      </Switch>
    </Router>
  );
}

export default App;
