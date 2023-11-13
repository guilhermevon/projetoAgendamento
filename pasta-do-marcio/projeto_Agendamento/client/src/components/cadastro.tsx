import React, { useState, ChangeEvent, FormEvent } from 'react';
import '../styles/cadastro.css';

interface CadastroProps {}

const Cadastro: React.FC<CadastroProps> = () => {
  const [nomeProfessor, setNomeProfessor] = useState<string>('');
  const [nomeDisciplina, setNomeDisciplina] = useState<string>('');
  const [nomeTurma, setNomeTurma] = useState<string>('');
  const [selectedProfessor, setSelectedProfessor] = useState<string>('');
  const [selectedDisciplina, setSelectedDisciplina] = useState<string>('');
  const [selectedTurma, setSelectedTurma] = useState<string>('');
  const [selectedTurno, setSelectedTurno] = useState<string>('');
  const [cargaHoraria, setCargaHoraria] = useState<string>('');
  const [dataInicio, setDataInicio] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Lógica para lidar com o envio do formulário
  };

  return (
    <div className="cadastro-container">
      <div className="cadastro-section-left">
        <div className="cadastro-section">
          <h2>Cadastro de Professor</h2>
          <form>
            {/* Campos de cadastro para Professor */}
            <label>Nome do Professor:</label>
            <input type="text" value={nomeProfessor} onChange={(e: ChangeEvent<HTMLInputElement>) => setNomeProfessor(e.target.value)} />
            {/* Adicione mais campos específicos do Professor, se necessário */}
          </form>
          <button type="submit">Cadastrar</button>
        </div>

        <div className="cadastro-section">
          <h2>Cadastro de Disciplina</h2>
          <form>
            {/* Campos de cadastro para Disciplina */}
            <label>Nome da Disciplina:</label>
            <input type="text" value={nomeDisciplina} onChange={(e: ChangeEvent<HTMLInputElement>) => setNomeDisciplina(e.target.value)} />
            {/* Adicione mais campos específicos da Disciplina, se necessário */}
          </form>
          <button type="submit">Cadastrar</button>
        </div>

        <div className="cadastro-section">
          <h2>Cadastro de Turma</h2>
          <form>
            {/* Campos de cadastro para Turma */}
            <label>Nome da Turma:</label>
            <input type="text" value={nomeTurma} onChange={(e: ChangeEvent<HTMLInputElement>) => setNomeTurma(e.target.value)} />
            {/* Adicione mais campos específicos da Turma, se necessário */}
          </form>
          <button type="submit">Cadastrar</button>
        </div>
      </div>

      <div className="cadastro-section-right">
        <h2>Cadastro de Horários</h2>
        <form onSubmit={handleSubmit}>
          {/* Campos de cadastro para Horários */}
          <label>Professor:</label>
          <select value={selectedProfessor} onChange={(e: ChangeEvent<HTMLSelectElement>) => setSelectedProfessor(e.target.value)}>
            {/* Opções de professores */}
          </select>

          <label>Disciplina:</label>
          <select value={selectedDisciplina} onChange={(e: ChangeEvent<HTMLSelectElement>) => setSelectedDisciplina(e.target.value)}>
            {/* Opções de disciplinas */}
          </select>

          <label>Turma:</label>
          <select value={selectedTurma} onChange={(e: ChangeEvent<HTMLSelectElement>) => setSelectedTurma(e.target.value)}>
            {/* Opções de turno */}
          </select>

          <label>Turno:</label>
          <select value={selectedTurno} onChange={(e: ChangeEvent<HTMLSelectElement>) => setSelectedTurno(e.target.value)}>
            {/* Opções de turno */}
          </select>

          <label>Carga Horária:</label>
          <input type="text" value={cargaHoraria} onChange={(e: ChangeEvent<HTMLInputElement>) => setCargaHoraria(e.target.value)} />

          <label>Data de Início:</label>
          <input type="text" value={dataInicio} onChange={(e: ChangeEvent<HTMLInputElement>) => setDataInicio(e.target.value)} />

          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;
