import { useState } from "react";
import { useNavigate } from "react-router";

import { useClients } from "../../app/context/clients/useClients";

import { PageHeader } from "../../design-system/molecules/PageHeader/PageHeader";

import {
  NewPatientForm,
  type NewPatientData,
} from "../../shared/components/ NewPatientForm/NewPatientForm";

import {
  createClient,
  createPet,
} from "../services/client.service";

import "./NewClientPage.css";

export function NewClientPage() {
  const navigate = useNavigate();
  const { addClient } = useClients();

  const [isSaving, setIsSaving] = useState(false);

  const handleCreateClient = async (patient: NewPatientData) => {
    if (isSaving) return;

    try {
      setIsSaving(true);

      const newClient = await createClient({
        name: patient.ownerName,
        dni: patient.dni,
        phone: patient.phone,
        email: patient.email,
        address: patient.address,
      });

      const newPet = await createPet(newClient.id, {
        name: patient.petName,
        species: patient.species,
        breed: patient.breed,
        age: patient.age,
      });

      const clientWithPet = {
        ...newClient,
        pets: [newPet],
      };

      addClient(clientWithPet);

      navigate(`/clientes/${newClient.id}`);
    } catch (error) {
      console.error("Error creando cliente:", error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="new-client-page">
      <PageHeader
        title="Nuevo cliente"
        description="Registrar responsable y mascota"
      />

      <NewPatientForm
        submitLabel="Guardar cliente"
        loading={isSaving}
        onContinue={handleCreateClient}
      />
    </div>
  );
}