import { useState } from 'react'
import '../styles/calendario.css';

function Calendario() {

  const monthsList = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];

  const [selectedMonth, setSelectedMonth] = useState('Janeiro');
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const calculateDaysInMonth = (month, year) => {
    const currentDate = new Date(year, month, 1);
    const daysArray = [];
    while (currentDate.getMonth() === month) {
      daysArray.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return daysArray;
  };

  const daysInSelectedMonth = selectedMonth
    ? calculateDaysInMonth(monthsList.indexOf(selectedMonth), selectedYear)
    : [];

  return (
    <div>
      <div class="escolhascalendario">
        <h1>Calendário</h1>
        <label>Mês:</label>
        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
        >
          <option value="">Selecione um Mês</option>
          {monthsList.map((month, index) => (
            <option key={index} value={month}>
              {month}
            </option>
          ))}
        </select>

        <label>Ano:</label>
        <input
          type="number"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        />
      </div>

      {selectedMonth && (
        <div>
          <h2>
            {selectedMonth} {selectedYear}
          </h2>

          <div className="calendario-grid">
            {daysInSelectedMonth.map((day, index) => (
              <div key={index} className="calendario-dia">
                {day.getDate()}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Calendario
