<?php 
    if(isset($_POST['submit'])) {

        include_once('../config.php');

        $nome = $_POST['nameprofessor'];

        if (!empty($_POST['nameprofessor']) ) 
        {
            $consulta_professor = mysqli_query($conexao, "SELECT * from professor WHERE nome = '$nome'");
            
            if(mysqli_num_rows($consulta_professor) == NULL) {
                $insercaoSql = "INSERT INTO professor (nome) VALUES ('$nome')";
                $result = $conexao->query($insercaoSql);
                echo "<script>alert('Sucesso Professor cadastrado')</script>";

            } else {
                echo "<script>alert('Erro Professor já cadastrado')</script>";
            }
        } else {
            echo "<script>alert('Campos vazios')</script>";
        }
    }
?>