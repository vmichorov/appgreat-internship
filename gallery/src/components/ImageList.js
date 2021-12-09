import React from "react";
import { connect } from "react-redux";

import "../styles/imageList.css";

class ImageList extends React.Component {
  renderImages() {
    return this.props.images.map((image) => {
      return (
        <div className="imageCard" key={image.id}>
          <div className="imgContainer">
            <img src={image.largeImageURL} alt="Not found" />
          </div>
          <div className="imgDetails">
            <p className="tags">
              <b>{image.tags}</b>
            </p>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="images">{this.renderImages()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { images: state.images };
};

export default connect(mapStateToProps)(ImageList);
