<?php
$servidor = "localhost";
$username = "root";
$password = "";
$database = "recode";

$id = $_GET['id'];

// Criando a conexão
$conn = mysqli_connect($servidor, $username, $password, $database);

//Verificando a conexão
if (!$conn){
  die("A conexão ao BD falhou:" . mysqli_connect_error());
}

setlocale(LC_MONETARY, 'pt_BR');

$sql = "SELECT * FROM pedidos INNER JOIN cliente ON pedidos.id_cliente=cliente.id_cliente INNER JOIN produtos ON pedidos.idproduto=produtos.idproduto where cliente.id_cliente = $id";
$result = $conn->query($sql);

header("Access-Control-Allow-Origin:*");

print_r( json_encode( $result->fetch_all(MYSQLI_ASSOC)) );

mysqli_close($conn);

?>
