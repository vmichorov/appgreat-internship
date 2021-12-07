import React from "react";
import { connect } from "react-redux";

import "../styles/imageList.css";

class ImageList extends React.Component {
  renderImages() {
    console.log(this.props.images);
    return this.props.images.map((image) => {
      return (
        <div className="imageCard" key={image.id}>
          <div className="imgContainer">
            <img src={image.urls.raw} alt="Not found" />
          </div>
          <div className="imgDetails">
            <p className="description">
              <b>{image.alt_description}</b>
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
