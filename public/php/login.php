<? php

sessionstart();

?>
<html>
<head>
	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
	<!-- Optional theme -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">
	<!-- Latest compiled and minified JavaScript -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
	<title>Login</title>
</head>
<body>
	<div class="container-fluid">
	<div class="input-group">
		<form method="POST" action="authorized.php">
		<span class="input-group-addon" class="form-control" id="basic-addon1">Username</span>
		<input type="text" name="name" class="form-control" placeholder="Username">
	</div>
	<div class="input-group">
		<span class="input-group-addon" class="form-control m-a-1">Password</span>
		<input type="text" name="password" class="form-control" placeholder="Password">
	</div>
			<input type="submit">
		</form>
	</div>
</body>
</html>