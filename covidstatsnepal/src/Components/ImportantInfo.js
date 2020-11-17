import React from "react";
import * as styles from "./utils/CoutntryDataStyles";

const ImportantInfo = () => {
  return (
    <styles.About_Wrapper>
      <styles.Wrapper style={{ borderRadius: "0px 0px 10px 10px" }}>
        <styles.About_title>Important Info</styles.About_title>
      </styles.Wrapper>
      <styles.Wrapper important>
        <styles.About_description>
          We Know this is a hard time for everyone during the pandemic and I
          personally request you all not to believe everything you hear.
          <br />
          And Most importantly, <strong>DON'T PANIC!</strong>
          <br />
          <strong>STAY AT HOME!</strong>
        </styles.About_description>
      </styles.Wrapper>
      <styles.Wrapper>
        <styles.About_title
          secondary
          style={{
            textAlign: "left",
            paddingLeft: "4rem",
            paddingTop: "1rem",
          }}>
          What can we do to prevent the virus?
        </styles.About_title>
        <styles.About_description>
          <ul style={{ textAlign: "left" }}>
            <li>Wash your hands frequently.</li>
            <li>Only go out whenever it's necessary.</li>
            <li>Wear masks whenever you go out.</li>
            <li>Avoid Physical Contact with People.</li>
          </ul>
        </styles.About_description>
      </styles.Wrapper>

      <styles.Wrapper>
        <styles.About_title secondary>
          Don't rely on <strong>Fake News!</strong>
        </styles.About_title>
        <styles.About_description>
          I would again like to inform you all that even in this serious
          pandemic situation too, there are so many news portals and various
          media sources that are spreading fake news just to get more views to
          their page and trying to use our fear for their business.
          <br />
          So, please don't trust everything you see and hear on Facebook,
          Instagram, Whatsapp, etc. and only believe the news from authorised
          personnel only.
        </styles.About_description>
      </styles.Wrapper>
      <styles.Wrapper>
        <styles.About_title secondary>Important Links:</styles.About_title>
        <styles.About_description>
          <a title="mohp" href="https://mohp.gov.np/home/">
            Ministry Of Health and Population, Nepal
          </a>{" "}
          <br />
          <a
            title="WHO"
            href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019">
            World Health Organisation
          </a>
        </styles.About_description>
      </styles.Wrapper>
    </styles.About_Wrapper>
  );
};

export default ImportantInfo;
