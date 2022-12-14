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
  params: {'LAYERS': 'study:test1', 'TILED': true, 'STYLES': 'boundary_administrative'},
  serverType: 'geoserver',
  // Countries have transparency, so do not fade tiles:
  transition: 0,
  }),
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
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})
for (let li of tree.querySelectorAll('li')) {
  let span = document.createElement('span');
  span.classList.add('show');
  li.prepend(span);
  span.append(span.nextSibling)
}
tree.onclick = function (event) {
  console.log(event.target.tagName)
  if (event.target.tagName != 'SPAN') return;

  let childrenContainer = event.target.parentNode.querySelector('ul');
  
  if (!childrenContainer) return;

  childrenContainer.hidden = !childrenContainer.hidden;

  if (childrenContainer.hidden) {
    event.target.classList.add('hide');
    event.target.classList.remove('show');
  }
  else {
    event.target.classList.add('show');
    event.target.classList.remove('hide');
  }
}