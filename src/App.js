import React from 'react';
import './App.css';
import Homepage from './components/Homepage';
import Result from './components/Result';
import { Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/">
          <Homepage />
        </Route>

        <Route exact path="/result">
          <Result />
        </Route>
      </div>
    )
  }
}

export default App;
