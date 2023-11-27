<?php
// Recupera os dados do formulário
$nomeTurma = $_POST['nomeTurma'];

// Conecta ao banco de dados
$conexao = new mysqli("localhost", "id21509049_calendariobunitu", "Senha123@", "id21509049_calendario");

// Verifica a conexão
if ($conexao->connect_error) {
    die("Falha na conexão com o banco de dados: " . $conexao->connect_error);
}

// Insere a turma no banco de dados
$sql = "INSERT INTO turmas (nome) VALUES ('$nomeTurma')";
if ($conexao->query($sql) === TRUE) {
    echo "Turma cadastrada com sucesso!";
} else {
    echo "Erro ao cadastrar turma: " . $conexao->error;
}

// Fecha a conexão
$conexao->close();
?>
