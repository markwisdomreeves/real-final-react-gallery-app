import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


class SearchInput extends Component {
  state = {
    searchInput: "",
  };

  handleSearchInput = event => {
      this.setState({
          searchInput: event.target.value
      });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    let query = this.query.value;
    let path = `/search/${query}`;
    this.props.history.push(path);
    this.props.handleSearchData(this.query.value);
    event.currentTarget.reset();
  };

  render() {
    return (
    <div>
      <form className="search-form" 
        onSubmit={this.handleFormSubmit}>
        <input
          type="search"
          ref={(input) => this.query = input}
          placeholder="Search for any item - eg: dog"
          name="search"
          onChange={this.handleSearchInput}
          required
        />
        <button type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </div>
    );
  }
}


export default withRouter(SearchInput);


