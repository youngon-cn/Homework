<?php
?>
<!doctype>
<html>
<head>
<title>省市联动</title>
<meta charset="utf-8">
</head>
<body>
<select id="province" onchange="sendProvince();">
<option>省份</option>
<option id="guangdong">广东</option>
<option id="zhejiang">浙江</option>
<option id="guizhou">贵州</option>
</select>
<select id="city" onchange="sendCity();">
<option value="">城市</option>
</select>
<select id="country">
<option>区县</option>
</select>
<script type="text/javascript" src="q.js"></script>
</body>
</html>







