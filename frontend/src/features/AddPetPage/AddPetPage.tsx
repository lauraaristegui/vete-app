import { useNavigate, useParams } from "react-router";

import { useClients } from "../../app/context/clients/useClients";
import { PageHeader } from "../../design-system/molecules/PageHeader/PageHeader";
import {
  PetForm,
  type PetFormData,
} from "../../shared/components/PetForm/PetForm";

import "./AddPetPage.css";
import { createPet } from "../services/client.service";

export function AddPetPage() {
  const { clientId } = useParams();
  const navigate = useNavigate();

  const { clients, addPet } = useClients();

  const client = clients.find((client) => client.id === clientId);

  if (!client) {
    return (
      <div className="add-pet-page">
        <PageHeader
          title="Agregar mascota"
          description="Cliente no encontrado"
        />
      </div>
    );
  }

  const handleAddPet = async (data: PetFormData) => {
    try {
      const newPet = await createPet(client.id, data);

      addPet(client.id, newPet);

      navigate(`/clientes/${client.id}`);
    } catch (error) {
      console.error("Error creando mascota:", error);
    }
  };

  return (
    <div className="add-pet-page">
      <PageHeader
        title="Agregar mascota"
        description={`Nueva mascota para ${client.name}`}
      />

      <PetForm submitLabel="Agregar mascota" onSubmit={handleAddPet} />
    </div>
  );
}
