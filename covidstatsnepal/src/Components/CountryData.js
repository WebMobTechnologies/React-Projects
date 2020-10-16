import React, { Component } from "react";
import { Link } from "react-router-dom";

import * as styles from "./utils/CoutntryDataStyles";

import Chart from "./Chart";
import Loader from "react-loader-spinner";

export class CountryData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryData: {},
      countryInfo: {},
      updatedDate: "",
      countryHistoricalData: [],
      hasHistoricalData: false,
      isChartShown: false,
      showCharts: false,
      isDataLoaded: false,
    };
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (this.props.countryInfo) {
      if (prevProps !== this.props && this.props !== null) {
        //this.setChartData();
        const updatedDate = new Date(this.props.data.updated).toUTCString();
        this.setState({
          countryData: this.props.data,
          updatedDate: updatedDate,
          countryInfo: this.props.countryInfo,
          countryHistoricalData: [],
          hasHistoricalData: false,
          isChartShown: false,
          showCharts: false,
          isDataLoaded: true,
          hasErrors: false,
        });
      }
    }
  };
  setChartData() {
    if (this.state.isDataLoaded) {
      let query = this.state.countryData.country;
      let apiLinkForChart = `https://disease.sh/v2/historical/${query}?lastdays=30`;
      fetch(apiLinkForChart)
        .then((res) => {
          if (res.status === 200) {
            return res.json();
          } else if (res.status === 404) this.setState({ hasErrors: true });
        })
        .then((chartData) => {
          if (!this.state.hasErrors) {
            let cases = Object.values(chartData.timeline.cases);
            let recovered = Object.values(chartData.timeline.recovered);
            let deaths = Object.values(chartData.timeline.deaths);
            let dates = Object.keys(chartData.timeline.cases);

            let datas = [];

            for (let i = 0; i < dates.length; i++) {
              let newData = {
                date: "",
                cases: "",
                deaths: "",
                recovered: "",
              };
              newData["date"] = dates[i];
              newData["cases"] = cases[i];
              newData["recovered"] = recovered[i];
              newData["deaths"] = deaths[i];
              datas.push(newData);
            }
            this.setState({
              countryHistoricalData: datas,
              hasHistoricalData: true,
            });
          }
        });
    } else return;
  }
  getDetails = () => {
    return (
      <div>
        {/* Header */}
        <styles.HeaderTitle>
          <h1>
            Covid-19 and {this.state.countryData.country}
            <br />
          </h1>
          <img src={this.state.countryInfo.flag} alt="CountryFlag" />
        </styles.HeaderTitle>
        <div>
          <span>Last Updated:{this.state.updatedDate}</span>
        </div>
        <div>
          <styles.DataWrapper>
            <styles.DataHolder>
              <styles.DataTitle>Total Cases:</styles.DataTitle>
              <styles.DataValue id="totalCases">
                {this.state.countryData.cases}
              </styles.DataValue>
            </styles.DataHolder>
            <styles.DataHolder>
              <styles.DataTitle>Total Deaths:</styles.DataTitle>
              <styles.DataValue id="totalDeaths">
                {this.state.countryData.deaths}
              </styles.DataValue>
            </styles.DataHolder>
            <styles.DataHolder>
              <styles.DataTitle>Total Recovered:</styles.DataTitle>
              <styles.DataValue id="totalRecovered">
                {this.state.countryData.recovered}
              </styles.DataValue>
            </styles.DataHolder>
          </styles.DataWrapper>
          <styles.DataWrapper>
            <styles.DataHolder>
              <styles.DataTitle>Total Active Cases:</styles.DataTitle>
              <styles.DataValue id="activeCases">
                {this.state.countryData.active}
              </styles.DataValue>
            </styles.DataHolder>
            <styles.DataHolder>
              <styles.DataTitle>New Cases Today:</styles.DataTitle>
              <styles.DataValue id="newCases">
                {this.state.countryData.todayCases}
              </styles.DataValue>
            </styles.DataHolder>
            <styles.DataHolder>
              <styles.DataTitle>New Deaths Today:</styles.DataTitle>
              <styles.DataValue id="newDeaths">
                {this.state.countryData.todayDeaths}
              </styles.DataValue>
            </styles.DataHolder>
          </styles.DataWrapper>
          <styles.DataWrapper>
            <styles.DataHolder>
              <styles.DataTitle>Total Tests:</styles.DataTitle>
              <styles.DataValue id="totalTests">
                {this.state.countryData.tests}
              </styles.DataValue>
            </styles.DataHolder>
            <styles.DataHolder>
              <styles.DataTitle>Critical cases:</styles.DataTitle>
              <styles.DataValue id="criticalCases">
                {this.state.countryData.critical}
              </styles.DataValue>
            </styles.DataHolder>
          </styles.DataWrapper>
        </div>
        {/* <h1>Here Comes The Chart Data</h1> */}
        <styles.ButtonGraphical type="button" onClick={this.handleClick}>
          {this.state.isChartShown
            ? "Hide Graphical Data"
            : "View Graphical Data"}
        </styles.ButtonGraphical>
        {this.state.showCharts ? (
          !this.state.hasErrors ? (
            this.state.countryHistoricalData ? (
              <Chart data={this.state.countryHistoricalData} />
            ) : (
              <Loader type="ThreeDots" color="#00bfff" height={50} width={50} />
            )
          ) : (
            <div>
              <h1>Error Fetching Data.</h1>
              <Link to="/view-by-country">Return</Link>
            </div>
          )
        ) : null}
      </div>
    );
  };

  handleClick = () => {
    this.setChartData();
    this.setState((prevState) => {
      return {
        showCharts: !prevState.showCharts,
        isChartShown: !prevState.isChartShown,
      };
    });
  };

  render() {
    //console.log(this.state.countryData);
    return (
      <styles.Wrapper>
        {!this.state.isDataLoaded ? (
          <h1>Please Search for some Data</h1>
        ) : (
          this.getDetails()
        )}
      </styles.Wrapper>
    );
  }
}

export default CountryData;
