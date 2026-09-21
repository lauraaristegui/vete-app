import { useNavigate, useParams } from "react-router";

import { useClients } from "../../app/context/clients/useClients";
import { PageHeader } from "../../design-system/molecules/PageHeader/PageHeader";
import {
  PetForm,
  type PetFormData,
} from "../../shared/components/PetForm/PetForm";

import type { Pet } from "../../shared/types/client";

import "./AddPetPage.css";

export function AddPetPage() {
  const { clientId } = useParams();
  const navigate = useNavigate();

  const { clients, addPet } = useClients();

  const client = clients.find(
    (client) => client.id === clientId,
  );

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

  const handleAddPet = (data: PetFormData) => {
    const newPet: Pet = {
      id: crypto.randomUUID(),
      name: data.name,
      species: data.species,
      breed: data.breed,
      age: data.age,
    };

    addPet(client.id, newPet);

    navigate(`/clientes/${client.id}`);
  };

  return (
    <div className="add-pet-page">
      <PageHeader
        title="Agregar mascota"
        description={`Nueva mascota para ${client.name}`}
      />

      <PetForm
        submitLabel="Agregar mascota"
        onSubmit={handleAddPet}
      />
    </div>
  );
}