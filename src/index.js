//console.log("Hello from JavaScipt");

const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = 'pk.eyJ1IjoiMDBvc2NhcnNhbmNoZXowMCIsImEiOiJja2Rzd3Q4M2gwMzdlMzNrNms0Zm5pMmp3In0.B-SX_Y5BqDU7coNV_1_zNA';

const map = new mapboxgl.Map({
    container: "map",
    center: [-87.641, 41.895],
    zoom: 12,
    style: "mapbox://styles/mapbox/streets-v10"
});

const markerDomEl = document.createElement("div");
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

new mapboxgl.Marker(markerDomEl).setLngLat([-87.641, 41.895]).addTo(map);

// const markerDomEl = document.createElement("div"); // Create a new, detached DIV // creates a marker on map
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

// new mapboxgl.Marker(markerDomEl).setLngLat([-87.641, 41.895]).addTo(map); // [-87.641, 41.895] for Chicago


