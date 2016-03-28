import React from 'react';

import { Header } from './Header.jsx';

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header/>
        
        {this.props.children}
      </div>
    )
  }
};
