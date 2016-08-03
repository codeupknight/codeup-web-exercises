<?php
$adjectives = ['abashed', 'aberrant', 'abhorrent', 'abiding', 'abject', 'abrasive', 'acrid', 'barbarous', 'invisible', 'patriotic', 'decapitated', 'brash', 'capricious', 'dapper', 'didactic', 'caffinated', 'divergent', 'erratic', 'exultant', 'fallacious', 'frustrated', 'heady', 'misinformed', 'incandescent', 'irate', 'macabre', 'nebulous', 'nondescript', 'ossified', 'parsimonious', 'penitent', 'placid', 'quixotic', 'recondite', 'sordid', 'squalid', 'succinct', 'tacit', 'torpid', 'ubiquitous', 'ubiquitous', 'verdant', 'vivacious', 'voracious', 'waggish', 'wistful', 'quirky', 'dank'];
$nouns = ['headgear', 'bracers', 'leggings', 'boots', 'shoes', 'belt', 'nunchucks', 'bag', 'shirt', 'canine', 'patriot', 'eye', 'head', 'glasses', 'goggles', 'road', 'runway', 'astronaut', 'lamp', 'table', 'chair', 'seat', 'cup', 'glass', 'window', 'building', 'tower', 'stronghold', 'edifice', 'vehicle', 'elephant', 'mouse', 'fruit', 'banana', 'barb', 'imbecile', 'genius', 'barbarian', 'projector', 'beauty', 'hulk', 'pikachu', 'growlithe', 'scythe', 'articuno', 'maw', 'rug', 'roof', 'house', 'recliner', 'thing', 'purpledrank', 'pickle', 'cucumber', 'cracker', 'truck', 'trumpet', 'guitar', 'tuba', 'girl', 'boy', 'dude', 'chick', 'beard'];

$printAdjective = $adjectives[array_rand($adjectives, 1)];
$printNoun = $nouns[array_rand($nouns, 1)];
?>

<html>
<head>
	  <!-- Third Party Resources -->
  <script src="https://www.atlasestateagents.co.uk/javascript/tether.min.js"></script>
  <link rel="stylesheet" href="https://cdn.rawgit.com/twbs/bootstrap/v4-dev/dist/css/bootstrap.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
  <script src="https://cdn.rawgit.com/twbs/bootstrap/v4-dev/dist/js/bootstrap.js"></script>
	<title>Random Name Generator</title>
</head>
<body>
<br><br><br><br><center>You have been summoned by the ancient spirit of<p class="text-capitalize"><?php echo " " . $printAdjective . " " . $printNoun . ".";
?></p>
How will you respond?
</center>
</body>
</html>