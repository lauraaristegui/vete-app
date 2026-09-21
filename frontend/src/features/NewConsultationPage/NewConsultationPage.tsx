import { useNavigate, useParams } from "react-router";
import { PageHeader } from "../../design-system/molecules/PageHeader/PageHeader";
import { useClients } from "../../app/context/clients/useClients";
import { PatientHeader } from "../../design-system/organisms/PatientHeader/PatientHeader";
import { Textarea } from "../../design-system/molecules/Textarea/Textarea";
import Button from "../../design-system/atoms/Button/Button";
import { InputText } from "../../design-system/molecules/InputText/InputText";
import { useState } from "react";
import { useConsultations } from "../../app/context/consultations/useConsultations";

import "./NewConsultationPage.css";

export function NewConsultationPage() {
  const { petId } = useParams();
  const { clients } = useClients();
  const [reason, setReason] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [treatment, setTreatment] = useState("");
  const [observations, setObservations] = useState("");
  const { addConsultation } = useConsultations();
  const navigate = useNavigate();
  const client = clients.find((client) =>
    client.pets.some((pet) => pet.id === petId),
  );

  const pet = client?.pets.find((pet) => pet.id === petId);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!pet) return;

    const today = new Date();

    const date = [
      today.getFullYear(),
      String(today.getMonth() + 1).padStart(2, "0"),
      String(today.getDate()).padStart(2, "0"),
    ].join("-");

    addConsultation({
      id: crypto.randomUUID(),
      petId: pet.id,
      date,
      reason,
      diagnosis,
      treatment,
      observations,
    });

    navigate(`/historia-clinica/${pet.id}`);
  };

  return (
    <div className="new-consultation-page">
      <PageHeader
        title="Nueva consulta"
        description="Registrar una nueva consulta clínica"
      />

      {client && pet && (
        <PatientHeader
          petName={pet.name}
          petInfo={[pet.breed, pet.age].filter(Boolean).join(" • ")}
          ownerName={client.name}
          species={pet.species}
        />
      )}

      <form className="new-consultation-page__form" onSubmit={handleSubmit}>
        <InputText
          id="reason"
          label="Motivo de consulta"
          placeholder="Ej: Control general"
          value={reason}
          onChange={(event) => setReason(event.target.value)}
        />

        <Textarea
          id="diagnosis"
          label="Diagnóstico"
          placeholder="Ingresá el diagnóstico del paciente"
          value={diagnosis}
          onChange={(event) => setDiagnosis(event.target.value)}
        />

        <Textarea
          id="treatment"
          label="Tratamiento"
          placeholder="Indicaciones, medicación o tratamiento"
          value={treatment}
          onChange={(event) => setTreatment(event.target.value)}
        />

        <Textarea
          id="observations"
          label="Observaciones"
          placeholder="Observaciones adicionales"
          value={observations}
          onChange={(event) => setObservations(event.target.value)}
        />

        <div className="new-consultation-page__actions">
          <Button
            type="button"
            variant="secondary"
            onClick={() => navigate(`/historia-clinica/${pet.id}`)}
          >
            Cancelar
          </Button>

          <Button type="submit">Guardar consulta</Button>
        </div>
      </form>
    </div>
  );
}
