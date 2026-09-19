import { useState } from "react";
import { useAppointments } from "../../app/context/useAppointments";

import Button from "../../design-system/atoms/Button/Button";
import Input from "../../design-system/atoms/Input/Input";
import { AppointmentRow } from "../../design-system/organisms/AppointmentRow/AppointmentRow";
import "./ReceptionPage.css";
import { SearchResultOwner } from "../../design-system/organisms/SearchResultOwner/SearchResultOwner";
import { normalizeText } from "../../shared/utils/normalizeText";
import { SearchNoResults } from "../../shared/components/SearchNoResults/SearchNoResults";
import { Link } from "react-router";
import { PageHeader } from "../../design-system/molecules/PageHeader/PageHeader";

export function ReceptionPage() {
  const [search, setSearch] = useState("");

const { appointments } = useAppointments();

  const client = {
    name: "Rosario Gomez",
    dni: "36.547.658",
    phone: "2449 123456",
    email: "laura@email.com",
    pets: [
      {
        id: "1",
        name: "Luna",
        info: "Caniche • 2 años",
        species: "dog" as const,
      },
      {
        id: "2",
        name: "Mía",
        info: "Dálmata • 2 años",
        species: "dog" as const,
      },
    ],
  };

  const hasSearchResult =
    search.length > 0 &&
    (normalizeText(client.name).includes(normalizeText(search)) ||
      normalizeText(client.dni).includes(normalizeText(search)) ||
      client.pets.some((pet) =>
        normalizeText(pet.name).includes(normalizeText(search)),
      ));

  return (
    <div className="reception-page">
      <header className="reception-page__header">
        <div className="reception-page__appointments-title">
        <PageHeader title="Recepción" description="Turnos y pacientes de hoy" />
          <Link to="/agenda">Ver todos →</Link>
        </div>
      </header>
      <section className="reception-page__appointments">
        <div className="reception-page__appointment-header">
          <span>Hora</span>
          <span>Paciente</span>
          <span>Responsable</span>
          <span>DNI</span>
          <span>Estado</span>
          <span>Acción</span>
        </div>

        <div className="reception-page__appointment-list">
          {appointments.slice(0, 3).map((appointment) => (
            <AppointmentRow
              key={appointment.id}
              time={appointment.time}
              petName={appointment.petName}
              ownerName={appointment.ownerName}
              dni={appointment.dni}
              status={appointment.status}
            />
          ))}
        </div>
      </section>

      <section className="reception-page__search">
        <div className="reception-page__search-header">
          <h2 className="reception-page__search-subtitle">
            Buscar cliente o mascota
          </h2>

          <Button variant="secondary">+ Nuevo cliente</Button>
        </div>

        <div className="reception-page__search-field">
          <label htmlFor="reception-search">
            DNI, nombre del responsable o mascota
          </label>

          <Input
            id="reception-search"
            placeholder="Buscar cliente o mascota..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </section>
      {search.length > 0 &&
        (hasSearchResult ? (
          <SearchResultOwner
            name={client.name}
            dni={client.dni}
            phone={client.phone}
            email={client.email}
            pets={client.pets}
          />
        ) : (
          <SearchNoResults search={search} showButton={true} description="No encontramos ningún cliente o mascota que coincida con" />
        ))}
    </div>
  );
}
