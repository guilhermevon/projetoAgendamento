import { useState } from 'react'
import '../styles/cadastro.css'

function Cadastro() {
  const [nomeProfessor, setNomeProfessor] = useState('');
  const [nomeDisciplina, setNomeDisciplina] = useState('');
  const [nomeTurma, setNomeTurma] = useState('');
  const [selectedProfessor, setSelectedProfessor] = useState('');
  const [selectedDisciplina, setSelectedDisciplina] = useState('');
  const [selectedTurma, setSelectedTurma] = useState('');
  const [selectedTurno, setSelectedTurno] = useState('');
  const [cargaHoraria, setCargaHoraria] = useState('');
  const [dataInicio, setDataInicio] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para lidar com o envio do formulário
  };

  return (
    <div>
    <div className="cadastro-container">
      <div className="cadastro-section">
        <h2>Cadastro de Professor</h2>
        <form>
          {/* Campos de cadastro para Professor */}
          <label>Nome do Professor:</label>
          <input type="text" value={nomeProfessor} onChange={(e) => setNomeProfessor(e.target.value)} />
          {/* Adicione mais campos específicos do Professor, se necessário */}
        </form>
      </div>

      <div className="cadastro-section">
        <h2>Cadastro de Disciplina</h2>
        <form>
          {/* Campos de cadastro para Disciplina */}
          <label>Nome da Disciplina:</label>
          <input type="text" value={nomeDisciplina} onChange={(e) => setNomeDisciplina(e.target.value)} />
          {/* Adicione mais campos específicos da Disciplina, se necessário */}
        </form>
      </div>

      <div className="cadastro-section">
        <h2>Cadastro de Turma</h2>
        <form>
          {/* Campos de cadastro para Turma */}
          <label>Nome da Turma:</label>
          <input type="text" value={nomeTurma} onChange={(e) => setNomeTurma(e.target.value)} />
          {/* Adicione mais campos específicos da Turma, se necessário */}
        </form>
      </div>
    </div>

    <div className="cadastro-section">
      <h2>Cadastro de Horários</h2>
      <form onSubmit={handleSubmit}>
        {/* Campos de cadastro para Horários */}
        <label>Professor:</label>
        <select value={selectedProfessor} onChange={(e) => setSelectedProfessor(e.target.value)}>
          {/* Opções de professores */}
        </select>

        <label>Disciplina:</label>
        <select value={selectedDisciplina} onChange={(e) => setSelectedDisciplina(e.target.value)}>
          {/* Opções de disciplinas */}
        </select>

        <label>Turma:</label>
        <select value={selectedTurma} onChange={(e) => setSelectedTurma(e.target.value)}>
          {/* Opções de turmas */}
        </select>

        <label>Turno:</label>
        <select value={selectedTurno} onChange={(e) => setSelectedTurno(e.target.value)}>
          {/* Opções de turno */}
        </select>

        <label>Carga Horária:</label>
        <input type="text" value={cargaHoraria} onChange={(e) => setCargaHoraria(e.target.value)} />

        <label>Data de Início:</label>
        <input type="text" value={dataInicio} onChange={(e) => setDataInicio(e.target.value)} />

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  </div>
  );
}

export default Cadastro;