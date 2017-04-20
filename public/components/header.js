import React, { Component } from 'react';

class SearchBar extends Component {
  consturctor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return <input onChange={ event => conslole.log(event.target.value)} />;
  }

}


export default SearchBar;
