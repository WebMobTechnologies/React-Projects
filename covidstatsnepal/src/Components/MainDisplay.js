import React, { Component } from "react";
import WorldData from "./WorldData";
import Chart from "./Chart";

import { Link } from "react-router-dom";

import {
  MainWrapper,
  MainHeading,
  NepalDataWrapper,
  DataWrapper,
  DetailsWrapper,
  HorizontalDivider,
  Button,
  Wrapper,
} from "./utils/Styles.js";

import Loader from "react-loader-spinner";

export class MainDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      npData: {},
      npUpdated: "",
      nepalInfo: {},
      nepalHistoricalData: [],
      isChartShown: false,
      showCharts: false,
      isDataLoaded: false,
      isChartDataLoaded: false,
    };
  }

  componentDidMount() {
    const nepalDataApi =
      "https://disease.sh/v2/countries/nepal?yesterday=0&strict=true";
    fetch(nepalDataApi)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
          //this.setState({ isDataLoaded: true });
        }
      })
      .then((nepData) => {
        //console.log(nepData);
        const updatedDate = new Date(nepData.updated).toUTCString();
        return this.setState({
          npData: nepData,
          npUpdated: updatedDate,
          nepalInfo: nepData.countryInfo,
          isDataLoaded: true,
        });
      });

    const nepalHistoricalData =
      "https://disease.sh/v2/historical/Nepal?lastdays=30";
    fetch(nepalHistoricalData)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then((data) => {
        let cases = Object.values(data.timeline.cases);
        let recovered = Object.values(data.timeline.recovered);
        let deaths = Object.values(data.timeline.deaths);
        let dates = Object.keys(data.timeline.cases);

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
        this.setState({ nepalHistoricalData: datas, isChartDataLoaded: true });
      });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.isDataLoaded && this.state.isChartDataLoaded ? (
          <>
            <Wrapper style={{ borderRadius: "0px 0px 10px 10px" }}>
              <MainWrapper>
                <MainHeading>
                  Covid-19 And Nepal
                  <img src={this.state.nepalInfo.flag} alt="Nepal" />
                </MainHeading>
                <NepalDataWrapper>
                  <h6>
                    Last Updated: <span>{this.state.npUpdated}</span>
                  </h6>
                  <DataWrapper>
                    <div>
                      Total Cases: <br />
                      <span>{this.state.npData.cases.toLocaleString()}</span>
                    </div>
                    <div>
                      Total Deaths: <br />
                      <span>{this.state.npData.deaths.toLocaleString()}</span>
                    </div>
                    <div>
                      Total recovered: <br />
                      <span>
                        {this.state.npData.recovered.toLocaleString()}
                      </span>
                    </div>
                    <div>
                      Total Active Cases: <br />
                      <span>{this.state.npData.active.toLocaleString()}</span>
                    </div>
                    <div>
                      Total Tests Done: <br />
                      <span>{this.state.npData.tests.toLocaleString()}</span>
                    </div>
                  </DataWrapper>
                  <div className="newCases">
                    New Cases Today:{" "}
                    <span>{this.state.npData.todayCases.toLocaleString()}</span>
                  </div>
                </NepalDataWrapper>
                <Button
                  title="Last 30 days"
                  onClick={() =>
                    this.setState((prevState) => {
                      return {
                        showCharts: !prevState.showCharts,
                        isChartShown: !prevState.isChartShown,
                      };
                    })
                  }>
                  {this.state.isChartShown
                    ? "Hide Graphical Data"
                    : "View Data Graphically"}
                </Button>
                {this.state.showCharts ? (
                  <Chart data={this.state.nepalHistoricalData} />
                ) : null}
                <HorizontalDivider />
                <DetailsWrapper>
                  <p>
                    For More Detailed Info{" "}
                    <Link to="/view-by-country">click here.</Link>
                  </p>
                </DetailsWrapper>
              </MainWrapper>
            </Wrapper>
            <Wrapper>
              <WorldData />
            </Wrapper>
          </>
        ) : (
          <Loader type="Circles" color="#00BFFF" height={80} width={80} />
        )}
      </React.Fragment>
    );
  }
}

export default MainDisplay;
