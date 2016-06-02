<html>
<head>
	<title> Selling Ice Cream
	</title>
</head>
<body>
	<script>
	var allCones = Math.floor(Math.random() * 50) +50;

	console.log("Can't go home until I sell " + allcones + " ice cream cones!")

	while (allCones > 0) {
		var cones = Math.floor(Math.random() * 5) +1;
		var allCones = (allcones - cones)
		console.log("I sold " + cones + ", and have " + allCones " left to sell!")
	}
	</script>
</body>
</html>