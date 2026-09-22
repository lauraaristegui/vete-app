import { useNavigate, useParams } from "react-router";

import { useClients } from "../../app/context/clients/useClients";
import { PageHeader } from "../../design-system/molecules/PageHeader/PageHeader";
import {
  PetForm,
  type PetFormData,
} from "../../shared/components/PetForm/PetForm";

import "./EditPetPage.css";
import { updatePet as updatePetService} from "../services/pet.service";

export function EditPetPage() {
  const { clientId, petId } = useParams();
  const navigate = useNavigate();

const {
  clients,
  updatePet: updatePetContext,
} = useClients();

  const client = clients.find((client) => client.id === clientId);

  const pet = client?.pets.find((pet) => pet.id === petId);

  if (!client || !pet) {
    return <p>Mascota no encontrada.</p>;
  }

const handleUpdatePet = async (data: PetFormData) => {
  try {
    const updatedPet = await updatePetService(
      pet.id,
      data,
    );

    updatePetContext(
      client.id,
      pet.id,
      updatedPet,
    );
 
    navigate(`/clientes/${client.id}`);
  } catch (error) {
    console.error("Error actualizando mascota:", error);
  }
};

  return (
    <div className="edit-pet-page">
      <PageHeader
        title="Editar mascota"
        description={`Actualizá los datos de ${pet.name}`}
      />

      <PetForm
        initialData={{
          name: pet.name,
          species: pet.species,
          breed: pet.breed,
          age: pet.age,
        }}
        submitLabel="Guardar cambios"
        onSubmit={handleUpdatePet}
      />
    </div>
  );
}
