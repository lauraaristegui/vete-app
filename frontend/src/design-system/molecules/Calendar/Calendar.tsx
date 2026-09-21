import { useState } from "react";
import "./Calendar.css";

type CalendarProps = {
  selectedDate: string;
  onDateChange: (date: string) => void;
};

export function Calendar({
  selectedDate,
  onDateChange,
}: CalendarProps) {
  // Fecha temporal seleccionada dentro del calendario.
  const [draftDate, setDraftDate] = useState(selectedDate);

  // Mes que está mostrando el calendario.
  const [visibleDate, setVisibleDate] = useState(() =>
    selectedDate
      ? new Date(`${selectedDate}T00:00:00`)
      : new Date(),
  );

  // Fecha seleccionada temporalmente.
  const selected = draftDate
    ? new Date(`${draftDate}T00:00:00`)
    : null;

  const year = visibleDate.getFullYear();
  const month = visibleDate.getMonth();

  const weekDays = [
    "Lun",
    "Mar",
    "Mié",
    "Jue",
    "Vie",
    "Sáb",
    "Dom",
  ];

  const daysInMonth = new Date(
    year,
    month + 1,
    0,
  ).getDate();

  const firstDayOfMonth = new Date(
    year,
    month,
    1,
  ).getDay();

  // getDay():
  // domingo = 0
  //
  // Nuestro calendario:
  // lunes = 0
  const startOffset = (firstDayOfMonth + 6) % 7;

  const days = Array.from(
    { length: daysInMonth },
    (_, index) => index + 1,
  );

  const monthLabel = visibleDate.toLocaleDateString(
    "es-AR",
    {
      month: "long",
      year: "numeric",
    },
  );

  const handlePreviousMonth = () => {
    setVisibleDate(
      new Date(year, month - 1, 1),
    );
  };

  const handleNextMonth = () => {
    setVisibleDate(
      new Date(year, month + 1, 1),
    );
  };

  const handleDateSelect = (day: number) => {
    const formattedMonth = String(month + 1).padStart(
      2,
      "0",
    );

    const formattedDay = String(day).padStart(
      2,
      "0",
    );

    const newDate = `${year}-${formattedMonth}-${formattedDay}`;

    setDraftDate(newDate);
  };

  const handleClear = () => {
    setDraftDate("");
  };

  const handleCancel = () => {
    setDraftDate(selectedDate);

    // Si ya había una fecha confirmada,
    // volvemos al mes de esa fecha.
    if (selectedDate) {
      setVisibleDate(
        new Date(`${selectedDate}T00:00:00`),
      );

      return;
    }

    // Si todavía no había una fecha,
    // volvemos al mes actual.
    setVisibleDate(new Date());
  };

  const handleAccept = () => {
    if (!draftDate) return;

    onDateChange(draftDate);
  };

  return (
    <div className="calendar">
      <div className="calendar__header">
        <button
          type="button"
          className="calendar__navigation"
          onClick={handlePreviousMonth}
          aria-label="Mes anterior"
        >
          ‹
        </button>

        <span className="calendar__month">
          {monthLabel}
        </span>

        <button
          type="button"
          className="calendar__navigation"
          onClick={handleNextMonth}
          aria-label="Mes siguiente"
        >
          ›
        </button>
      </div>

      <div className="calendar__weekdays">
        {weekDays.map((day) => (
          <span
            key={day}
            className="calendar__weekday"
          >
            {day}
          </span>
        ))}
      </div>

      <div className="calendar__days">
        {Array.from({
          length: startOffset,
        }).map((_, index) => (
          <div key={`empty-${index}`} />
        ))}

        {days.map((day) => {
          const isSelected =
            selected !== null &&
            day === selected.getDate() &&
            month === selected.getMonth() &&
            year === selected.getFullYear();

          return (
            <button
              key={day}
              type="button"
              className={`calendar__day ${
                isSelected
                  ? "calendar__day--selected"
                  : ""
              }`}
              onClick={() => handleDateSelect(day)}
            >
              {day}
            </button>
          );
        })}
      </div>

      <div className="calendar__actions">
        <button
          type="button"
          className="calendar__action calendar__action--clear"
          onClick={handleClear}
        >
          Limpiar
        </button>

        <div className="calendar__actions-right">
          <button
            type="button"
            className="calendar__action"
            onClick={handleCancel}
          >
            Cancelar
          </button>

          <button
            type="button"
            className="calendar__action calendar__action--accept"
            onClick={handleAccept}
            disabled={!draftDate}
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}