/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import * as d3 from "d3";
import { useEffect } from "react";
import colors from "../styles/colors";
import styled from "styled-components";
import { useRef } from "react";
import { useState } from "react";

const BarChartContainer = styled.div`
  width: 50%;
  height: 600px;
  background-color: ${colors.white};
  margin: 0 auto;
  margin-top: 50px;
  border-radius: 20px;
  display: inline-block;
  overflow: auto;
  padding: 40px;
  box-shadow: 0px 5px 8px #00000028;
  :hover {
    box-shadow: 0px 7px 20px #00000048;
  }
  .hoverBar {
    fill: ${colors.lightViolet};
  }
`;

function BarChart() {
  const svgRef = useRef();
  const [data] = useState([10, 20, 30, 40, 50, 60]);
  const [data2] = useState([90, 80, 40, 20, 30, 70]);
  const [data3] = useState([
    {
      day: "Friday",
      sales: 1000,
      occupancy: 1400,
    },
    {
      day: "Saturday",
      sales: 2345,
      occupancy: 1500,
    },
    {
      day: "Sunday",
      sales: 3422,
      occupancy: 3300,
    },
    {
      day: "Monday",
      sales: 2300,
      occupancy: 2000,
    },
    {
      day: "Tuesday",
      sales: 1450,
      occupancy: 1100,
    },
    {
      day: "Wednesday",
      sales: 2130,
      occupancy: 2200,
    },
    {
      day: "Thursday",
      sales: 1200,
      occupancy: 1100,
    },
  ]);
  useEffect(() => {
    console.log(data3.map((v, i) => v.sales));
    console.log(data3.map((v, i) => v.occupancy));
    const days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    const w = 500;
    const h = 500;
    const svg = d3
      .select(svgRef.current)
      .attr("width", w)
      .attr("height", h)
      .attr("color", colors.gray)
      .attr("overflow", "visible")
      .style("margin", 50);
    const xScale = d3
      .scaleBand()
      .domain(data3.map((val, i) => i))
      .range([0, w])
      .padding([0.6]);

    const yScale = d3.scaleLinear().domain([0, 4000]).range([h, 0]);
    const yScaleR = d3.scaleLinear().domain([0, 100]).range([h, 0]);
    const xAxis = d3.axisBottom(xScale);
    const yAxisL = d3.axisLeft(yScale).ticks(10);
    const yAxisR = d3.axisRight(yScaleR).ticks(10);

    svg.append("g").call(xAxis).attr("transform", `translate(0,${h})`);

    svg.append("g").call(yAxisL);
    svg.append("g").call(yAxisR).attr("transform", `translate(${w})`);
    // d3.scalePoint().domain(['Apples','Oranges','Pears','Plums']).range([0,chartWidth]);
    svg
      .selectAll(".bar")
      .data(data3.map((v, i) => v.sales))
      .join("rect")
      .attr("fill", colors.redLess)
      .attr("x", (val, i) => xScale(i))
      .attr("y", yScale)
      .attr("width", xScale.bandwidth() / 3)
      .attr("height", (val) => h - yScale(val));

    svg
      .selectAll(".bar2")
      .data(data3.map((v, i) => v.occupancy))
      .join("rect")
      .attr("fill", colors.green)
      .attr("x", (val, i) => xScale(i) + 20)
      .attr("y", yScale)
      .attr("width", xScale.bandwidth() / 3)
      .attr("height", (val) => h - yScale(val));
  }, [data3]);

  return (
    <BarChartContainer>
      <svg ref={svgRef}></svg>
    </BarChartContainer>
  );
}
export default BarChart;
