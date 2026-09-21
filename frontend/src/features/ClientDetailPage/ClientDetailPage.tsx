import { useNavigate, useParams } from "react-router";

import { useClients } from "../../app/context/clients/useClients";
import { PageHeader } from "../../design-system/molecules/PageHeader/PageHeader";

import "./ClientDetailPage.css";
import Button from "../../design-system/atoms/Button/Button";
import { PetCard } from "../../design-system/molecules/PetCard/PetCard";

export function ClientDetailPage() {
  const { clientId } = useParams();
  const { clients } = useClients();
  const navigate = useNavigate();
  const client = clients.find((client) => client.id === clientId);

  if (!client) {
    return (
      <div className="client-detail-page">
        <PageHeader title="Cliente" description="Cliente no encontrado" />
      </div>
    );
  }

  return (
    <div className="client-detail-page">
      <PageHeader
        title={client.name}
        description="Información del responsable y sus mascotas"
      />

      <section className="client-detail-page__owner">
        <div className="client-detail-page__owner-header">
          <div className="client-detail-page__owner-title">
            <div className="client-detail-page__owner-icon">👤</div>

            <div>
              <h2>Datos del responsable</h2>
              <p>Información de contacto del cliente.</p>
            </div>
          </div>

          <Button
            variant="secondary"
            onClick={() => navigate(`/clientes/${client.id}/editar`)}
          >
            Editar cliente
          </Button>
        </div>

        <div className="client-detail-page__owner-data">
          <div className="client-detail-page__data-item">
            <span>Nombre y apellido</span>
            <strong>{client.name}</strong>
          </div>

          <div className="client-detail-page__data-item">
            <span>DNI</span>
            <strong>{client.dni}</strong>
          </div>

          <div className="client-detail-page__data-item">
            <span>Teléfono</span>
            <strong>{client.phone || "—"}</strong>
          </div>

          <div className="client-detail-page__data-item">
            <span>Email</span>
            <strong>{client.email || "—"}</strong>
          </div>

          <div className="client-detail-page__data-item">
            <span>Dirección</span>
            <strong>{client.address || "—"}</strong>
          </div>
        </div>
      </section>

      <section className="client-detail-page__pets">
        <div className="client-detail-page__pets-header">
          <div>
            <h2>Mascotas</h2>
            <p>Mascotas asociadas a este responsable.</p>
          </div>

          <Button
            variant="secondary"
            onClick={() => navigate(`/clientes/${client.id}/mascotas/nueva`)}
          >
            + Agregar mascota
          </Button>
        </div>

        <div className="client-detail-page__pets-grid">
          {client.pets.map((pet) => (
            <PetCard
              key={pet.id}
              petName={pet.name}
              petInfo={[pet.breed, pet.age].filter(Boolean).join(" • ")}
              ownerName={client.name}
              species={pet.species}
              onEdit={() =>
                navigate(`/clientes/${client.id}/mascotas/${pet.id}/editar`)
              }
              onViewHistory={() => {
                navigate(`/historia-clinica/${pet.id}`);
              }}
              onNewAppointment={() => {
                navigate("/agenda/nuevo-turno", {
                  state: {
                    patient: {
                      petName: pet.name,
                      ownerName: client.name,
                      dni: client.dni,
                      species: pet.species,
                    },
                  },
                });
              }}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
