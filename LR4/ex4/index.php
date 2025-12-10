<?php
$users = [
    [
        'name' => 'Натали',
        'age' => '23',
        'city' => 'Козьмодемьянск'
    ],
    [
        'name' => 'Марта',
        'age' => '20',
        'city' => 'Калининград'
    ],
    [
        'name' => 'Марина',
        'age' => '21',
        'city' => 'Чебоксары'
    ],
    [
        'name' => 'Иван',
        'age' => 35,
        'city' => 'Санкт-Петербург'
    ]
];

echo "<ul>";
foreach($users as $user){
    echo "<li> Имя: " . $user['name'] . ", Возраст: " . $user['age'] . ", Город: " . $user['city'] . "</li>";
}
echo "</ul>";
?>