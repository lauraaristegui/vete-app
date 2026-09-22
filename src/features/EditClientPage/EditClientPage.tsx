import { useState } from "react";
import { useNavigate, useParams } from "react-router";

import { PageHeader } from "../../design-system/molecules/PageHeader/PageHeader";
import { OwnerForm } from "../../shared/components/OwnerForm/OwnerForm";

import { useClients } from "../../app/context/clients/useClients";

import { updateClient as updateClientService } from "../services/client.service";

import "./EditClientPage.css";

export function EditClientPage() {
  const { clientId } = useParams();
  const navigate = useNavigate();

  const { clients, updateClient: updateClientContext } = useClients();

  const [isSaving, setIsSaving] = useState(false);

  const client = clients.find((client) => client.id === clientId);

  if (!client) {
    return <p>Cliente no encontrado.</p>;
  }

  const handleSubmit = async (data: {
    name: string;
    dni: string;
    phone: string;
    email: string;
    address: string;
  }) => {
    if (isSaving) return;

    try {
      setIsSaving(true);

      const updatedClient = await updateClientService(
        client.id,
        data,
      );

      updateClientContext(client.id, updatedClient);

      navigate(`/clientes/${client.id}`);
    } catch (error) {
      console.error("Error actualizando cliente:", error);
    } finally {
      setIsSaving(false);
    }
  };

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
        loading={isSaving}
        onSubmit={handleSubmit}
      />
    </div>
  );
}