<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="gunmetal.css">
	<link rel="stylesheet" type="text/css" href="custom.css">
	<title>SA Local Music Week</title>
</head>
<body>
	<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">
        <img alt="Brand" src="photos/LMW2016_weblogo.png">
      </a>
    </div>
  </div>

  <script>
  	function checkScroll(){
    var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

    if($(window).scrollTop() > startY){
        $('.navbar').addClass("scrolled");
    }else{
        $('.navbar').removeClass("scrolled");
    }
}

if($('.navbar').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}
</script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>