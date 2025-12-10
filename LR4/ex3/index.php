<?php
function printNumbers($start, $end) {
    for ($i = $start; $i <= $end; $i++){
        echo $i . "<br>";
    }
}

printNumbers(1, 10);
?>