import React, { Component } from "react";

import * as styles from "./utils/CoutntryDataStyles";

import { Link } from "react-router-dom";

export class NoMatchPage extends Component {
  render() {
    return (
      <div>
        <styles.Wrapper important style={{ marginTop: "1rem" }}>
          <styles.About_title>Error-404</styles.About_title>
          <styles.About_description>
            The page you requested couldn't be found.
          </styles.About_description>
          <styles.About_description>
            <Link to="/">Return Home</Link>
          </styles.About_description>
        </styles.Wrapper>
      </div>
    );
  }
}

export default NoMatchPage;
