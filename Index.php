<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="搜索webCrawler">
    <meta name="keywords" content="HTML, CSS, php,搜索webCrawler,搜索">
    <meta name="author" content="Tevin '佟维‘ Taylor">

    <link rel="stylesheet" href="assets/css/style.css">
    <title>搜索</title>

</head>
<body>

<div class="wrapper indexPage">
  <div class="mainSection">
      <div class="logoContainer">
          <img src="assets/images/logo.png">
      </div>

      <div class="searchContainer">
        <form action="search.php" method="GET">
          <input class="searchBox" type="text" name="term" placeholder="Search text">
          <input class="searchButton" type="submit" value="Search" />
        <form> 
      </div>
  </div>
</div>

</body>
</html>