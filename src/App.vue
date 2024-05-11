<script setup>
import * as d3 from "d3";
import { DateTime } from "luxon";
import { finalData } from "./data/data.js";
// enum BowserStatus {
//   MAINTENANCE = "MAINTENANCE",
//   MOVING = "MOVING",
//   IDLE = "IDLE",
// }
function getColor(status) {
  switch (status) {
    case "MAINTENANCE":
      return "red";
    case "MOVING":
      return "green";
    case "IDLE":
      return "yellow";
    default:
      return "black"; // Default color if status is not recognized
  }
}

// interface BowserGantChartData {
//   regNo: string;
//   startTime: string;
//   endTime: string;
//   driverName: string;
//   status: BowserStatus;
// }
// const convertMillisecondsToDateTimeString = (milliseconds: number) => {
//   const dt = DateTime.fromMillis(milliseconds);
//   return dt.toFormat("yyyy-MM-dd'T'HH:mm:ss");
// };
// const a = "2024-05-05T05:05:05";
// const b = Date.parse(a);
// const c = convertMillisecondsToDateTimeString(b);
// console.log(c);

//sorting logic for the shift
// shiftSchedules.sort(function (a, b) {
//   const t1 = Date.parse(a.start_time);
//   const t2 = Date.parse(b.start_time);
//   return t1 - t2;
// });

const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
const width = window.innerWidth;
const height = window.innerHeight;
const marginTop = 20;
const marginRight = 20;
const marginBottom = 30;
const marginLeft = 40;

const displayData = finalData.slice(0, 57);
console.log(
  displayData.sort(function (a, b) {
    const t1 = Date.parse(a.start_time);
    const t2 = Date.parse(b.start_time);
    return t1 - t2;
  }),
  "dsiplay data"
);
const drawChart = () => {
  const svg = d3.select("#myChart").attr("width", width).attr("height", height);

  const x = d3
    .scaleTime()
    .domain([new Date("2024-04-29T00:00:00"), new Date("2024-04-30T00:00:00")]) // Assuming the x-axis represents one day (from 2023-01-01 to 2023-01-02)
    .range([marginLeft, width - marginRight]);

  // Define x-axis generator
  const xAxis = d3
    .axisBottom(x)
    .ticks(d3.timeMinute.every(60)) // Set ticks to every 60 minutes
    .tickFormat(d3.timeFormat("%H:%M")); // Format tick labels as hours and minutes

  const tooltip = d3
    .select("body")
    .append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);
  // Append x-axis to the SVG
  svg
    .append("g")
    .attr("transform", `translate(0,${height - marginBottom})`) // Position x-axis at the bottom of the chart
    .call(xAxis);
  const y = d3
    .scaleBand()
    .domain(displayData.map((d) => d.regNo))
    .range([height - marginBottom, marginTop])
    .padding(0.2);
  // Add the y-axis.
  svg
    .append("g")
    .attr("transform", `translate(${marginLeft},0)`)
    .call(d3.axisLeft(y));

  svg
    .selectAll(".shift")
    .data(finalData)
    .enter()
    .append("rect")
    .attr("class", "shift")
    .attr("x", (d) => x(new Date(d.start_time))) // Concatenate date with start time
    .attr("y", (d) => y(d.regNo))
    .attr("width", (d) => x(new Date(d.end_time)) - x(new Date(d.start_time)))
    .attr("height", y.bandwidth())
    .attr("fill", (d) => getColor(d.status))
    .on("mouseover", (d) => {
      // console.log(d.target.__data__);
      const { regNo, start_time, end_time } = d.target.__data__;
      tooltip.transition().duration(200).style("opacity", 0.9);
      tooltip
        .html(
          "Reg No: " +
            regNo +
            "<br/>" +
            "Start Time: " +
            start_time +
            "<br/>" +
            "End Time: " +
            end_time
        )
        .style("left", d3.event.pageX + "px") // Use d3.event.pageX for X position
        .style("top", d3.event.pageY + "px"); // Use d3.event.pageY for Y position
    })
    // Add mouseout event listener
    .on("mouseout", function (d) {
      tooltip.transition().duration(500).style("opacity", 0);
    });
};

// Ensure the chart is drawn after the component is mounted
import { onMounted } from "vue";
onMounted(drawChart);
</script>

<template>
  <div>
    <h2>Vehicle Schedule</h2>
    <svg id="myChart" class=""></svg>
  </div>
</template>

<style scoped>
/* Change axis and label color to black */
text {
  fill: black !important;
}

.axis path,
.axis line {
  stroke: black !important;
}
</style>
