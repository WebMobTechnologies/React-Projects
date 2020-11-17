import React, { Component } from "react";

import * as styles from "./utils/Styles";
import { Link } from "react-router-dom";

export class Footer extends Component {
  render() {
    return (
      <>
        <styles.FooterStyle>
          <div>
            Copyright &copy; 2020 | <Link to="/about">Anjal Bam</Link>
          </div>
        </styles.FooterStyle>
      </>
    );
  }
}

export default Footer;
