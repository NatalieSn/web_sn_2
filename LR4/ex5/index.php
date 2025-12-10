<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ex5</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h2>Простой калькулятор</h2>
    <form action="" method="post">
        <input type="number" name="num1" placeholder="Первое число" required>
        <select name="operation" required>
            <option value="add">+</option>
            <option value="subtract">-</option>
            <option value="multiply">*</option>
            <option value="divide">/</option>
        </select>
        <input type="number" name="num2" placeholder="Второе число" required>
        <button type="submit">Вычислить</button>
    </form>

    <?php 
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $num1 = floatval($_POST['num1']);
        $num2 = floatval($_POST['num2']);
        $operation = $_POST['operation'];
        

        switch ($operation){
            case 'add':
                echo '<div class="result">Результат: ' . ($num1 + $num2) . '</div>';
                break;
            case 'subtract':
                echo '<div class="result">Результат: ' . ($num1 - $num2) . '</div>';
                break;
            case 'multiply':
                echo '<div class="result">Результат: ' . ($num1 * $num2) . '</div>';
                break;
            case 'divide':
                if ($num2 == 0){
                    echo '<div class="result" style="color: red;">Делить на ноль нельзя!</div>';
                    break;
                } else {
                echo '<div class="result">Результат: ' . ($num1 / $num2) . '</div>';
                    break;
                }
            default:
                echo '<div class="result" style="color: red;">Неизвестная операция!</div>';
        }
    }
    ?>
</body>
</html>