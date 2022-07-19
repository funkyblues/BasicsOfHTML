// Define a projection

proj4.defs("EPSG:32643","+proj=utm +zone=43 +datum=WGS84 +units=m +no_defs");

// Define a view
const view = new ol.View({
  projection: 'EPSG:32643',// 'EPSG:4326',
  center : [73, 21], //[1693458.4404762825, 2015771.729578417], //Coordinates of center
  zoom : 5 // zoom level of map
})

// Define basemap
const OSMBaseMap = new ol.layer.Tile({
  source: new ol.source.OSM({
      wrapX: false
    })
})

// Define Stamen water color
const waterStamen = new ol.layer.Tile({
  source: new ol.source.Stamen({
    layer: 'toner'
  })
})

// Define array of layers
const layerArray = [OSMBaseMap]

// Define our map
const map = new ol.Map({
  target:'map',
  layers:layerArray,
  view:view
})


// Static Image covering the given extent
// Image source
const ImageSource = new ol.source.ImageStatic({
  attribution: '<b>Image</b>',
  url:'image.jpg',
  imageExtent:[659876.3429096476, 2432076.7022618772, 1124704.0369866625, 2798563.714674767]
})

// Image Layer
const ImageLayer = new ol.layer.Image({
  source: ImageSource
})


// Adding Layer to Map (After const map is defined)
map.addLayer(ImageLayer)

// Image source for tiger
const tigerSource = new ol.source.ImageStatic({
  attribution: '<b>Tiger</b>',
  url:'tiger.png',
  imageExtent:[1231584.7236531826, 2612019.4933642442, 1289688.1854128095, 2657830.3699158556]
})

// Tiger layer
const tigerLayer = new ol.layer.Image({
  source: tigerSource
})

// Add tiger layer map.
map.addLayer(tigerLayer)