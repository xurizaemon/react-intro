import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchFieldValue: ''
    };

    this.searchFieldChange = this.searchFieldChange.bind(this);
  }

  searchFieldChange (event) {
    this.setState({
      searchFieldValue: event.target.value
    });

    this.props.searchValueEntered(event.target.value);
  }

  render() {
    return (
      <div className="mb-3">
        <label>Search</label>
        <input
          className="m1-2"
          type="search"
          autoComplete="off"
          value={this.state.searchFieldValue}
          onChange={this.searchFieldChange}
        />
      </div>
    );
  }
}

Search.propTypes = {
  searchValueEntered: PropTypes.func.isRequired
};

export default Search;
