import * as Plot from "npm:@observablehq/plot";
import * as d3 from "npm:d3";

export function bike_type_plot(data, {width} = {}) {
    // if needed, variables can be created here
    // const ebikes = data.get("ebikes");
    // const normal_bikes = data.get("normal_bikes");
    // const total_slots = data.get("empty_slots") + ebikes + normal_bikes;

    const ebikes = data["ebikes"];
    const normal_bikes = data["normal_bikes"];
    const total_slots = data["empty_slots"] + ebikes + normal_bikes;

    return Plot.plot({
        title: `Bike Type Availability at ${data["name"]}`,
        marks: [
            Plot.barY(
                [
                    { type: "E-bikes", count: ebikes },
                    { type: "Normal bikes", count: normal_bikes } // Add more categories if needed
                ],
                {
                    x: "type",
                    y: "count",
                    fill: "type",
                    tip: true,
            }),
        ],
        x: {
            label: "Bike Type",
        },
        y:{
            label: "Number of Bikes",
            domain: [0, total_slots],
            ticks: d3.range(0, total_slots+1, 1),
            grid: true,
            labelAnchor: "center"
        },
        color: {
            domain: ["E-bikes", "Normal bikes"],
            range: ["#EEEE02", "#0202EE"],
            legend: true
        }
    })
}