import React from 'react';

import { Header } from './Header.jsx';

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header/>
        
        <div className="page-content">{this.props.children}</div>
      </div>
    )
  }
};
