import React, { Component } from "react";

import * as styles from "./utils/Styles";
import Chart from "./Chart";

import Loader from "react-loader-spinner";

export class WorldData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      worldData: {},
      updatedTime: "",
      isChartShown: false,
      showCharts: false,
      data: [],
      isDataLoaded: false,
      isChartDataLoaded: false,
    };
  }

  componentDidMount() {
    const worldDataApi = "https://disease.sh/v2/all";
    fetch(worldDataApi)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then((worldData) => {
        const updatedDate = new Date(worldData.updated).toUTCString();
        this.setState({
          worldData: worldData,
          updatedTime: updatedDate,
          isDataLoaded: true,
        });
      });
    const apiLink = "https://disease.sh/v2/historical/all?lastdays=30";
    fetch(apiLink)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then((data) => {
        let cases = Object.values(data.cases);
        let recovered = Object.values(data.recovered);
        let deaths = Object.values(data.deaths);
        let dates = Object.keys(data.cases);

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
          // console.log(i, newData);
          datas.push(newData);
        }
        // console.log("chartData", datas);
        this.setState({ data: datas, isChartDataLoaded: true });
      });
  }

  render() {
    // console.log(this.state.worldData);
    return (
      <div>
        {this.state.isDataLoaded && this.state.isChartDataLoaded ? (
          <>
            <styles.WorldDataWrapper>
              <styles.MainHeading>World Statistics</styles.MainHeading>
              <h6 style={{ color: "#f7f7f7" }}>
                Last Updated: <span>{this.state.updatedTime}</span>
              </h6>
              <styles.DataWrapper>
                <div>
                  Total Cases: <br />
                  <span>{this.state.worldData.cases.toLocaleString()}</span>
                </div>
                <div>
                  Total Deaths: <br />
                  <span>{this.state.worldData.deaths.toLocaleString()}</span>
                </div>
                <div>
                  Total recovered: <br />
                  <span>{this.state.worldData.recovered.toLocaleString()}</span>
                </div>
                <div>
                  Total Active Cases: <br />
                  <span>{this.state.worldData.active.toLocaleString()}</span>
                </div>
              </styles.DataWrapper>
              <styles.DataWrapper>
                <div>
                  Total Tests: <br />
                  <span>{this.state.worldData.tests.toLocaleString()}</span>
                </div>
                <div>
                  Total Deaths Today: <br />
                  <span>
                    {this.state.worldData.todayDeaths.toLocaleString()}
                  </span>
                </div>
                <div>
                  Critical Cases: <br />
                  <span>{this.state.worldData.critical.toLocaleString()}</span>
                </div>
                <div>
                  New Cases Today: <br />
                  <span>
                    {this.state.worldData.todayCases.toLocaleString()}
                  </span>
                </div>
              </styles.DataWrapper>
              <styles.Button
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
              </styles.Button>
              {this.state.showCharts ? <Chart data={this.state.data} /> : null}
            </styles.WorldDataWrapper>
          </>
        ) : (
          <Loader type="Circles" color="#00BFFF" height={80} width={80} />
        )}
      </div>
    );
  }
}

export default WorldData;
