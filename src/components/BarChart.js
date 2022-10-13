/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import * as d3 from "d3";
import { useEffect } from "react";
import colors from "../styles/colors";
import styled from "styled-components";

  const BarChartContainer = styled.div`
    width:50%;
    height: 600px;
    background-color: ${colors.white};
    margin-top: 50px;
    border-radius: 20px;
    display: inline-block;
    .hoverBar {
    fill: ${colors.lightViolet};
  }
  `;

function BarChart(props) {
    console.log(props.chartData)
useEffect(() => {

    //titulos del eje x
    const days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    //margenes para ubicar grafico dentro de contenedor
    const margin = {
      left: 60,
      top: 30,
      right: 40,
      bottom: 70,
    };
    const width = props.w - margin.left - margin.right;
    const height = props.h - margin.top - margin.bottom;

    const svg = d3
      .select("#chartContainer")
      .append("svg")
      .attr("width", props.w)
      .attr("height", props.h);
    //definicion del eje x
    const xScale = d3.scaleBand().range([0, width]).domain(days).padding(0.4);
    //definicion del eje y principal
    const yScaleLeft = d3.scaleLinear().range([height, 0]).domain([0, 5000]);
    //definicion del eje y secundario
    const yScaleRight = d3.scaleLinear().range([height, 0]).domain([0, 100]);

    //creamos y posicionamos una etiqueta g dentro del svg
    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    //creamos y posicionamos una etiqueta g dentro del anterior g
    g.append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(xScale))
      .selectAll(".tick")
      .style("stroke-width", 0);

      const gAxisLeft = g.append('g')
      .call(d3.axisLeft(yScaleLeft).tickFormat((d) => `${d}€`))
      .selectAll('.domain')
      .style('stroke-width', 0);

      gAxisLeft.selectAll('g.tick')
      .style('stroke-width', 0);
      
      g.append('g')
      .attr('transform', `translate(${width}, 0)`)
      .call(d3.axisRight(yScaleRight).tickFormat((d) => `${d}%`))
      .selectAll('.domain')
      .style('stroke-width', 0);


// Hover functions

function onMouseOverSales(d, i) {
    d3.select(this).attr('class', 'hoverBar');
    g.append('text')
      .attr('class', 'val')
      .attr('x', () => {
        const day = new Date(i.day);
        return xScale(days[
          day.getDay() - 1 < 0 ? 6 : day.getDay() - 1
        ]) - 10;
      })
      .attr('y', () => yScaleLeft(i.value) - 10)
      .text(`${i.value}€`);
  }

  function onMouseOverOccupation(d, i) {
    d3.select(this).attr('class', 'hoverBar');
    g.append('text')
      .attr('class', 'val')
      .attr('x', () => {
        const day = new Date(i.day);
        return xScale(days[
          day.getDay() - 1 < 0 ? 6 : day.getDay() - 1
        ]) + 29;
      })
      .attr('y', () => yScaleRight(i.value) - 10)
      .text(`${i.value}%`);
  }

  function onMouseOut(d, i) {
    d3.select(this)
      .attr('class', '');

    d3.selectAll('.val').remove();
  }

  //

  const gSales = g.append('g');
  gSales.selectAll('rect')
    .data(props.chartData.sales)
    .enter().append('rect')
    .attr('pointer-events', 'all')
    .on('mouseover', onMouseOverSales)
    .on('mouseout', onMouseOut)
    .attr('x', (d, i) => xScale(days[i]))
    .attr('y', (d, i) => yScaleLeft(d.value))
    .attr('width', 20)
    .attr('height', (d, i) => height - yScaleLeft(d.value))
    .attr('fill', colors.lightGreen);

  const gOccupation = g.append('g');
  gOccupation.selectAll('rect')
    .data(props.chartData.occupation)
    .enter().append('rect')
    .attr('pointer-events', 'all')
    .on('mouseover', onMouseOverOccupation)
    .on('mouseout', onMouseOut)
    .attr('x', (d, i) => xScale(days[i]))
    .attr('y', (d, i) => yScaleRight(d.value))
    .attr('width', 20)
    .attr('height', (d, i) => height - yScaleRight(d.value))
    .attr('transform', 'translate(29,0)')
    .attr('fill', colors.lightRed);

  return () => {
        const barChartContainer = document.querySelector('#barChartContainer');
        if (barChartContainer) barChartContainer.innerHTML = '';
  };
}, []);

  return <BarChartContainer id="barChartContainer"/>;
}
export default BarChart;
