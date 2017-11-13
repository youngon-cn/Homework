<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<title>奇葩说</title>
		<link rel="stylesheet" href="css/basic.css" />	
	</head>
	<body>
		<header>
			<img src="img/logo.jpg" alt="Jay Skript and the DOMSTERS" />
			<nav>
				<ul>
					<li><a href="index.html">Home</a></li>
					<li><a href="about.html">About</a></li>
					<li><a href="photo.html">Photos</a></li>
					<li><a href="live.html">Live</a></li>
					<li><a href="contact.html">Contact</a></li>
				</ul>
			</nav>
		</header>
		<article>
            <?php
		         $name = $_POST["name"];
		         $email = $_POST["email"];
		         $fp = fopen("./data.txt", "a");
		         $str = "user:".$name."&email:".$email."\n";
		         fwrite($fp,$str);
		         fclose($fp);
		         echo "Welcome,{$name}！Thanks for contacting us.We will get back to you as soon as we can.";
            ?>		
			
		</article>
		<script src="js/submit.js"></script>
	</body>
</html>


