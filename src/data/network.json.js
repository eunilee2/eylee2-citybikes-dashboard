// Function to fetch data from the specified API endpoint
async function json(url) {
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) throw new Error(`fetch failed: ${response.status}`);
    return await response.json();
  }
  
// Variable to store the returned json from the API
const pgh_network = await json(`https://api.citybik.es/v2/networks/pittsburgh`);
  
// Function to parse the data and place it into a dictionary
function parse_network(data){
    // Map is a non-primitive type in JS that can be used as a dictionary 
    // station_data is a dictionary to store all station data
    const network_data = new Map();
    
    // CHALLENGE 1.1
    // Your code here
    // use .set() to add the data to the Map
    network_data.set("name", data.network.name).set("city", data.network.id).set("latitude", data.network.location.latitude).set("longitude", data.network.location.longitude)

    // display my variables in terminal
    // .get() is not a function??
    // console.log(`this is the parse network name ${network_data.get("name")}`)
    // console.log(`this is the parse network city ${network_data.get("city")}`)
    // console.log(`this is the parse network latitude ${network_data.get("latitude")}`)
    // console.log(`this is the parse network longitude ${network_data.get("longitude")}`)

    // display my variables in observable
    // display(html `this is the parse network name ${network_data["name"]}`)
    // display(html `this is the parse network city ${network_data["city"]}`)
    // display(html `this is the parse network latitude ${network_data["latitude"]}`)
    // display(html `this is the parse network longitude ${network_data["longitude"]}`)

    // Convert the Map to a plain object that can be indexed into similar to a dictionary and an array before returning
    return Object.fromEntries(network_data);
}
  
  // stores the output of the parsed data
  const network_info = parse_network(pgh_network);

  // used for getting the output quickly in the terminal, equivalent to CURL
  process.stdout.write(JSON.stringify(network_info));