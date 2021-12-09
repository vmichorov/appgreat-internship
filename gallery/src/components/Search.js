import React from "react";
import { connect } from "react-redux";

import "../styles/Search.css";
import { setWord } from "../actions";

class Search extends React.Component {
  render() {
    return (
      <div className="search">
        <label>Search</label>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            value={this.props.word}
            onChange={(ev) => {
              this.props.setWord(ev.target.value);
              this.props.onSearch(ev.target.value);
            }}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { word: state.word };
};

export default connect(mapStateToProps, { setWord })(Search);
