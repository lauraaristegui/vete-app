import { useState } from "react";
import { Link, useNavigate } from "react-router";

import { useAppointments } from "../../app/context/Appointments/useAppointments";
import { useClients } from "../../app/context/clients/useClients";

import Button from "../../design-system/atoms/Button/Button";
import Input from "../../design-system/atoms/Input/Input";
import { PageHeader } from "../../design-system/molecules/PageHeader/PageHeader";
import { SearchResultOwner } from "../../design-system/organisms/SearchResultOwner/SearchResultOwner";

import { SearchNoResults } from "../../shared/components/SearchNoResults/SearchNoResults";
import { normalizeText } from "../../shared/utils/normalizeText";
import type { AppointmentStatus } from "../../shared/types/appointment";

import "./ReceptionPage.css";
import { AppointmentList } from "../../design-system/organisms/AppointmentList/AppointmentList";
import { Loading } from "../../design-system/atoms/Loading/Loading";

export function ReceptionPage() {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();
  const { appointments, isLoading } = useAppointments();

  const { clients } = useClients();

  const statusPriority: Record<AppointmentStatus, number> = {
    pending: 1,
    received: 2,
    "in-consultation": 3,
    completed: 4,
    "no-show": 5,
    cancelled: 6,
  };

  const today = new Date();

  const todayFormatted = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0"),
  ].join("-");

  const receptionAppointments = appointments
    .filter((appointment) => appointment.date === todayFormatted)
    .sort((a, b) => statusPriority[a.status] - statusPriority[b.status])
    .slice(0, 3);

  const normalizedSearch = normalizeText(search);

  const filteredClients = clients.filter((client) => {
    return (
      normalizeText(client.name).includes(normalizedSearch) ||
      normalizeText(client.dni).includes(normalizedSearch) ||
      client.pets.some((pet) =>
        normalizeText(pet.name).includes(normalizedSearch),
      )
    );
  });

  return (
    <div className="reception-page">
      <header className="reception-page__header">
        <PageHeader title="Recepción" description="Turnos y pacientes de hoy" />
      </header>

      {/* TURNOS DE HOY */}

      <section className="reception-page__appointments">
        <div className="reception-page__section-header">
          <div>
            <h2>Turnos de hoy</h2>
            <p>Próximos turnos y estado de atención.</p>
          </div>

          <Link to="/agenda">Ver todos →</Link>
        </div>

        {isLoading ? (
          <Loading text="Cargando turnos..." />
        ) : (
          <AppointmentList
            appointments={receptionAppointments}
            showActions={false}
          />
        )}
      </section>

      {/* BÚSQUEDA */}

      <section className="reception-page__search">
        <div className="reception-page__search-header">
          <div>
            <h2 className="reception-page__search-subtitle">
              Buscar cliente o mascota
            </h2>

            <p className="reception-page__search-description">
              Consultá rápidamente los datos de un responsable o paciente.
            </p>
          </div>

          <Button
            variant="secondary"
            onClick={() => navigate("/clientes/nuevo")}
          >
            + Nuevo cliente
          </Button>
        </div>

        <div className="reception-page__search-field">
          <label htmlFor="reception-search">
            DNI, nombre del responsable o mascota
          </label>

          <Input
            id="reception-search"
            placeholder="Buscar cliente o mascota..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
      </section>

      {/* RESULTADOS */}

      {search.length > 0 &&
        (filteredClients.length > 0 ? (
          <div className="reception-page__results">
            {filteredClients.map((client) => (
              <SearchResultOwner
                key={client.id}
                clientId={client.id}
                name={client.name}
                dni={client.dni}
                phone={client.phone}
                email={client.email}
                pets={client.pets.map((pet) => ({
                  id: pet.id,
                  name: pet.name,
                  info: [pet.breed, pet.age].filter(Boolean).join(" • "),
                  species: pet.species,
                }))}
                onEdit={(clientId) => {
                  navigate(`/clientes/${clientId}/editar`);
                }}
                onAddPet={(clientId) => {
                  navigate(`/clientes/${clientId}/mascotas/nueva`);
                }}
                onEditPet={(petId) => {
                  navigate(`/clientes/${client.id}/mascotas/${petId}/editar`);
                }}
                onViewHistory={(petId) => {
                  navigate(`/historia-clinica/${petId}`);
                }}
                onNewAppointment={(patient) => {
                  navigate("/agenda/nuevo-turno", {
                    state: { patient },
                  });
                }}
              />
            ))}
          </div>
        ) : (
          <SearchNoResults
            search={search}
            showButton={true}
            description="No encontramos ningún cliente o mascota que coincida con"
          />
        ))}
    </div>
  );
}
