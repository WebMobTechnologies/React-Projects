import React, { Component } from "react";

import { XAxis, YAxis, Tooltip, Line, LineChart, Legend } from "recharts";

import styled from "styled-components";

const ChaartHeading = styled.h4`
  color: #f7f7f7;
`;

const getLineChart = (data, width, height) => {
  return (
    <LineChart
      width={width}
      height={height}
      data={data}
      margin={{ left: 40, right: 5, top: 5, bottom: 5 }}>
      <XAxis dataKey="dates" />
      <YAxis />
      <Tooltip
        contentStyle={{
          background: "#efefef",
          borderRadius: 5,
        }}
      />
      <Legend
        verticalAlign="top"
        wrapperStyle={{
          color: "#f7f7f7",
        }}
      />
      <Line type="monotone" dataKey="cases" stroke="#40bfe6" strokeWidth={5} />
      <Line type="monotone" dataKey="deaths" stroke="#b4001e" strokeWidth={5} />
      <Line
        type="monotone"
        dataKey="recovered"
        stroke="#00ce9a"
        strokeWidth={5}
      />
    </LineChart>
  );
};

export class Chart extends Component {
  constructor() {
    super();
    this.state = {
      width: 500,
      height: 400,
      //dataForChart: [],
    };
  }

  render() {
    return (
      <div
        style={{
          background: "#1b2e4f",
          padding: 32,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
          flexDirection: "column",
        }}>
        <ChaartHeading>
          The Graphical Data For Last 30 Days is shown below:
        </ChaartHeading>
        {getLineChart(this.props.data, this.state.width, this.state.height)}
      </div>
    );
  }
}

export default Chart;
