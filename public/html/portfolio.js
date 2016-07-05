// Set our map options
    var mapOptions = {
        // Set the zoom level
        zoom: 11,

        // This sets the center of the map at our location
        center: {
            lat:  29.426791,
            lng: -98.489602
        },
        disableDefaultUI: true,
		zoomControl: false,
		scaleControl: false,
		scrollwheel: false,
		disableDoubleClickZoom: true,
		draggable: false
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

	//markers
    var codeup = {
        lat:  29.426791,
        lng: -98.489602
    };
    var utsa = {
    	lat: 29.5845619,
    	lng: -98.6190524
    };
    var crossroads = {
    	lat: 29.4929116,
    	lng: -98.5511068
    };
    var codeupImage = {
			url: '/photos/codeup-arrow.png',
			scaledSize: new google.maps.Size(50, 50)
		};
		var codeupMarker = new google.maps.Marker({
	    position: codeup,
	    map: map,
	    icon: codeupImage
	});
	//fisherman marker
	var fisherman = {
		url: '/photos/fisherman-sprite.png',
		scaledSize: new google.maps.Size(50, 50),
	};
	var fishermanMarker = new google.maps.Marker({
	    position: crossroads,
	    map: map,
	    icon: fisherman,
	    draggable: true
	});	
	var fishermanPosition = {}
	var id = 0;
	fishermanMarker.addListener('dragend', function(event) {
	fishermanPosition = event.latLng;
	$.get("http://api.openweathermap.org/data/2.5/forecast/daily", {
    	APPID: "8c952f963d5c9f5a24eff528c9535c87",
		lat:  fishermanPosition.lat(),
		lon: fishermanPosition.lng(),
    	units: "imperial",
    	cnt: 1
		})
		.done(function (data) {
			if (fishermanPosition.lat() > 29.2425081 && fishermanPosition.lat() < 29.2699337 && fishermanPosition.lng() < -98.358946 && fishermanPosition.lng() > -98.3935373) {
				clearInterval(id);
				id = setInterval(function() {
				$('#fishing').html("Perfect fishing weather!").fadeToggle(1000)
				}, 1000);
				$('#sprite').removeClass('invisible');
			} else {
				clearInterval(id);
				id = setInterval(function() {
					$('#fishing').html("The fish aren't biting.").fadeToggle(1000)
				}, 1000);
			}
		data.list.forEach(function(list) {
    		$('#weatherTable').html('<img src="http://openweathermap.org/img/w/' + list.weather[0].icon + '.png"><br>' + list.temp.max + "° | " + list.temp.min + "°<br>" +  list.weather[0].main + ": " + list.weather[0].description);
    		});
    	});
		$('.weather').removeClass('invisible');
	});
	//listeners
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

//konami code
    var konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];
    var entered = 0
    var victory = ['photos/contra/contra_turn.png', 'photos/contra/contra_turnRun1.png', 'photos/contra/contra_turnRun2.png','photos/contra/contra_turnRun1.png', 'photos/contra/contra_turnRun2.png','photos/contra/contra_upRight.png', 'photos/contra/contra_upLeft.png','photos/contra/contra_upRight.png', 'photos/contra/contra_upLeft.png','photos/contra/contra_run1.png', 'photos/contra/contra_fall2.png','photos/contra/contra_fall1.png','photos/contra/contra_flip2.png',"photos/contra/contra_walk.png"]
    var run = ['photos/contra/contra_run1.png',"photos/contra/contra_walk.png"]

    $(document).keydown(function(event){
        if (event.keyCode === 37 || event.keyCode === 38 || event.keyCode === 39 || event.keyCode === 40 && ($('#sprite').hasClass('invisible')) != true) {
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

            if (entered === konamiCode.length && ($('#sprite').hasClass('invisible')) != true) {
            	$('.weather').html('');
                var i = 0;
                var id = setInterval(function() {
                    if (i < victory.length) {
                      sprite.setAttribute('src', victory[i]);
                    } else {
                        clearInterval(id);
                    }
                    i++;
                }, 400);
                simpleSimon();
                $('sprite').addClass('invisible-permenant');
                entered = 0;
            }
        });

//Simon Game
	var sequence = [];
	var userInput = [];
	var userProgress = 0;
	var simon = $(".simon");
	var laser = $(".laser");
	var counter = 0;
	var inputCounter = 0;
	var blockInput = true;
	var roundDisplay = $('.roundDisplay').text;
	for (i=0;i<simon.length;i++) {
		simon.eq(i).attr('data-value', i);
		simon.eq(i).click(simonClick);
	}
	for (i=0;i<simon.length;i++) {
		laser.eq(i).attr('data-invisValue', i);
	}
	// pop sequence array
	function randomNumber () {
		return Math.floor(Math.random() * ($(".simon").length));
	};
	//simon round
	function simonRound () {
		sequence.push(randomNumber());
		inputCounter = 0;
		flareSequence();
	}
	//show flares according to sequence array, sets flaring variable to restrict clicks
	function flareSequence() {
		blockInput = true;
		var y = 0;
		id = setInterval(function () {
			if (y < sequence.length) {
				$('.flare').eq(sequence[y]).fadeToggle(300);
				$('.flare').eq(sequence[y]).fadeToggle(500);
				y++
				console.log("flashing " + y + " : " + sequence[y-1]);
			} else {
				clearInterval(id);
				blockInput = false;
			};
		}, 1000);
	}
	//logs user input and sends out laser image when clicked.
	//restarts if array length is reached. clears and restarts if failed.
	function simonClick(event) {
		if (blockInput) {
			return;
		}
		var value = $(this).attr('data-value')
		value = Number(value);
		console.log(value);
		$('.laser').eq(value).fadeToggle(10);
		$('.laser').eq(value).animate({
			marginLeft: "100%"
		}, 700);
		$('.laser').eq(value).fadeToggle(1);
		$('.laser').eq(value).css('marginLeft', 0);
		userInput.push(value);
		if (value == sequence[inputCounter]) {
	        inputCounter++;
	        console.log("winning!");
	        console.log("inputCounter: " + inputCounter + ", sequence length: " + sequence.length + ", last one in the array: " + sequence[sequence.length - 1]);
	    }
	    if (value != sequence[inputCounter-1]) {
	    	console.log("failure. starting new round");
	    	sequence = [];
	    	simonRound()
	    }
	    if (inputCounter === sequence.length) {
	        	console.log("winning! starting a new round!")
	        	simonRound();
	    } 
	};
	function simonStart() {
		sequence = [];
		simonRound()
	}
	$('#title').click(simonStart);

    })();