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

// Drag box 
const dragBox = new ol.interaction.DragBox({

})

dragBox.on('boxstart', function(evt){
  console.log('Box event started')
})

// Zoom to the extent of box at the end of the drag
dragBox.on('boxend', function(evt) {
  console.log('Box ended successfully')
  map.getView().fit(dragBox.getGeometry().getExtent() , map.getSize());
})

// map.addInteraction(dragBox)

// Drag and Drop Interaction
const dragSource = new ol.source.Vector()

const dragLayer = new ol.layer.Vector({
  source: dragSource
})
map.addLayer(dragLayer)

const dragnDrop = new ol.interaction.DragAndDrop({
  formatConstructors:[ol.format.GeoJSON],
  source:dragSource
})

dragnDrop.on('addfeatures', function(evt){
  console.log('added new feature')
})
// map.addInteraction(dragnDrop)


// Draw Interaction
const drawSource = new ol.source.Vector()

const drawLayer = new ol.layer.Vector({
  source: drawSource
})
map.addLayer(drawLayer)
let draw = new ol.interaction.Draw({
  source: drawSource,
  type:"Polygon",
  minPoints:4,
  freehand:false
})

draw.on('drawend', function(evt){
  drawSource.clear()
})


map.addInteraction(draw)

// 
// Create a draw interaction where user can select the type of 


function getInteraction() {
  result = document.querySelector("#interaction").value;
  console.log(result)
  if (result == 'poly') {
    draw = new ol.interaction.Draw({
      source: drawSource,
      type:"Polygon",
    })
    map.addInteraction(draw)
    
    } else if (result == 'line') {
        draw = new ol.interaction.Draw({
          source: drawSource,
          type:"LineString",
        })
        map.addInteraction(draw)

    } else if (result == 'free') {
      draw = new ol.interaction.Draw({
        source: drawSource,
        freehand:true
      })
      map.addInteraction(draw)
    }
  }