import { useNavigate } from "react-router";

import { useClients } from "../../app/context/clients/useClients";
import { PageHeader } from "../../design-system/molecules/PageHeader/PageHeader";


import "./NewClientPage.css";
import { NewPatientForm, type NewPatientData } from "../../shared/components/ NewPatientForm/NewPatientForm";

export function NewClientPage() {
  const navigate = useNavigate();
  const { addClient } = useClients();

const handleCreateClient = (patient: NewPatientData) => {
  const newClient = {
    id: crypto.randomUUID(),
    name: patient.ownerName,
    dni: patient.dni,
    phone: patient.phone,
    email: patient.email,
    address: patient.address,
    pets: [
      {
        id: crypto.randomUUID(),
        name: patient.petName,
        species: patient.species,
        breed: patient.breed,
        age: patient.age,
      },
    ],
  };

  addClient(newClient);

  navigate(`/clientes/${newClient.id}`);
};

  return (
    <div className="new-client-page">
      <PageHeader
        title="Nuevo cliente"
        description="Registrar responsable y mascota"
      />

      <NewPatientForm
        submitLabel="Guardar cliente"
        onContinue={handleCreateClient}
      />
    </div>
  );
}