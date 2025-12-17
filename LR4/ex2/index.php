<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Сумма</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="output">
    <?php
    $num1 = 155;
    $num2 = 396;
    $sum = $num1 + $num2;

    echo "$num1 + $num2 = $sum<br>";

    if ($sum % 2 === 0) {
        echo "Результат суммы num1 и num2 является четным числом";
    } else {
        echo "Результат суммы num1 и num2 является нечетным числом";
    }
    ?>
  </div>
</body>
</html>