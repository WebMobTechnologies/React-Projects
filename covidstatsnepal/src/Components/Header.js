import React, { Component } from "react";
// import styled from "styled-components";

import { Link } from "react-router-dom";

export class Header extends Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.setState(
      (prevState) => {
        return { showMenu: !prevState.showMenu };
      },
      () => {
        document.addEventListener("click", this.closeMenu);
      }
    );
  }
  closeMenu() {
    this.setState({ showMenu: false }, () =>
      document.removeEventListener("click", this.closeMenu)
    );
  }
  render() {
    return (
      <div className="header-wrapper">
        <div className="main-wrapper">
          <p>
            <Link to="/">
              Covid<span>STATS</span>
              <small>Nepal</small>
            </Link>
          </p>
        </div>
        <nav>
          <div className="menu" onClick={this.handleClick}>
            <div></div>
            <div></div>
            <div></div>
            {this.state.showMenu ? (
              <ul className="navLinks">
                <li>
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/view-by-country">
                    View By Country
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/imp-info">
                    Important Info
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
              </ul>
            ) : null}
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
