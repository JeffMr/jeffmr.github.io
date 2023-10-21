<?php
// receber os dados do formulário
$nome = $_POST['nome'];
$url = $_POST['url'];

// abrir o arquivo CSV para escrita
$file = fopen('dados.csv', 'a');

// escrever os dados no arquivo CSV
//$data = array($nome, $url);
//fputcsv($file, $data);
fwrite($file, $nome . ',' . $url . "\n");

// fechar o arquivo
fclose($file);

// redirecionar de volta para o formulário
header('Location: index.php');
exit();

?>
