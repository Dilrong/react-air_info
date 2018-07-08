import React, { Component } from 'react';
import {Header} from './components';
import {WrapperContainer} from './containers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <WrapperContainer/>
      </div>
    );
  }
}

export default App;
