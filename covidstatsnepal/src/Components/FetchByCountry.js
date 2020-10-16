import React, { Component } from "react";

import Loader from "react-loader-spinner";
import CountryData from "./CountryData";

import * as styles from "./utils/Styles";
import { ButtonGraphical } from "./utils/CoutntryDataStyles";

export class FetchByCountry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: [],
      countryValue: "",
      countries: [],
      isDataLoaded: false,
      countryData: {},
      countryInfo: {},
    };
    this.handelChange = this.handelChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // gets Data from the api of all countries
  componentDidMount() {
    const allCountryDataApi = "https://disease.sh/v2/countries";
    fetch(allCountryDataApi)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then((countriesData) => {
        let countryList = this.getCountryNames(countriesData);

        console.log(countriesData);
        // const updatedDate = new Date(countriesData.updated).toUTCString();
        return this.setState({
          countries: countryList,
          allData: countriesData,
          isDataLoaded: true,
        });
      });
  }

  //returns the list of countries
  getCountryNames = (countriesData) => {
    // console.log(countriesData);
    let countryNames = [];
    countryNames = countriesData.map((countryData) => {
      const { country } = countryData;
      return country;
    });
    return countryNames;
  };

  handelChange = (event) => {
    this.setState({ countryValue: event.target.value }); //sets the search value to state
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let spCountryData = this.getCountryData(); //recieve specific country data based on search
    this.setState({
      countryData: spCountryData,
      countryInfo: spCountryData.countryInfo,
    }); //sets the state
  };

  getCountryData = () => {
    let countryData = {};
    //filtering data based on state of search
    this.state.allData.filter((data) => {
      if (this.state.countryValue === data.country) {
        countryData = data;
      }
      return null;
    });
    return countryData; //Data for a sp country
  };

  render() {
    return (
      <div style={{ minHeight: "80vh" }}>
        {/* form starts here */}
        <styles.Wrapper style={{ borderRadius: "0px 0px 10px 10px" }}>
          <styles.FormWrapper>
            <form onSubmit={this.handleSubmit}>
              <div>
                <input
                  className="inputField"
                  list="countryList"
                  value={this.state.countryValue}
                  onChange={this.handelChange}
                />
                <datalist id="countryList" size={4}>
                  {this.state.countries.map((country, index) => {
                    return (
                      <option className="data" key={index} value={country} />
                    );
                  })}
                </datalist>
              </div>
              <div>
                <ButtonGraphical type="submit">Get Data</ButtonGraphical>
              </div>
            </form>
          </styles.FormWrapper>
        </styles.Wrapper>
        {/* form ends here */}
        <div>
          {!this.state.isDataLoaded ? (
            <Loader type="Circles" color="#00BFFF" height={80} width={80} />
          ) : (
            <CountryData
              data={this.state.countryData}
              countryInfo={this.state.countryInfo}
            />
          )}
        </div>
      </div>
    );
  }
}

export default FetchByCountry;
