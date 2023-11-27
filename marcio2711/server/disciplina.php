<?php
// Recupera os dados do formulário
$nomeDisciplina = $_POST['nomeDisciplina'];

// Conecta ao banco de dados
$conexao = new mysqli("localhost", "id21509049_calendariobunitu", "Senha123@", "id21509049_calendario");

// Verifica a conexão
if ($conexao->connect_error) {
    die("Falha na conexão com o banco de dados: " . $conexao->connect_error);
}

// Insere a disciplina no banco de dados
$sql = "INSERT INTO disciplinas (nome) VALUES ('$nomeDisciplina')";
if ($conexao->query($sql) === TRUE) {
    echo "Disciplina cadastrada com sucesso!";
} else {
    echo "Erro ao cadastrar disciplina: " . $conexao->error;
}

// Fecha a conexão
$conexao->close();
?>
