import 'css/base.css';

import React from 'react';
import ReactDOM from 'react-dom';

console.log ("TEST");
const App = React.createClass({
  displayName: "App",
  
  render() {
    return (
      <div className="App">
        <div className="App-item">
          <h1>Test</h1>
        </div>
      </div>
    )
  }
});

ReactDOM.render(<App/>, document.getElementById('page'));