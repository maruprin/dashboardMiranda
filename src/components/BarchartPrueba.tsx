/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import * as d3 from "d3";
import { useEffect, useRef } from "react";
import colors from "../styles/colors";
import styled from "styled-components";

const BarChartContainer = styled.div`
  width: 50%;
  height: 600px;
  background-color: ${colors.white};
  margin-top: 50px;
  border-radius: 20px;
  display: inline-block;
  .hoverBar {
    fill: ${colors.lightViolet};
  }
`;

function BarchartPrueba(props) {
  console.log(props.chartData);
  const ref = useRef();
  useEffect(() => {
    const xScale = d3.scaleLinear().domain([0, 100]).range([10, 290]);
    const yScaleLeft = d3.scaleLinear().range([600, 0]).domain([0, 5000]);

    const svgElement = d3.select(ref.current);
    const axisGenerator = d3.axisBottom(xScale);
    svgElement.append("g").call(axisGenerator);


    const svgElement2 = d3.select(ref.current);
    svgElement2
      .append("rect")
      .attr("x", 0)
      .attr("y", 120)
      .attr("height", 300)
      .attr("width", 50)
      .style("fill", "violet");
  }, []);
  return (
    <BarChartContainer id="barChartContainer">
      <svg ref={ref} />
    </BarChartContainer>
  );
}
export default BarchartPrueba;
