import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "../styles/App.css";
import Login from "./Login";
import Container from "./Container";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: JSON.parse(
        sessionStorage.getItem(
          Object.keys(window.sessionStorage).filter((item) =>
            item.startsWith("firebase:authUser")
          )[0]
        )
      ),
    };
  }

  render() {
    return (
      <div className="app">
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                this.state.user != null ? (
                  <Container user={this.state.user} />
                ) : (
                  <Login />
                )
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
