import React, { Component } from "react";

import * as styles from "./utils/CoutntryDataStyles";

export class About extends Component {
  render() {
    return (
      <styles.About_Wrapper>
        <styles.Wrapper style={{ borderRadius: "0px 0px 10px 10px" }}>
          <styles.About_title>About The Project?</styles.About_title>
        </styles.Wrapper>
        <styles.Wrapper>
          <div>
            <styles.About_description>
              The CovidStatsNepal is an corona virus data tracking web
              application that uses data provided by various APIs and shows them
              in a graphical as well as the statistical form. The grapical
              representation of the data helps the study of nature of data that
              includes how the virus spread.
              <br />
              <br />
              P.S.: This Web App was made by Anjal Bam just to practice skills
              acquired in web development.
            </styles.About_description>
          </div>
        </styles.Wrapper>
        <styles.Wrapper>
          <styles.About_title>About The Developer?</styles.About_title>
        </styles.Wrapper>
        <styles.Wrapper>
          <styles.About_description>
            <span>Anjal Bam</span> <br />I am a self-taught web developer and an
            engineering student at <strong>Thapathali Campus, IOE</strong>{" "}
            currently living in Kathmandu.
            <br />I am a tech enthusiast and currently persuing my Bachelors in
            Electronics Communication and Information Engineering, and foresee
            my career as a full-stack web developer as a MERN stack and Python
            Django full-stack web developer.
          </styles.About_description>
          <styles.About_description>Contact:</styles.About_description>
          <styles.About_SocialWrapper>
            <a href="https://www.facebook.com/anjal.bam.9">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/the_anjalbam/">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://github.com/AnjalBam">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/anjal-bam-a614b21aa/">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com/AnjalBam3">
              <i className="fab fa-twitter"></i>
            </a>
          </styles.About_SocialWrapper>
        </styles.Wrapper>
        <styles.Wrapper>
          <styles.About_title>Resources Used in Project</styles.About_title>
          <div>
            <styles.About_description>
              This app was completely made with react and different APIs used in
              the project are listed as follows:
              <ul>
                <li>
                  <a
                    href="corona.lmao.ninja"
                    style={{ textDecoration: "underline" }}>
                    Novel CoronaVirus API
                  </a>
                </li>
              </ul>
              <br />
              Technologies Used In the Project:
              <ul>
                <li>
                  <strong>ReactJS</strong> is the base of project.
                </li>
                <li>
                  <strong>Styled-Components</strong> for styling the components.
                </li>
                <li>
                  <strong>React Router</strong> For client-side routing.
                </li>
                <li>
                  <strong>Recharts</strong> For graphical representation of
                  data.
                </li>
              </ul>
            </styles.About_description>
          </div>
        </styles.Wrapper>
        <styles.Wrapper>
          <div>
            <styles.ButtonGraphical>
              <a href="https://github.com/AnjalBam/covidstatsnepal">
                Github Repo
              </a>
            </styles.ButtonGraphical>
          </div>
        </styles.Wrapper>
      </styles.About_Wrapper>
    );
  }
}

export default About;
