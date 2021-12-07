import React from "react";

import "../styles/Search.css";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }

  render() {
    return (
      <div className="search">
        <label>Search</label>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            value={this.state.term}
            onChange={(ev) => {
              this.setState({ term: ev.target.value });
              this.props.onSearch(ev.target.value);
            }}
          />
        </div>
      </div>
    );
  }
}

export default Search;
