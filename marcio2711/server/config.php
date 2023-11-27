<?php 
    $dbHost = 'localhost';
    $dbUsername = 'id21509049_calendariobunitu';
    $dbPassword = 'Senha123@';
    $dbName = 'id21509049_calendario';

    $conexao = new mysqli($dbHost,$dbUsername,$dbPassword,$dbName);
    
    if ($conexao->connect_error) {
    die("Falha na conexão com o banco de dados: " . $conexao->connect_error);
    }
?>