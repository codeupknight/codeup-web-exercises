<?php
  var_dump($_GET);
  var_dump($_POST);
?>

<!DOCTYPE html>
<html>
<head>
	<title> form 1 </title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
<div>
    <h2>Log In</h2>
</div>
<div>
<form method="POST" action="/my_first_form.php">
    <p>
        <label  for="username">Userrname</label>
        <input value="username" placeholder="BoatyMcBoatFace" id="username" name="username" type="text">
    </p>
    <p>
        <label for="password">Password</label>
        <input placeholder="password" value="password" id="password" name="password" type="password">
    </p>
    <p>
        <button class="button" type="submit">Log In</button>
    </p>
</div>
</form>
<div>
    <h2>Compose Email</h2>
</div>
<div>
<form method="POST" action="/my_first_form.php">

    <div>
        <label for="to" action="/my_first_form.php">To:</label><br>
        <input id="to" name="to" placeholder="To...">
</div>
        <label for="from" action="/my_first_form.php">From:</label><br>
        <input id="from" name="from" placeholder="From...">
    </div>
    <div>
        <label for="subject" action="/my_first_form.php">Subect:</label><br>
        <textarea id="subject" name="subject" placeholder="Subject..."></textarea>
    </div>
    <div>
        <label for="body" action="/my_first_form.php">Body:</label><br>
        <textarea id="body" name="body" placeholder="Body..."rows=25 cols=50></textarea>
    </div>
    <div>
        <button class="button" type="submit">Send</button>
  </form>
<div>
    <h2>Send a copy to me</h2>
<form method="post">
    <div>
        <input type="checkbox" name="sendtome" checked="checked" value="sendtome">Send a copy to my inbox</input>
    </div>
<div>
    <h2>I am a...</h2>
<form method="post" action="/my_first_form.php">
    <div>
        <input type="radio" name="1 []" value="badass" checked="checked">Badass</input>
        <input type="radio" name="1 []" value="idiot">Idiot</input>
    </div>
    <div>
        <button class="button" type="submit">Send</button>
        <div>
</form>
<div>
    <h2>What kind of car do you drive?</h2>
</div>
<div>
    <select>
  <option name="car []"value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</div>
</select>
    <div>
        <button class="button" type="submit">Send</button>
        <div>



</body>
</html>


