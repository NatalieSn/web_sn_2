<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Генератор паролей</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="header">[ PASSWORD GENERATOR ]</div>

  <?php
  function generatePassword($length) {
      $lowercase = implode('', range('a', 'z'));
      $uppercase = implode('', range('A', 'Z'));
      $digits = implode('', range('0', '9'));
      
      $allCharacters = $lowercase . $uppercase . $digits;
      
      if ($length > strlen($allCharacters)) {
          $length = strlen($allCharacters);
      }
      
      return substr(str_shuffle($allCharacters), 0, $length);
  }

  $lengths = [10, 12, 6];
  foreach ($lengths as $len) {
      echo '<div class="password">' . generatePassword($len) . '</div>';
  }
  ?>
</body>
</html>