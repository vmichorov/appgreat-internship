import React from "react";

import "../styles/Container.css";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: this.props.user };
  }

  render() {
    return (
      <div className="container">
        <div className="header">
          <p className="user-name">{this.state.user.displayName}</p>
        </div>
      </div>
    );
  }
}

export default Container;
