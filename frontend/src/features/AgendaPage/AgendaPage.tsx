import { useState } from "react";
import { useNavigate } from "react-router";

import { useAppointments } from "../../app/context/Appointments/useAppointments";

import Button from "../../design-system/atoms/Button/Button";
import Input from "../../design-system/atoms/Input/Input";
import { PageHeader } from "../../design-system/molecules/PageHeader/PageHeader";
import { AppointmentList } from "../../design-system/organisms/AppointmentList/AppointmentList";

import { SearchNoResults } from "../../shared/components/SearchNoResults/SearchNoResults";
import type { AppointmentStatus } from "../../shared/types/appointment";
import { normalizeText } from "../../shared/utils/normalizeText";

import "./AgendaPage.css";

export function AgendaPage() {
  const { appointments, changeStatus } = useAppointments();

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const getTodayDate = () => {
    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  const [selectedDate, setSelectedDate] = useState(getTodayDate);

  const navigate = useNavigate();

  const normalizedSearch = normalizeText(search);

  const appointmentsByDate = appointments.filter(
    (appointment) => appointment.date === selectedDate,
  );

  const filteredAppointments = appointmentsByDate.filter((appointment) => {
    return (
      normalizeText(appointment.petName).includes(normalizedSearch) ||
      normalizeText(appointment.ownerName).includes(normalizedSearch) ||
      normalizeText(appointment.dni).includes(normalizedSearch)
    );
  });

  const statusPriority: Record<AppointmentStatus, number> = {
    pending: 1,
    received: 2,
    "in-consultation": 3,
    completed: 4,
    "no-show": 5,
    cancelled: 6,
  };

  const sortedAppointments = [...filteredAppointments].sort(
    (a, b) => statusPriority[a.status] - statusPriority[b.status],
  );

  const appointmentsPerPage = 5;

  const totalPages = Math.ceil(sortedAppointments.length / appointmentsPerPage);

  const startIndex = (currentPage - 1) * appointmentsPerPage;

  const paginatedAppointments = sortedAppointments.slice(
    startIndex,
    startIndex + appointmentsPerPage,
  );

  const changeDay = (days: number) => {
    const currentDate = new Date(`${selectedDate}T00:00:00`);

    currentDate.setDate(currentDate.getDate() + days);

    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");

    setSelectedDate(`${year}-${month}-${day}`);
    setCurrentPage(1);
  };

  const formattedSelectedDate = new Date(
    `${selectedDate}T00:00:00`,
  ).toLocaleDateString("es-AR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="agenda-page">
      <header className="agenda-page__header">
        <PageHeader title="Agenda" description="Gestión de turnos" />

        <Button
          variant="secondary"
          onClick={() => navigate("/agenda/nuevo-turno")}
        >
          + Nuevo turno
        </Button>
      </header>

      <section className="agenda-page__appointments">
        <div className="agenda-page__search">
          <label htmlFor="appointment-search">Buscar turno</label>

          {/* <Input
            id="appointment-search"
            placeholder="Buscar por paciente, responsable o DNI..."
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
              setCurrentPage(1);
            }}
          /> */}
          <Input
            id="appointment-search"
            placeholder="Buscar por paciente, responsable o DNI..."
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
              setCurrentPage(1);
            }}
          />

          <p>Buscando: {search}</p>
        </div>

        <div className="agenda-page__date-header">
          <h2>Turnos del día</h2>

          <div className="agenda-page__date-navigation">
            <Button variant="neutral" onClick={() => changeDay(-1)}>
              ←
            </Button>

            <span className="agenda-page__selected-date">
              {formattedSelectedDate}
            </span>

            <Button variant="neutral" onClick={() => changeDay(1)}>
              →
            </Button>
          </div>
        </div>

        {appointmentsByDate.length === 0 ? (
          <SearchNoResults
            title="No hay turnos reservados"
            description={`No hay turnos reservados para el ${formattedSelectedDate}.`}
            showButton={false}
          />
        ) : paginatedAppointments.length === 0 ? (
          <SearchNoResults
            search={search}
            description="No encontramos ningún turno que coincida con"
            showButton={false}
          />
        ) : (
          <AppointmentList
            appointments={paginatedAppointments}
            showActions
            onStatusChange={changeStatus}
          />
        )}

        {totalPages > 1 && (
          <div className="agenda-page__pagination">
            <Button
              variant="neutral"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((page) => page - 1)}
            >
              Anterior
            </Button>

            <span>
              Página {currentPage} de {totalPages}
            </span>

            <Button
              variant="neutral"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((page) => page + 1)}
            >
              Siguiente
            </Button>
          </div>
        )}
      </section>
    </div>
  );
}
