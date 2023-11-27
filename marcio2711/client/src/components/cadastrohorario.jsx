import React, { useState } from 'react';
import '../styles/cadastro.css';

function HorarioCadastro({ professors, disciplines, classrooms }) {
  const [selectedProfessor, setSelectedProfessor] = useState('');
  const [selectedDiscipline, setSelectedDiscipline] = useState('');
  const [selectedClassroom, setSelectedClassroom] = useState('');
  const [numberOfDays, setNumberOfDays] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [startDateFormatted, setStartDateFormatted] = useState('');
  const [endDateFormatted, setEndDateFormatted] = useState('');
  const [selectedTurno, setSelectedTurno] = useState('');
  const [holidays] = useState([
    '2023-01-01', '2023-01-01', '2023-02-20', '2023-02-21', '2023-02-22', '2023-03-08', '2023-03-20', '2023-04-02', '2023-04-06', '2023-04-07', '2023-04-08', '2023-04-09', '2023-04-19', '2023-04-21', '2023-05-01', '2023-05-14', '2023-06-08', '2023-06-12', '2023-06-21', '2023-06-24', '2023-07-09', '2023-07-20', '2023-08-13', '2023-08-22', '2023-08-25', '2023-09-07', '2023-09-21', '2023-09-23', '2023-10-12', '2023-10-12', '2023-10-14', '2023-10-15', '2023-10-28', '2023-10-28', '2023-10-31', '2023-10-31', '2023-11-01', '2023-11-02', '2023-11-15', '2023-11-19', '2023-11-20', '2023-12-22', '2023-12-24', '2023-12-25', '2023-12-31', '2024-01-01', '2024-03-29', '2024-04-21', '2024-05-01', '2024-09-07', '2024-10-12', '2024-11-02', '2024-11-15', '2024-12-25', '2024-02-12', '2024-02-14', '2024-05-30', '2024-10-28'

  ]);

  const isHoliday = (date) => {
    const formattedDate = date.toISOString().split('T')[0];
    return holidays.includes(formattedDate);
  };

  const isWeekendOrHoliday = (date) => {
    const day = new Date(date).getDay();
    return day === 0 || day === 6 || isHoliday(date);
  };

  const calculateEndDate = (start, daysToAdd, selectedTurno) => {
    let end = new Date(start);

    if (selectedTurno === 'manha') {
      end.setHours(7, 0, 0);
    } else if (selectedTurno === 'tarde') {
      end.setHours(12, 0, 0);
    } else if (selectedTurno === 'noite') {
      end.setHours(18, 0, 0);
    }

    let daysAdded = 0;

    while (daysAdded < daysToAdd) {
      end.setDate(end.getDate() + 1);

      if (!isWeekendOrHoliday(end)) {
        daysAdded += 1;
      }
    }

    while (isWeekendOrHoliday(end)) {
      end.setDate(end.getDate() + 1);
    }

    const adjustedEnd = new Date(end.getTime() + end.getTimezoneOffset() * 60000);

    return adjustedEnd;
  };

  const handleHorarioSubmit = async (e) => {
    e.preventDefault();

    if (!startDate) {
      alert('Preencha a data de início antes de cadastrar o horário.');
      return;
    }

    if (!numberOfDays) {
      alert('Preencha a quantidade de dias antes de cadastrar o horário.');
      return;
    }

    const daysToAdd = parseInt(numberOfDays, 10);
    const start = new Date(startDate);
    const end = calculateEndDate(start, daysToAdd, selectedTurno);

    start.setDate(start.getDate() + 1);

    const startDateDisplay = start.toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });

    start.setDate(start.getDate() - 1);

    const endDateDisplay = end.toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });

    setStartDate(start.toISOString().split('T')[0]);
    setEndDate(end.toISOString().split('T')[0]);
    setStartDateFormatted(startDateDisplay);
    setEndDateFormatted(endDateDisplay);

    setSelectedTurno(selectedTurno);
  };

  const registrarHorarioNoBancoDeDados = async () => {
    if (!selectedProfessor || !selectedDiscipline || !selectedClassroom || !numberOfDays || !selectedTurno) {
      alert('Preencha todos os campos antes de registrar.');
      return;
    }

    const response = await fetch('http://localhost:5000/register/horario', {
      method: 'POST',
      body: JSON.stringify({
        professor: selectedProfessor,
        discipline: selectedDiscipline,
        classroom: selectedClassroom,
        startDate: startDate,
        endDate: endDate,
        numberOfDays: numberOfDays,
        turno: selectedTurno,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      alert('Horário cadastrado com sucesso');
      setSelectedProfessor('');
      setSelectedDiscipline('');
      setSelectedClassroom('');
      setNumberOfDays('');
      setStartDate('');
      setEndDate('');
      setStartDateFormatted('');
      setEndDateFormatted('');
      setSelectedTurno('');
    } else {
      alert('Erro ao cadastrar o horário. Por favor, tente novamente.');
    }
  };

  return (
    <div class="cadastro-section">
        <h2>Cadastro de Horário</h2>

      <form onSubmit={handleHorarioSubmit}>
        <div>
          <label>Professor:</label>
          <select
            value={selectedProfessor}
            onChange={(e) => setSelectedProfessor(e.target.value)}
          >
            <option value="">Selecione um Professor</option>
            {professors.map((professor) => (
              <option key={professor._id} value={professor.name}>
                {professor.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Disciplina:</label>
          <select
            value={selectedDiscipline}
            onChange={(e) => setSelectedDiscipline(e.target.value)}
          >
            <option value="">Selecione uma Disciplina</option>
            {disciplines.map((discipline) => (
              <option key={discipline._id} value={discipline.name}>
                {discipline.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Turma:</label>
          <select
            value={selectedClassroom}
            onChange={(e) => setSelectedClassroom(e.target.value)}
          >
            <option value="">Selecione uma Turma</option>
            {classrooms.map((classroom) => (
              <option key={classroom._id} value={classroom.name}>
                {classroom.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Turno:</label>
          <select
            value={selectedTurno}
            onChange={(e) => setSelectedTurno(e.target.value)}
          >
            <option value="">Selecione o Turno</option>
            <option value="manha">Manhã</option>
            <option value="tarde">Tarde</option>
            <option value="noite">Noite</option>
          </select>
        </div>
        <div>
          <label>Data de Início:</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div>
          <label>Quantidade de Dias:</label>
          <input
            type="number"
            value={numberOfDays}
            onChange={(e) => setNumberOfDays(e.target.value)}
          />
        </div>
        {startDateFormatted && endDateFormatted && (
          <div>
            <p>Data de Início: {startDateFormatted}</p>
            <p>Data de Fim: {endDateFormatted}</p>
          </div>
        )}
        <button type="submit">Verificar Horario</button>
        <button type="button" onClick={registrarHorarioNoBancoDeDados}>
          Registrar
        </button>
      </form>
    </div>
  );
}

export default HorarioCadastro;
