<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Числа</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="numbers">
    <?php
    function printNumbers($start, $end) {
        for ($i = $start; $i <= $end; $i++) {
            echo $i . "<br>";
        }
    }
    printNumbers(1, 10);
    ?>
  </div>
</body>
</html>