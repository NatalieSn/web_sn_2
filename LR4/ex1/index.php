<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Приветствие</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="greeting">
    <?php
    $name = "Натали";
    echo "Привет, " . htmlspecialchars($name) . "!";
    ?>
  </div>
</body>
</html>