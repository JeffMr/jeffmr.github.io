<?php
$file = "dados.csv";

// Abre o arquivo para leitura
$file_handle = fopen($file, "r");

// Lê todo o conteúdo do arquivo para um array
$lines = file($file);

// Remove a última linha do array
array_pop($lines);

// Reescreve o arquivo sem a última linha
file_put_contents($file, implode("", $lines));

// Remove os espaços em branco e quebras de linha no final do arquivo
$file_content = file_get_contents($file);
$file_content = trim($file_content);
file_put_contents($file, $file_content);

// Fecha o arquivo
fclose($file_handle);
header("Location: index.php");


?>
