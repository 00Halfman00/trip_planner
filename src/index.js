//console.log("Hello from JavaScipt");

const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = 'pk.eyJ1IjoiMDBvc2NhcnNhbmNoZXowMCIsImEiOiJja2Rzd3Q4M2gwMzdlMzNrNms0Zm5pMmp3In0.B-SX_Y5BqDU7coNV_1_zNA';

const map = new mapboxgl.Map({
    container: "map",
    center: [-74.009, 40.705],
    zoom: 12,
    style: "mapbox://styles/mapbox/streets-v10"
})