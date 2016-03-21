import React from 'react';
import ReactDOM from 'react-dom';

import { Header } from './Header.jsx';

export class App extends React.Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <div className="App">
        <Header/>
      </div>
    )
  }
};
