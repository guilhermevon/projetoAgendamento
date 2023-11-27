import React, { useState, useEffect } from 'react';
import '../styles/cadastro.css';

function Cadastro() {
  const [professorName, setProfessorName] = useState('');
  const [disciplineName, setDisciplineName] = useState('');
  const [classroomName, setClassroomName] = useState('');
  const [professorsList, setProfessorsList] = useState([]);
  const [disciplinesList, setDisciplinesList] = useState([]);
  const [classroomsList, setClassroomsList] = useState([]);

  const cadastrarProfessor = async (e) => {
    e.preventDefault();
    if (!professorName) {
      alert('Por favor, preencha o nome do professor.');
      return;
    }
    const response = await fetch('http://localhost:5000/register/professor', {
      method: 'POST',
      body: JSON.stringify({ name: professorName }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const result = await response.json();
    if (result) {
      alert('Professor cadastrado com sucesso');
      setProfessorName('');
    }
  };

  const cadastrarDisciplina = async (e) => {
    e.preventDefault();
    if (!disciplineName) {
      alert('Por favor, preencha o nome da disciplina.');
      return;
    }
    const response = await fetch('http://localhost:5000/register/discipline', {
      method: 'POST',
      body: JSON.stringify({ name: disciplineName }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const result = await response.json();
    if (result) {
      alert('Disciplina cadastrada com sucesso');
      setDisciplineName('');
    }
  };

  const cadastrarTurma = async (e) => {
    e.preventDefault();
    if (!classroomName) {
      alert('Por favor, preencha o nome da turma.');
      return;
    }
    const response = await fetch('http://localhost:5000/register/classroom', {
      method: 'POST',
      body: JSON.stringify({ name: classroomName }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const result = await response.json();
    if (result) {
      alert('Turma cadastrada com sucesso');
      setClassroomName('');
    }
  };

  useEffect(() => {
    fetch('http://localhost:5000/professors')
      .then((response) => response.json())
      .then((data) => setProfessorsList(data));
    fetch('http://localhost:5000/disciplines')
      .then((response) => response.json())
      .then((data) => setDisciplinesList(data));
    fetch('http://localhost:5000/classrooms')
      .then((response) => response.json())
      .then((data) => setClassroomsList(data));
  }, []);

  return (
    <div className="cadastro-container">
      <div className="cadastro-section-left">
        <div className="cadastro-section">
          <h2>Cadastro de Professor</h2>
          <form onSubmit={cadastrarProfessor}>
            <label>Nome do Professor:</label>
            <input type="text" value={professorName} onChange={(e) => setProfessorName(e.target.value)} />
            <button type="submit">Cadastrar</button>
          </form>
        </div>

        <div className="cadastro-section">
          <h2>Cadastro de Disciplina</h2>
          <form onSubmit={cadastrarDisciplina}>
            <label>Nome da Disciplina:</label>
            <input type="text" value={disciplineName} onChange={(e) => setDisciplineName(e.target.value)} />
            <button type="submit">Cadastrar</button>
          </form>
        </div>

        <div className="cadastro-section">
          <h2>Cadastro de Turma</h2>
          <form onSubmit={cadastrarTurma}>
            <label>Nome da Turma:</label>
            <input type="text" value={classroomName} onChange={(e) => setClassroomName(e.target.value)} />
            <button type="submit">Cadastrar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
