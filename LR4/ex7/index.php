<?php
function generatePassword($length) {
    $lowercase = implode('', range('a', 'z'));
    $uppercase = implode('', range('A', 'Z'));
    $digits = implode('', range('0', '9'));
    
    $allCharacters = $lowercase . $uppercase . $digits;
    
    if ($length > strlen($allCharacters)) {
        $length = strlen($allCharacters);
    }
    
    $shuffled = str_shuffle($allCharacters);
    
    return substr($shuffled, 0, $length);
}

echo generatePassword(10) . "<br>"; 
echo generatePassword(12) . "<br>";
echo generatePassword(6) . "<br>";
?>