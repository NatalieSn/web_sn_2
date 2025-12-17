<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Товары</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h1>Товары (цена &lt; 50, в наличии)</h1>
    <?php
    $products = [
        ['name' => 'Ручка', 'price' => 5, 'stock' => 100],
        ['name' => 'Ноутбук', 'price' => 1200, 'stock' => 10],
        ['name' => 'Блокнот', 'price' => 15, 'stock' => 50],
        ['name' => 'Мышь', 'price' => 45, 'stock' => 0],
        ['name' => 'Клавиатура', 'price' => 70, 'stock' => 20],
        ['name' => 'Карандаш', 'price' => 2, 'stock' => 200],
    ];

    $filtered = array_filter($products, function($item) {
        return $item['price'] < 50 && $item['stock'] > 0;
    });

    if (empty($filtered)) {
        echo '<div class="product">Нет товаров, соответствующих условиям.</div>';
    } else {
        foreach ($filtered as $product) {
            echo '<div class="product">';
            echo "Товар: " . $product['name'] .
                 ", Цена: " . $product['price'] . " ₽" .
                 ", В наличии: " . $product['stock'] . " шт.";
            echo '</div>';
        }
    }
    ?>
  </div>
</body>
</html>