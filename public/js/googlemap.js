// buttons

var satxButton = document.getElementById('satx');
var nycButton = document.getElementById('nyc');

satxButton.addEventListener('click', satxListener, false);
nycButton.addEventListener('click', nycListener, false);

// for (var i = 0; i < numberButtonVar.length; i++	) {
// 	markerVar[i].addEventListener('click', clickMarker, false);


nycListener() {
	map.setCenter({
        lat:  40.799141,
        lng: -74.0341126
    },
    map.setZoom(11);
};
satxListener() {
	map.setCenter({
        lat:  29.426791,
        lng: -98.489602
    },
    map.setZoom(11);
};
function clickMarker() {
    console.log(zoomAmount);
    map.setZoom(15);
	for (var i = 0; i < numberButtonVar.length; i++	) {
		
        }


var marker = getElementById
markers.forEach(function(place,i){
			var marker = new google.maps.Marker({
	        	position: new google.maps.LatLng(place[1], place[2]),
	        	animation: google.maps.Animation.DROP,
	        	icon: 'img/chess-map-marker.png',
	        	map: map
        	});
			var infowindow = new google.maps.InfoWindow({
    		content:"<h1>" + place[0] + "</h1><br>" + place[3]
​
			});
			marker.addListener('click', toggleBounce);
			marker.addListener('click', function() {
    		infowindow.open(map, marker);
  		});
	});