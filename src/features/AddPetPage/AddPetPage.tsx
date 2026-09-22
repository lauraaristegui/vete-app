import { useState } from "react";
import { useNavigate, useParams } from "react-router";

import { useClients } from "../../app/context/clients/useClients";

import { PageHeader } from "../../design-system/molecules/PageHeader/PageHeader";

import {
  PetForm,
  type PetFormData,
} from "../../shared/components/PetForm/PetForm";

import { createPet } from "../services/client.service";

import "./AddPetPage.css";

export function AddPetPage() {
  const { clientId } = useParams();
  const navigate = useNavigate();

  const { clients, addPet } = useClients();

  const [isSaving, setIsSaving] = useState(false);

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
    if (isSaving) return;

    try {
      setIsSaving(true);

      const newPet = await createPet(client.id, data);

      addPet(client.id, newPet);

      navigate(`/clientes/${client.id}`);
    } catch (error) {
      console.error("Error creando mascota:", error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="add-pet-page">
      <PageHeader
        title="Agregar mascota"
        description={`Nueva mascota para ${client.name}`}
      />

      <PetForm
        submitLabel="Agregar mascota"
        loading={isSaving}
        onSubmit={handleAddPet}
      />
    </div>
  );
}