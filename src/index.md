---
toc: false
theme: [light, wide, alt, cotton]
---
<!-- PROVIDED: This controls the theme of the page! [OPTIONAL] Feel free to change and play around with the theme to find one you like for this page! -->
<!-- HINT: Reference the documentation given in the instructions! -->

<!-- PROVIDED: Header/Page Title -->
# CityBikes Dashboard Home
<br>


<!-- CHALLENGE 3.1 -->
<!-- YOUR TURN: Add code to load the data from stations.json.js-->
<!-- HINT: Use a FileAttachment like we did in Lab 2: Observable Dashboard! -->
<!-- Imports the data from the network and stations data loaders -->

<!-- Referred to this source: https://observablehq.observablehq.cloud/data-loader-examples/js -->
```js
const network_info = FileAttachment("data/network.json").json();
console.log(`this is network_info: ${Object.entries(network_info)}`);
```

```js
// import network_info from "./data/network.json.js";
// console.log(`this is network_info: ${Object.entries(network_info)}`);
```

```js
// loads the stations data from the data loader
const stations = FileAttachment("data/stations.json").json();
// import stations from "./data/stations.json.js";
// console.log(`this is stations: ${Object.entries(stations)}`);
// version 2 import: stringify the json... 
// const temp_stations = JSON.stringify(stations);
// console.log(`this is temp_stations: ${temp_stations}`);
```

<!-- CHALLENGE 3.2 -->
<!-- YOUR TURN: Add a grid with three cards of information here -->
<!-- Reference the instructions for what information to display in each card. -->
<!-- HINT: You will have to use string interpolation like this `This is a ${interpolated_value}`! -->
<!-- HINT: Reference the .set() method documentation for getting data from a Map in JS linked in the instructions. ! -->

<div class="grid grid-cols-3">
    <div class="card" style="text-align: center;"> Total number of stations in the network: <br>
        <strong>${Object.keys(stations).length}</strong>
    </div>
    <div class="card" style="text-align: center;"> City that the network is in and name of network: <br>
        <strong>${network_info["city"].charAt(0).toUpperCase() + network_info["city"].slice(1)}, ${network_info["name"]}</strong>
    </div>
    <div class="card" style="text-align: center;"> Latitude and Longitude of the network: <br>
        <strong>${network_info["latitude"]}, ${network_info["longitude"]}</strong>
    </div>
</div>


<div class="grid grid-cols-2">
    <div class="card" style="text-align: center;">See the <a href="/bike-types.html"><b>bike types dashboard page</b></a> for information on bike type availability at each of the stations in the network.</div>
    <div class="card" style="text-align: center;">See the <a href="/station-demand.html"><b>station demand visualization page</b></a> for information on the demand of the stations in the network.</b>.
    </div>
</div>