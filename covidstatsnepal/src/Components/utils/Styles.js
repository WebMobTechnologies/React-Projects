import styled from "styled-components";
import * as colors from "./colors";

export const Wrapper = styled.div`
  background: ${colors.rootColor};
  display: block;
  padding: 0.5rem;
  border-radius: 10px;
  width: auto;
  margin: 0px 0.5rem;
  margin-bottom: 1rem;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.4);
`;

export const MainWrapper = styled.div`
  margin: 0px 10px;
  padding: 1.5rem 2.5rem;
`;

export const MainHeading = styled.p`
  font-size: 2.5rem;
  @media screen and (max-width: 400px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 320px) {
    font-size: 1.5rem;
  }
  color: white;
  img {
    padding-left: 1.5rem;
    height: 2.5rem;
    width: auto;
  }
`;

export const NepalDataWrapper = styled.div`
  color: ${colors.secondaryColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    font-size: 2rem;
    @media screen and (max-width: 400px) {
      font-size: 1.5rem;
    }
    @media screen and (max-width: 320px) {
      font-size: 1rem;
    }
    color: ${colors.secondaryColor};
  }
  h6 {
    font-weight: 300;
    font-size: 0.75rem;
  }
  .newCases {
    font-size: 1.5rem;
    @media screen and (max-width: 400px) {
      font-size: 1rem;
    }
    @media screen and (max-width: 320px) {
      font-size: 0.75rem;
    }
    color: orangered;
  }
`;

export const DataWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  color: ${colors.secondaryColor};
  padding: 1rem;
  @media screen and (max-width: 1080px) {
    display: block;
  }
  & div {
    padding: 0.5rem 2rem;
  }
  & div:nth-child(1) {
    font-size: 2rem;
    @media screen and (max-width: 400px) {
      font-size: 1.5rem;
    }
    @media screen and (max-width: 320px) {
      font-size: 1rem;
    }
    span {
      color: #74a1ab;
    }
  }
  & div:nth-child(2) {
    font-size: 2rem;
    @media screen and (max-width: 400px) {
      font-size: 1.5rem;
    }
    @media screen and (max-width: 320px) {
      font-size: 1rem;
    }
    span {
      color: #b30000;
    }
  }
  & div:nth-child(3) {
    font-size: 2rem;
    @media screen and (max-width: 400px) {
      font-size: 1.5rem;
    }
    @media screen and (max-width: 320px) {
      font-size: 1rem;
    }
    span {
      color: #0fb77f;
    }
  }
  & div:nth-child(4) {
    font-size: 2rem;
    @media screen and (max-width: 400px) {
      font-size: 1.5rem;
    }
    @media screen and (max-width: 320px) {
      font-size: 1rem;
    }
    span {
      color: #a2682c;
    }
  }
  & div:nth-child(5) {
    font-size: 2rem;
    @media screen and (max-width: 400px) {
      font-size: 1.5rem;
    }
    @media screen and (max-width: 320px) {
      font-size: 1rem;
    }
    span {
      color: #57b9aa;
    }
  }
`;
export const DetailsWrapper = styled.div`
  color: #e88;
  a {
    color: #2020e8;
    &:hover {
      text-decoration: underline;
      color: #4040d8;
    }
  }
`;

export const HorizontalDivider = styled.hr`
  border-color: ${colors.rootColor};
  border-width: 2px;
  margin: 1rem 0.5rem;
`;

export const WorldDataWrapper = styled(MainWrapper)`
  margin-top: 1.5rem;
  border-radius: 10px;
  & h6 {
    font-weight: 400;
    font-size: 0.75rem;
  }
`;

export const ChartWrapper = styled.div`
  padding: 1rem;
  border-radius: 10px;
  background-color: #eee;
  display: flex;
  @media screen and (max-width: 1080px) {
    display: block;
    width: fit-content;
  }
`;

export const FooterStyle = styled.div`
  padding: 1.5rem 0rem;
  position: absolute;
  width: auto;
  margin: 0px 5px;
  bottom: 0px;
  left: 0;
  right: 0;
  text-align: center;
  background: ${colors.rootColor};
  font-size: 1.5rem;
  @media screen and (max-width: 400px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 320px) {
    font-size: 0.75rem;
  }
  color: ${colors.secondaryColor};
  border-radius: 1rem 1rem 0px 0px;
`;

export const Button = styled.button`
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

export const FormWrapper = styled.div`
  padding: 1.5rem 1rem;
  font-size: 2rem;
  @media screen and (max-width: 400px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 320px) {
    font-size: 1rem;
  }
`;
