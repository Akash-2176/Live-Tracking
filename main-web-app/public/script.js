const map = L.map('map').setView([12.0168, 78.9558], 8); // Center on some location

// Add OpenStreetMap tile layer
const esriLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ',
  maxZoom: 18,
  opacity: 1
}).addTo(map);

const roadsLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; Source: Esri, NAVTEQ',
  maxZoom: 18,
  opacity: 1
}).addTo(map);

const labelsLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; Source: Esri, HERE, DeLorme, USGS, Intermap, increment P Corp.',
  maxZoom: 18,
  opacity: 1
}).addTo(map);

const socket = new WebSocket('ws://localhost:3000');
socket.onmessage = function (event) {
  const data = JSON.parse(event.data);
  L.marker([data.lat, data.lng]).addTo(map).bindPopup(`${data.name}`).openPopup();
  
};
