<?php

ini_set('display_errors', 1);
error_reporting(E_ALL);

// Verifica se o método de requisição é POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(400); // Bad Request
    echo "Método de requisição inválido.";
    exit;
}

// Verifica se o campo 'nomeProfessor' está presente
if (!isset($_POST['nomeProfessor'])) {
    http_response_code(400); // Bad Request
    echo "O campo 'nomeProfessor' não foi enviado.";
    exit;
}

// Recupera os dados do formulário
$idProfessor = $_POST['selectedProfessor'];
$idDisciplina = $_POST['selectedDisciplina'];
$idTurma = $_POST['selectedTurma'];
$idTurno = $_POST['selectedTurno'];
$cargaHoraria = $_POST['cargaHoraria'];
$dataInicio = $_POST['dataInicio'];

// Conecta ao banco de dados
$conexao = new mysqli("localhost", "id21509049_calendariobunitu", "Senha123@", "id21509049_calendario");

// Verifica a conexão
if ($conexao->connect_error) {
    die("Falha na conexão com o banco de dados: " . $conexao->connect_error);
}

// Insere o horário no banco de dados
$sql = "INSERT INTO horarios (id_professor, id_disciplina, id_turma, id_turno, carga_horaria, data_inicio) VALUES ('$idProfessor', '$idDisciplina', '$idTurma', '$idTurno', '$cargaHoraria', '$dataInicio')";
if ($conexao->query($sql) === TRUE) {
    echo "Horário cadastrado com sucesso!";
} else {
    echo "Erro ao cadastrar horário: " . $conexao->error;
}

// Fecha a conexão
$conexao->close();
?>
