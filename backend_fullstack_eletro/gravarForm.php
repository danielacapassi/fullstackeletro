<?php
$servidor = "localhost";
$username = "root";
$password = "";
$database = "recode";

$nome = $_GET['nome'];
$comentario = $_GET['comentario'];

// Criando a conexão
$conn = mysqli_connect($servidor, $username, $password, $database);

//Verificando a conexão
if (!$conn){
  die("A conexão ao BD falhou:" . mysqli_connect_error());
}

setlocale(LC_MONETARY, 'pt_BR');

$sql = "INSERT INTO comentarios (id,nome,msg,data) VALUES (NULL, '$nome', '$comentario',  current_timestamp())";

$result = $conn->query($sql);

header("Access-Control-Allow-Origin:*");

print_r($sql);

mysqli_close($conn);

?>
