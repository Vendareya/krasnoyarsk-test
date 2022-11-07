import './style.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import TileWMS from 'ol/source/TileWMS';
import OSM from 'ol/source/OSM';

const map = new Map({
  target: 'map',
  layers: [
  new TileLayer({
  source: new OSM()
  }),
  new TileLayer({
  source: new TileWMS({
  url: 'http://localhost:8080/geoserver/study/wms',
  params: {'LAYERS': 'study:boudary_city', 'TILED': true},
  serverType: 'geoserver',
  // Countries have transparency, so do not fade tiles:
  transition: 0,
  }),
  }),
  ],
  view: new View({
    center: [10338676,7560823],
    zoom: 11
  })
});
