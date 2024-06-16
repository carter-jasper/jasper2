// Initialize the map and set its view to a given place and zoom level
var map = L.map('map').setView([51.505, -0.09], 13);

// Set up the OSM layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// Custom hover popups for areas
var customPopup1 = "Location 1";
var customPopup2 = "Location 2";

// Function to create and return a marker with hover popup and draggable option
function createHoverMarker(lat, lng, popupContent) {
    var marker = L.marker([lat, lng], { draggable: true }).addTo(map);

    // Bind popup and events for hover functionality
    marker.bindPopup(popupContent);
    marker.on('mouseover', function (e) {
        this.openPopup();
    });
    marker.on('mouseout', function (e) {
        this.closePopup();
    });

    // Event listener to update marker position on drag end
    marker.on('dragend', function(e) {
        var position = e.target.getLatLng();
        alert('Marker moved to: ' + position.lat + ', ' + position.lng);
    });

    return marker;
}

// Create markers with hover popups
createHoverMarker(51.5, -0.09, customPopup1);
createHoverMarker(51.51, -0.1, customPopup2);

