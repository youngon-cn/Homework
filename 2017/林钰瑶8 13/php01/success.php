<!DOCTYPE html>
<html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>提交</title>
  </head>
  <body>
      <?php
        $name = $_POST["username"];
         $pwd = $_POST["pwd"];
         $fp = fopen("./data.txt", "a");
         $str = "user:".$name."&password:".$pwd."\n";
         fwrite($fp,$str);
         fclose($fp);
         echo "<h1>欢迎你,".$name."！<h1>";
     ?>
  </body>
</html>