import React from "react";
import { connect } from "react-redux";

import "../styles/Container.css";
import firebase from "../firebase";
import pixabay from "../api/pixabay";
import { setImages } from "../actions/index";
import Search from "../components/Search";
import ImageList from "./ImageList";

var startingImages = [];

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: this.props.user };
  }

  componentDidMount = async () => {
    let response = await pixabay.get("", {
      params: {
        per_page: 200,
      },
    });
    let count = 199;
    for (let i = 0; i < 16; i++) {
      let num = Math.floor(Math.random() * count);
      startingImages.push(response.data.hits[num]);
      response.data.hits.splice(num, 1);
      count--;
    }
    this.props.setImages(startingImages);
  };

  onSearch = async (term) => {
    if (term === "") {
      this.props.setImages(startingImages);
    } else {
      let filtered = startingImages.filter((i) =>
        i.tags.toLowerCase().includes(term.toLowerCase())
      );
      this.props.setImages(filtered);
    }
  };

  render() {
    return (
      <div className="container">
        <div className="header">
          <div className="userDetails">
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

const mapStateToProps = (state) => {
  return { images: state.images };
};

export default connect(mapStateToProps, { setImages })(Container);
