import React, { useState, useEffect } from 'react';
import './styles/App.css'
import Cadastro from './components/cadastro'
import Calendario from './components/calendario'
import HorarioCadastro from './components/cadastrohorario'

const App = () => {
  const [professors, setProfessors] = useState([]);
  const [disciplines, setDisciplines] = useState([]);
  const [classrooms, setClassrooms] = useState([]);
  const [horarios, setHorarios] = useState([]);
  const [showHorarios, setShowHorarios] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const professorsResponse = await fetch('http://localhost:5000/professors');
        const disciplinesResponse = await fetch('http://localhost:5000/disciplines');
        const classroomsResponse = await fetch('http://localhost:5000/classrooms');
        const horariosResponse = await fetch('http://localhost:5000/horarios');

        const professorsData = await professorsResponse.json();
        const disciplinesData = await disciplinesResponse.json();
        const classroomsData = await classroomsResponse.json();
        const horariosData = await horariosResponse.json();

        setProfessors(professorsData);
        setDisciplines(disciplinesData);
        setClassrooms(classroomsData);
        setHorarios(horariosData);
        setShowHorarios(horariosData.length > 0); 
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      
        <Cadastro />

      <HorarioCadastro
        professors={professors}
        disciplines={disciplines}
        classrooms={classrooms}
      />

      <Calendario />


            
    </div>
  );
};

export default App;

