<?php
header('Content-type:image/jpeg');
 $width=200;
$height=40;
$image=imagecreatetruecolor($width, $height);
//分配颜色
$bac=imagecolorallocate($image,rand(200,255), rand(200,255), rand(200,255));
$rec=imagecolorallocate($image,0, 0, 0);
$dot=imagecolorallocate($image,rand(50,150),rand(50,150),rand(50,150));
$line=imagecolorallocate($image,rand(150,200),rand(150,200),rand(150,200));

imagefill($image,0,0,$bac);

imagerectangle($image,0, 0,$width-1,$height-1,$rec);

for($i=0;$i<50;$i++)
{
imagesetpixel($image,rand(0,$width-1),rand(0,$height-1), $dot);
}

imageline($image,rand(0,$width/2),rand(0,$height),rand($width/2,$width),rand(0,$height), $line);

$elem=array('k','f','u','a','v','o','r');
$string='';
for($i=0;$i<4;$i++)
{
$string.=$elem[rand(0,count($elem)-1)];
}
imagettftext($image,14, rand(-4,4), rand(1,7),rand(20,30),$rec,'font/CooperBlackStd.otf',$string);

imagejpeg($image);
imagedestroy($image);
 ?>