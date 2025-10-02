import * as Plot from "npm:@observablehq/plot";
import * as d3 from "npm:d3";

export function station_demand_plot(network_data, station_data, {width} = {}) {

    return Plot.plot({
        
        title: `Station Demand in the ${network_data["name"]} Bike-Sharing Network`,
        marks: [
            Plot.barY(station_data, 
                {
                    x: "name",
                    y: "empty_slots",
                    tip: true,
                    sort: {x: "y"},
            }),
        ],
        x: {
            label: "Station Name",
            tickRotate: -45
        },
        y: {
            label: "Demand (by Empty Slots Available)",
            labelAnchor: "center"
        },
        // color: {
        //     domain: ["empty_slots"],
        //     legend: false,
        //     range: ["#FFB380"]
        // },
        marginLeft: 80,
        width: 1500,
        height: 1000,
        marginBottom: 175
    });
}