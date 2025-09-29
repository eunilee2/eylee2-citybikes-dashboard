---
toc: false
theme: [light, wide, alt, cotton]
---
<!-- PROVIDED: This controls the theme of the page! [OPTIONAL] Feel free to change and play around with the theme to find one you like for this page! -->
<!-- HINT: Reference the documentation given in the instructions! -->


<!-- PROVIDED: Header/Page Title -->
# Station Demand Visualization



<!-- PROVIDED code: Imports the component used for this page's visualization. -->
```js
// imports modules to be used
import {bike_type_plot} from "./components/bike-type-plot.js";
import {station_demand_plot} from "./components/station-demand-plot.js";
```


<!-- // CHALLENGE 5.1 -->
<!-- YOUR TURN: Add code to load the data from stations.json.js-->
<!-- HINT: Use a FileAttachment like we did in Lab 2: Observable Dashboard! -->
<!-- Imports the data from the network and stations data loaders. -->
```js
// loads the network data from the data loader
// this returns an array!
const network_array = await FileAttachment("./data/network.json").json();
```

```js
// loads the stations data from the data loader
// this returns a Map!
const stations_map = await FileAttachment("./data/stations.json").json();
```



<!-- PROVIDED code: Converts the stations_map into a flat array for easy indexing by the visualization. -->
```js
// Convert nested station data into a flat array of objects
const stations_array = Object.entries(stations_map).map(([station_name, info]) => ({
    name: info.name,
    free_bikes: info.free_bikes,
    empty_slots: info.empty_slots,
    normal_bikes: info.normal_bikes,
    ebikes: info.ebikes,
    timestamp: info.timestamp
}));
```

<!-- PROVIDED code: Displays the visualization. -->
<!--Note that we have passed in the data as arrays for both the network_array and stations_array-->
<div class="grid grid-cols-1">
  <div class="card"> ${resize((width) => station_demand_plot(network_array, stations_array, {width}))} </div>
</div>