import { useNavigate, useParams } from "react-router";

import { PageHeader } from "../../design-system/molecules/PageHeader/PageHeader";
import { OwnerForm } from "../../shared/components/OwnerForm/OwnerForm";
import { useClients } from "../../app/context/clients/useClients";

import "./EditClientPage.css";

export function EditClientPage() {
  const { clientId } = useParams();
  const navigate = useNavigate();

  const { clients, updateClient } = useClients();

  const client = clients.find(
    (client) => client.id === clientId,
  );

  if (!client) {
    return <p>Cliente no encontrado.</p>;
  }

  return (
    <div className="edit-client-page">
      <PageHeader
        title="Editar cliente"
        description={`Actualizá los datos de ${client.name}.`}
      />

      <OwnerForm
        initialData={{
          name: client.name,
          dni: client.dni,
          phone: client.phone,
          email: client.email,
          address: client.address,
        }}
        submitLabel="Guardar cambios"
        onSubmit={(data) => {
          updateClient(client.id, data);

          navigate(`/clientes/${client.id}`);
        }}
      />
    </div>
  );
}