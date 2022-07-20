// Define a view
var view = new ol.View({
  projection: "EPSG:4326",
  center: [126.97306274774252, 37.29377974024409], //Coordinates of center
  zoom: 15, //zoom level of map
});

//Define basemap
var OSMBaseMap = new ol.layer.Tile({
  source: new ol.source.OSM({
    wrapX: false,
  }),
});

// Define array of layers
var layerArray = [OSMBaseMap];

// Define our map
var map = new ol.Map({
  target: "map",
  layers: layerArray,
  view: view,
});

// var inputJSON = {
//   "type": "FeatureCollection",
//   "features": [
//     {
//       "type": "Feature",
//       "properties": {},
//       "geometry": {
//         "type": "Polygon",
//         "coordinates": [
//           [
//             [
//               76.025390625,
//               24.00632619875113
//             ],
//             [
//               77.51953125,
//               24.00632619875113
//             ],
//             [
//               77.51953125,
//               25.562265014427492
//             ],
//             [
//               76.025390625,
//               25.562265014427492
//             ],
//             [
//               76.025390625,
//               24.00632619875113
//             ]
//           ]
//         ]
//       }
//     },
//     {
//       "type": "Feature",
//       "properties": {},
//       "geometry": {
//         "type": "Polygon",
//         "coordinates": [
//           [
//             [
//               77.9150390625,
//               28.69058765425071
//             ],
//             [
//               77.3876953125,
//               28.22697003891834
//             ],
//             [
//               77.95898437499999,
//               27.800209937418252
//             ],
//             [
//               79.013671875,
//               28.033197847676377
//             ],
//             [
//               79.013671875,
//               28.34306490482549
//             ],
//             [
//               78.6181640625,
//               28.729130483430154
//             ],
//             [
//               77.9150390625,
//               28.69058765425071
//             ]
//           ]
//         ]
//       }
//     }
//   ]
// }

//   Vector source
// var vectorSource = new ol.source.Vector({
//     features : (new ol.format.GeoJSON().readFeatures(inputJSON))
// })

// Vector Layer
// var vectorLayer = new ol.layer.Vector({
//     source: vectorSource,
//     style: new ol.style.Style({
//         stroke : new ol.style.Stroke({
//             color : '#FF0000',
//             width : 5,
//             lineDash:[5,10]
//         })
//     })

// })

// // Adding vector layer to map
// // map.addLayer(vectorLayer)

// // Adding vector layer from geojson file
const extSource = new ol.source.Vector({
  format: new ol.format.GeoJSON(),
  url: "test.geojson",
  //url : 'http://localhost:8080/geoserver/tiger/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=tiger%3Apoly_landmarks&maxFeatures=50&outputFormat=application%2Fjson'
});

const extLayer = new ol.layer.Vector({
  source: extSource,
  // style: new ol.style.Style({
  //     fill : new ol.style.Fill({
  //         color: 'rgba(142, 226, 136, 0.1)'
  //     }),
  //     stroke: new ol.style.Stroke({
  //         color:'#000000',
  //         width:3
  //     })
  // })
  style: function (feature) {
    if (feature.getProperties().prop == "elementaryschool") {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: "#ff0000",
        }),
        stroke: new ol.style.Stroke({
          color: "#000000",
          width: 3,
        }),
      });
    } else if (feature.getProperties().prop == "university") {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: "#ffff00",
        }),
        stroke: new ol.style.Stroke({
          color: "#000000",
          width: 3,
        }),
      });
    } else if (feature.getProperties().prop == "highway") {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: "#ffff00",
        }),
        stroke: new ol.style.Stroke({
          color: "#ff22ff",
          width: 5,
        }),
      });
    } else if (feature.getProperties().prop == "lowway") {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: "#ffffff",
        }),
        stroke: new ol.style.Stroke({
          color: "#33ff33",
          width: 3,
        }),
      });
    } else if (feature.getProperties().prop == "lab") {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: "#ffffff",
        }),
        stroke: new ol.style.Stroke({
          color: "#33ff33",
          width: 3,
        }),
      });
    } else if (feature.getProperties().prop == "lake") {
      return new ol.style.Style({
        // fill: new ol.style.Fill({
        //   color: "#ffffff",
        // }),
        stroke: new ol.style.Stroke({
          color: "#33ff33",
          width: 3,
        }),
      });
    } else if (feature.getProperties().prop == "atm") {
      return new ol.style.Style({
        // fill: new ol.style.Fill({
        //   color: "#ffffff",
        // }),
        // image: new Icon({
        //   src: "flag.png",
        // }),
        image: new ol.style.Icon({
          src: "flag.png",
          scale: 0.05,
        }),
      });
    } else if (feature.getProperties().prop == "labs") {
      return new ol.style.Style({
        // fill: new ol.style.Fill({
        //   color: "#ffffff",
        // }),
        // image: new Icon({
        //   src: "flag.png",
        // }),
        image: new ol.style.Icon({
          src: "aa.png",
          scale: 0.1,
        }),
      });
    } else {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: "#000ff0",
        }),
        stroke: new ol.style.Stroke({
          color: "#000000",
          width: 3,
        }),
      });
    }
  },
});

map.addLayer(extLayer);

// Create Heatmap
// Define heatmap source
const heatmapsource = new ol.source.Vector({
  format: new ol.format.GeoJSON(),
  url: "police.geojson",
});

// Define heatmap lauer
const heatmapLayer = new ol.layer.Heatmap({
  source: heatmapsource,
  blur: 30,
  gradient: ["#ff00ff", "#00f00f", "#ff0000", "#ffffff", "#000000"],
});

// add layer to map
// map.addLayer(heatmapLayer);

// Graticule
// const graticule = new ol.Graticule({
//   map: map,
//   showLabels: true,
// });

/* 
Q. Create a map having 5 lines, 3 polygons and 10 points. 
 each line should be representaion of different road. (e.g. Highway, Villege Road, Rail road,etc. )
 each polygon should be a representation of different landuse(e.g. Residential area, Garden , Lake)
 points should be a combination of Atms and bus stops and then put an image of that point as a marker

 */
