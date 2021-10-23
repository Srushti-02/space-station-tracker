

/* ----leaflet map---- */
var map = L.map('map').setView([-51.762231053468, 120.57311320339], 0); /**latitude, longitude */

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
/**----tileLayer makes different layers on map such as on google map we have options like satellite view ------- */
/*L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();
*/

/**------positions marker on map according to longitude and latitude---- */


var myIcon = L.icon({
    iconUrl: 'my-icon.png',
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowUrl: 'my-icon-shadow.png',
    shadowSize: [68, 95],
    shadowAnchor: [22, 94]
});


/** ---Fetching location of user----- */
const fetchSpaceStationDetails = async() => {
    const res = await fetch('https://api.wheretheiss.at/v1/satellites/25544')
    const data = await res.json()
    const{latitude, longitude} = data
    console.log(latitude, longitude)
    let marker = L.marker([latitude, longitude]).addTo(map)
    marker.setLatLng([latitude, longitude])
}

fetchSpaceStationDetails()

setInterval(fetchSpaceStationDetails, 1000) // shows the full path that space station is moving

