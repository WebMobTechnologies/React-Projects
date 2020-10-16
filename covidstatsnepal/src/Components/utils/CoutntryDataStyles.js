import styled from "styled-components";
import * as colors from "./colors";

export const Wrapper = styled.div`
  background: ${(props) =>
    !props.important ? colors.rootColor : colors.rootColorDark};
  display: block;
  padding: 0.5rem;
  border-radius: 10px;
  width: auto;
  margin: 0px 0.5rem;
  margin-bottom: 1rem;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.4);
  color: ${colors.secondaryColor};
`;

export const HeaderTitle = styled.div`
  color: ${colors.secondaryColor};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  & h1 {
    font-size: 2.5rem;
    @media screen and (max-width: 400px) {
      font-size: 2rem;
    }
    @media screen and (max-width: 320px) {
      font-size: 1.5rem;
    }
    font-weight: 400;
    span {
      font-size: 0.75rem;
    }
  }
  & img {
    padding: 0px 1rem;
    height: 2.5rem;
    @media screen and (max-width: 400px) {
      height: 2rem;
    }
  }
`;

export const DataWrapper = styled.div`
  padding: 10px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 620px) {
    display: block;
  }
`;

export const DataHolder = styled.div`
  padding: 1rem 1.5rem;
`;

export const DataTitle = styled.h1`
  font-size: 1.5rem;
  color: white;
  font-weight: 400;
`;

export const DataValue = styled.p`
  font-size: 1.25rem;
  color: orangered;
  &#totalDeaths {
    color: ${colors.totaldeathsColor};
  }
  &#totalRecovered {
    color: ${colors.totalRecoveredColor};
  }
  &#totalCases {
    color: ${colors.totalCasesColor};
  }
  &#totalCases {
    color: ${colors.totalCasesColor};
  }
  &#activeCases {
    color: ${colors.totalActiveColor};
  }
  &#newCases {
    color: ${colors.totalNewCases};
  }
  &#newDeaths {
    color: ${colors.totalNewDeaths};
  }
  &#totalTests {
    color: ${colors.totalTestsColor};
  }
  &#criticalCases {
    color: ${colors.totalCriticalCases};
  }
`;

export const ButtonGraphical = styled.button`
  padding: 1rem 1.5rem;
  border-radius: 10rem;
  border: none;
  background-color: #0a4c97;
  color: ${colors.secondaryColor};
  margin-bottom: 0.5rem;
  transition: ease 0.3s;
  &:focus {
    outline: none;
    box-shadow: none;
  }
  &:hover {
    background-color: #072d58;
  }
`;

export const About_Wrapper = styled.div`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
`;

export const About_title = styled.h1`
  font-weight: 500;
  font-size: ${(props) => (props.secondary ? "2rem" : "3rem")};
  @media screen and (max-width: 400px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 320px) {
    font-size: 1.5rem;
  }
`;

export const About_description = styled.p`
  font-size: 1.5rem;
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  padding: 1.5rem 0rem;

  span {
    font-size: 2rem;
    text-align: left;
    color: orangered;
    font-weight: 600;
  }
  & a {
    transition: ease 0.3s;
    &:hover {
      color: orangered;
    }
  }
`;

export const About_SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  padding-top: 0px;
  & a {
    height: 1.5rem;
    display: block;
    width: 1.5rem;
    font-size: 2rem;
    padding: 1rem 1.5rem;
    transition: ease 0.3s;
    &:hover {
      font-size: 2.25rem;
      color: orangered;
    }
  }
`;
