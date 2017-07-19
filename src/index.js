import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDGlKuq93566a6-rz9gQyGPVaNdOuIn0_s';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {term: ''}
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
