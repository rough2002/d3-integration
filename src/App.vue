<script setup lang="ts">
import * as d3 from "d3";
import { DateTime } from "luxon";

enum BowserStatus {
  MAINTENANCE = "MAINTENANCE",
  MOVING = "MOVING",
  IDLE = "IDLE",
}

interface BowserGantChartData {
  regNo: string;
  startTime: string;
  endTime: string;
  driverName: string;
  status: BowserStatus;
}
// const convertMillisecondsToDateTimeString = (milliseconds: number) => {
//   const dt = DateTime.fromMillis(milliseconds);
//   return dt.toFormat("yyyy-MM-dd'T'HH:mm:ss");
// };
// const a = "2024-05-05T05:05:05";
// const b = Date.parse(a);
// const c = convertMillisecondsToDateTimeString(b);
// console.log(c);

const data = [
  {
    regNo: "V 3456",
    startTime: "00:00:00",
    endTime: "02:00:00",
    shift: false,
  },
  {
    regNo: "V 3456",
    startTime: "02:00:00",
    endTime: "03:00:00",
    shift: true,
  },
  {
    regNo: "V 3456",
    startTime: "03:00:00",
    endTime: "23:59:59",
    shift: false,
  },

  {
    regNo: "V 1234",
    startTime: "00:00:00",
    endTime: "18:30:00",
    shift: false,
  },
  {
    regNo: "V 1234",
    startTime: "18:30:00",
    endTime: "21:30:00",
    shift: true,
  },
  {
    regNo: "V 1234",
    startTime: "21:30:00",
    endTime: "23:59:59",
    shift: false,
  },

  {
    regNo: "V 5234",
    startTime: "00:00:00",
    endTime: "04:30:00",
    shift: false,
  },
  {
    regNo: "V 5234",
    startTime: "04:30:00",
    endTime: "05:30:00",
    shift: true,
  },
  {
    regNo: "V 5234",
    startTime: "05:30:00",
    endTime: "23:59:59",
    shift: false,
  },
  { regNo: "V 1274", startTime: "11:30:00", endTime: "16:30:00", shift: true },
  { regNo: "V 1274", startTime: "21:30:00", endTime: "23:30:00", shift: true },
  { regNo: "V 1274", startTime: "23:30:00", endTime: "23:59:59", shift: false },
  { regNo: "V 1274", startTime: "16:30:00", endTime: "21:30:00", shift: false },
  { regNo: "V 1274", startTime: "00:00:00", endTime: "11:30:00", shift: false },
  {
    regNo: "M 3456",
    startTime: "00:00:00",
    endTime: "02:00:00",
    shift: false,
  },
  {
    regNo: "M 3456",
    startTime: "02:00:00",
    endTime: "03:00:00",
    shift: true,
  },
  {
    regNo: "M 3456",
    startTime: "03:00:00",
    endTime: "23:59:59",
    shift: false,
  },

  {
    regNo: "L 1111",
    startTime: "00:00:00",
    endTime: "02:00:00",
    shift: false,
  },
  {
    regNo: "L 1111",
    startTime: "02:00:00",
    endTime: "09:30:00",
    shift: true,
  },
  {
    regNo: "L 1111",
    startTime: "09:30:00",
    endTime: "00:00:00",
    shift: false,
  },

  // Add more data points as needed
];

const shiftSchedules = [
  {
    start_time: "2024-05-05T00:00:00",
    end_time: "2024-05-05T14:30:00",
  },
  {
    start_time: "2024-05-05T16:00:00",
    end_time: "2024-05-05T17:30:00",
  },
  {
    start_time: "2024-05-05T15:00:00",
    end_time: "2024-05-05T15:30:00",
  },
];

//sorting logic for the shift
shiftSchedules.sort(function (a, b) {
  const t1 = Date.parse(a.start_time);
  const t2 = Date.parse(b.start_time);
  return t1 - t2;
});

// milleseconds to this format 2024-05-05T15:30:00
const convertMillisecondsToDateTimeString = (milliseconds: number) => {
  const dt = DateTime.fromMillis(milliseconds);
  return dt.toFormat("yyyy-MM-dd'T'HH:mm:ss");
};

const convertDateTimeStringToMilliseconds = (dateString: string) => {
  const milleseconds = Date.parse(dateString);
  return milleseconds;
};

const calculateEmptySlots = (shifts: any) => {
  const emptySlots = [];
  //for start
  const startTimeMilleSeconds = convertDateTimeStringToMilliseconds(
    shifts[0].start_time
  );
  const startTimeStr = DateTime.fromMillis(startTimeMilleSeconds).toFormat(
    "HH:mm:ss"
  );

  //for end
  const endTimeMilleSeconds = convertDateTimeStringToMilliseconds(
    shifts[shifts.length - 1].end_time
  );
  const endTimeStr =
    DateTime.fromMillis(endTimeMilleSeconds).toFormat("HH:mm:ss");

  if (startTimeStr !== "00:00:00") {
    emptySlots.push({
      start_time: "00:00:00",
      end_time: shifts[0].start_time,
    });
  }
  if (endTimeStr !== "00:00:00") {
    emptySlots.push({
      start_time: endTimeStr,
      end_time: "00:00:00",
    });
  }
  //for calculating emptySlots between the shifts
  shifts.forEach((shift: any, i: number) => {
    const nextShift = shifts[i + 1];
    if (shift?.end_time !== nextShift?.start_time && nextShift) {
      console.log(nextShift);
      emptySlots.push({
        start_time: shift?.end_time,
        end_time: nextShift?.start_time,
      });
    }
  });
  return [...shifts, ...emptySlots];
};

const displayData = calculateEmptySlots(shiftSchedules).sort(function (a, b) {
  const t1 = Date.parse(a.start_time);
  const t2 = Date.parse(b.start_time);
  return t1 - t2;
});
console.table(displayData);

const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
const width = 1400;
const height = 400;
const marginTop = 20;
const marginRight = 20;
const marginBottom = 30;
const marginLeft = 40;

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
    .domain(data.map((d) => d.regNo))
    .range([height - marginBottom, marginTop])
    .padding(0.2);
  // Add the y-axis.
  svg
    .append("g")
    .attr("transform", `translate(${marginLeft},0)`)
    .call(d3.axisLeft(y));

  svg
    .selectAll(".shift")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", "shift")
    .attr("x", (d) => x(new Date("2024-04-29T" + d.startTime))) // Concatenate date with start time
    .attr("y", (d) => y(d.regNo))
    .attr(
      "width",
      (d) =>
        x(
          new Date(
            d.endTime === "00:00:00"
              ? "2024-04-30T" + d.endTime
              : "2024-04-29T" + d.endTime
          )
        ) - x(new Date("2024-04-29T" + d.startTime))
    )
    .attr("height", y.bandwidth())
    .attr("fill", (d) =>
      d.shift ? "rgba(85, 245, 39, 0.58)" : "rgba(227, 241, 87, 0.65)"
    )
    .on("mouseover", (d) => {
      // console.log(d.target.__data__);
      const { regNo, startTime, endTime } = d.target.__data__;
      tooltip.transition().duration(200).style("opacity", 0.9);
      tooltip
        .html(
          "Reg No: " +
            regNo +
            "<br/>" +
            "Start Time: " +
            startTime +
            "<br/>" +
            "End Time: " +
            endTime
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
