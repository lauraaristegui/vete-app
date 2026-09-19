import { useState } from "react";
import { useAppointments } from "../../app/context/useAppointments";

import Button from "../../design-system/atoms/Button/Button";
import Input from "../../design-system/atoms/Input/Input";
import { PageHeader } from "../../design-system/molecules/PageHeader/PageHeader";
import { AppointmentRow } from "../../design-system/organisms/AppointmentRow/AppointmentRow";

import { SearchNoResults } from "../../shared/components/SearchNoResults/SearchNoResults";
import { normalizeText } from "../../shared/utils/normalizeText";

import "./AgendaPage.css";

export function AgendaPage() {
  const [search, setSearch] = useState("");

  const { appointments, changeStatus } = useAppointments();

  const normalizedSearch = normalizeText(search);

  const filteredAppointments = appointments.filter((appointment) => {
    return (
      normalizeText(appointment.petName).includes(normalizedSearch) ||
      normalizeText(appointment.ownerName).includes(normalizedSearch) ||
      normalizeText(appointment.dni).includes(normalizedSearch)
    );
  });

  return (
    <div className="agenda-page">
      <header className="agenda-page__header">
        <div>
          <PageHeader title="Agenda" description="Gestión de turnos" />
        </div>

        <Button variant="secondary">+ Nuevo turno</Button>
      </header>

      <section className="agenda-page__appointments">
        <div className="agenda-page__search">
          <label htmlFor="appointment-search">Buscar turno</label>

          <Input
            id="appointment-search"
            placeholder="Buscar por paciente, responsable o DNI..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <h2>Turnos del día</h2>

        <div className="agenda-page__appointment-header">
          <span>Hora</span>
          <span>Paciente</span>
          <span>Responsable</span>
          <span>DNI</span>
          <span>Estado</span>
          <span>Acción</span>
        </div>

        <div className="agenda-page__appointment-list">
          {filteredAppointments.length > 0 ? (
            filteredAppointments.map((appointment) => (
              <AppointmentRow
                key={appointment.id}
                time={appointment.time}
                petName={appointment.petName}
                ownerName={appointment.ownerName}
                dni={appointment.dni}
                status={appointment.status}
                onStatusChange={(newStatus) =>
                  changeStatus(appointment.id, newStatus)
                }
              />
            ))
          ) : (
            <SearchNoResults
              search={search}
              showButton={false}
              description="No encontramos ningún turno que coincida con"
            />
          )}
        </div>
      </section>
    </div>
  );
}
