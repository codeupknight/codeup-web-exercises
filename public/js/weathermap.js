<html>
<head>
	<title>google maps test</title>
    <link rel="stylesheet" type="text/css" href="cosmo-custom.css">
    <link rel="stylesheet" type="text/css" href="cosmo.css">
	<style type="text/css">
	#map {
    height: 100%;
    width: 100%;
    left: 0;
    position: absolute;
    top: 0;  
    z-index: -1;  
	}
    #sprite {
    	height: 100px;
        position: absolute; top: 50%; left:15%;
        display: none;
    }
    .invisible {
    	display: none;
    }
    #hero {
    	height:200px;
    	position: absolute; top: 50%; left:85%;
    }
	</style>
</head>
<body>
<!--header-->
	<nav class="navbar navbar-default navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <!-- <img class="sm-logo" src="photos/hero_white.png"> -->
          <a class="navbar-brand" href="#">K. E. Knight</a>
        </div>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li><a id="satx" class="btn">San Antonio</a></li>
            <li><a id ="nyc" class="btn">NYC</a></li>
          </ul>
        </div>
      </div>
    </nav>
<!--sprite-->
<img id="sprite" src="photos/contra/contra_walk.png">
<img id="hero" src="photos/hero_white.png">
<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
<!-- google map background -->
<div id="map">
	<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBA1QuQ85hJAfDu6SPaSMSkLbtAUtE2w78">
	</script>
	<script type="text/javascript">
	    (function() {
	        "use strict";

	        // Set our map options
	        var mapOptions = {
	            // Set the zoom level
	            zoom: 11,

	            // This sets the center of the map at our location
	            center: {
	                lat:  29.426791,
	                lng: -98.489602
	            },
				  zoomControl: false,
				  mapTypeControl: false,
				  scaleControl: false,
				  streetViewControl: false,
				  rotateControl: false,
				  fullscreenControl: false
	        };
	        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
	        map.setOptions({
	        	styles: [
						  {
						    "elementType": "labels",
						    "stylers": [
						      { "visibility": "off" }
						    ]
						  },{
						    "elementType": "geometry.stroke",
						    "stylers": [
						      { "visibility": "off" }
						    ]
						  },{
						    "featureType": "poi",
						    "stylers": [
						      { "visibility": "on" },
						      { "color": "#FFC40D" }
						    ]
						  },{
						    "featureType": "administrative",
						    "stylers": [
						      { "visibility": "off" }
						    ]
						  },{
						    "featureType": "landscape.natural.terrain",
						    "stylers": [
						      { "visibility": "on" },
						      { "color": "#E89C0C" }
						    ]
						  },{
						    "featureType": "water",
						    "stylers": [
						      { "visibility": "on" },
						      { "color": "#FF8A00" }
						    ]
						  },{
						    "featureType": "road",
						    "stylers": [
						      { "color": "#eceaea" }
						    ]
						  },{
						    "featureType": "poi",
						    "stylers": [
						      { "color": "#1d2020" },
						      { "visibility": "off" }
						    ]
						  },{
						    "featureType": "landscape",
						    "stylers": [
						      { "color": "#2c2d2c" }
						    ]
						  }
						  
						]});
            var codeup = {
                lat:  29.426791,
                lng: -98.489602
	            };
	        var codeupImage = '/photos/codeup-arrow.png';
   			var codeupMarker = new google.maps.Marker({
			    position: codeup,
			    map: map,
			    icon: codeupImage
				})	

			var satxButton = document.getElementById('satx');
			var nycButton = document.getElementById('nyc');

			function nycListener() {
				map.setCenter({
			        lat:  40.7960891,
			        lng: -73.9570694
			    }),
			    map.setZoom(12);
			}				
			
			function satxListener() {
				map.setCenter({
			        lat:  29.426791,
			        lng: -98.489602
			    },
			    map.setZoom(11));
			};
			nycButton.addEventListener('click', nycListener, false);
			satxButton.addEventListener('click', satxListener, false);



			// var marker;
			// var i;

			// //not sure?
			// var locationInfo = new google.maps.InfoWindow();

			// //this is OK
			// var locations = [
			// 		{place: "Whatever", lat: 40.7960891, lng: -73.9570694, content: '<a href="#">LINK</a><br><h1>This is a header</h1><p>This is a paragraph.</p>', icon: 'photos/contra/contra_walk.png', zoom:18}
			// 	];

			// //not sure?
			// function markerListener (marker, i){
			//         return function(){
			//             locationInfo.setContent(locations[i].content);
			//             locationInfo.open(map, marker);
			//             map.setZoom(locations[i].zoom);
			//             map.setCenter(marker.getPosition());
			//         }
		 //    	}

			// //this is OK
			// for (i = 0; i < locations.length; i++){
			//     marker = new google.maps.Marker({
			//         position: new google.maps.LatLng(locations[i].lat, locations[i].lng),
			//         map: map,
			//         icon: locations[i].icon,
			//         animation: google.maps.Animation.DROP
			// 	    });

			// //not sure? looks fine.
			// 	marker.addListener('click', markerListener, false);
			// }



// sprite animation
    var konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];
    var entered = 0
    var victory = ['photos/contra/contra_turn.png', 'photos/contra/contra_turnRun1.png', 'photos/contra/contra_turnRun2.png','photos/contra/contra_turnRun1.png', 'photos/contra/contra_turnRun2.png','photos/contra/contra_upRight.png', 'photos/contra/contra_upLeft.png','photos/contra/contra_upRight.png', 'photos/contra/contra_upLeft.png','photos/contra/contra_run1.png', 'photos/contra/contra_fall2.png','photos/contra/contra_fall1.png','photos/contra/contra_flip2.png',"photos/contra/contra_walk.png"]
    var run = ['photos/contra/contra_run1.png',"photos/contra/contra_walk.png"]

    $(document).keydown(function(event){
        if (event.keyCode === 37 || event.keyCode === 38 || event.keyCode === 39|| event.keyCode === 40) {
           	$('#sprite').slideDown(3000);
            var i = 0;
            var id = setInterval(function() {
                if (i < run.length) {
                  sprite.setAttribute('src', run[i]);
                } else {
                    clearInterval(id);
                }
                i++;
            }, 50);
        }
        if (event.keyCode === 39) {
            $('#sprite').css({'position': 'absolute', 'left':'+=50px'});
        } 
        if (event.keyCode === 37) {
            $('#sprite').css({'position': 'absolute', 'left':'-=50px'});
        }
        if (event.keyCode === 40) {
            $('#sprite').css({'position': 'absolute', 'top':'+=50px'});
        } 
        if (event.keyCode === 38) {
            $('#sprite').css({'position': 'absolute', 'top':'-=50px'});
        }
        if (event.keyCode === konamiCode[entered]) {
            console.log("boom" + entered);
            entered++
        } else {
            entered = 0;
        }

            if (entered === konamiCode.length) {
                var i = 0;
                var id = setInterval(function() {
                    if (i < victory.length) {
                      sprite.setAttribute('src', victory[i]);
                    } else {
                        clearInterval(id);
                    }
                    i++;
                }, 400);
                $('sprite').addClass('invisible');
                entered = 0;
            }
        });


//end map basic
//start new map stuff




//end new map stuff
//start weather

	var tables = $('.table');

	$.get("http://api.openweathermap.org/data/2.5/forecast/daily?lat=35&lon=139&cnt=3", {
    APPID: "8c952f963d5c9f5a24eff528c9535c87",
	lat:  29.426791,
	lng: -98.489602,
    units: "imperial"
	}).done(function (data) {
    	var listArray = data.list
    	listArray.forEach(function(list) {
			var tempMin = list.temp.min;
		  	var tempMax = list.temp.max;
		  	var humidity = list.humidity;
		  	var wind = list.speed;
		  	var pressure = list.pressure;
		  	var clouds = list.clouds;
		  	document.write("Min temp: " + tempMin + "Max Temp: " + tempMax + "Humidity: " + humidity + ", " + wind + ", " + pressure + ", " + clouds + "<br>")
   		});
	});

//end weather

    	})();
	</script>
</div>

</body>
</html>