<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Пользователи</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <ul>
    <?php
    $users = [
        ['name' => 'Натали', 'age' => '23', 'city' => 'Козьмодемьянск'],
        ['name' => 'Марта', 'age' => '20', 'city' => 'Калининград'],
        ['name' => 'Марина', 'age' => '21', 'city' => 'Чебоксары'],
        ['name' => 'Иван', 'age' => 35, 'city' => 'Санкт-Петербург']
    ];

    foreach ($users as $user) {
        echo "<li>Имя: {$user['name']}, Возраст: {$user['age']}, Город: {$user['city']}</li>";
    }
    ?>
  </ul>
</body>
</html>