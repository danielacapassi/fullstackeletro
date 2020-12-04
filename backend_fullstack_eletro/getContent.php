<?php
$servidor = "localhost";
$username = "root";
$password = "";
$database = "recode";

$tabela = $_GET['table'];

// Criando a conexão
$conn = mysqli_connect($servidor, $username, $password, $database);

//Verificando a conexão
if (!$conn){
  die("A conexão ao BD falhou:" . mysqli_connect_error());
}

setlocale(LC_MONETARY, 'pt_BR');

$sql = "select * from $tabela";
$result = $conn->query($sql);

header("Access-Control-Allow-Origin:*");

print_r( json_encode( $result->fetch_all(MYSQLI_ASSOC)) );

mysqli_close($conn);

?>
