import React from "react";
import { connect } from "react-redux";

import "../styles/Container.css";
import firebase from "../firebase";
import { setImages } from "../actions/index";
import unsplash from "../api/unsplash";
import Search from "../components/Search";
import ImageList from "./ImageList";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: this.props.user };
  }

  onSearch = async (term) => {
    let response = await unsplash.get("/search/photos", {
      params: {
        query: term,
        per_page: 16,
      },
    });
    this.props.setImages(response.data.results);
  };

  render() {
    console.log(this.state.user);
    return (
      <div className="container">
        <div className="header">
          <div className="userDetails">
            <div className="userImg">
              <img src={this.state.user.photoURL} alt="Not found" />
            </div>
            <p className="name">{this.state.user.displayName}</p>
          </div>
          <button
            className="btn btn-danger logoutBtn"
            onClick={() => {
              firebase
                .auth()
                .signOut()
                .then(() => {
                  window.location.assign("/");
                });
            }}
          >
            Sign Out
          </button>
        </div>
        <Search onSearch={this.onSearch} />
        <ImageList />
      </div>
    );
  }
}

export default connect(null, { setImages })(Container);
