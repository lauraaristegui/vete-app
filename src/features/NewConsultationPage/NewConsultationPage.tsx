import { useState } from "react";
import { useNavigate, useParams } from "react-router";

import { useClients } from "../../app/context/clients/useClients";
import { useConsultations } from "../../app/context/consultations/useConsultations";

import Button from "../../design-system/atoms/Button/Button";
import { InputText } from "../../design-system/molecules/InputText/InputText";
import { PageHeader } from "../../design-system/molecules/PageHeader/PageHeader";
import { Textarea } from "../../design-system/molecules/Textarea/Textarea";
import { PatientHeader } from "../../design-system/organisms/PatientHeader/PatientHeader";

import { createConsultation } from "../services/consultation.service";

import "./NewConsultationPage.css";

export function NewConsultationPage() {
  const { petId } = useParams();
  const { clients } = useClients();
  const { addConsultation } = useConsultations();
  const navigate = useNavigate();

  const [reason, setReason] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [treatment, setTreatment] = useState("");
  const [observations, setObservations] = useState("");

  const [reasonTouched, setReasonTouched] = useState(false);
  const [diagnosisTouched, setDiagnosisTouched] = useState(false);

  const [isSaving, setIsSaving] = useState(false);

  const client = clients.find((client) =>
    client.pets.some((pet) => pet.id === petId),
  );

  const pet = client?.pets.find((pet) => pet.id === petId);

  const isReasonValid = reason.trim().length >= 3;
  const isDiagnosisValid = diagnosis.trim().length >= 3;

  const isFormValid = isReasonValid && isDiagnosisValid;

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    if (!pet || !isFormValid || isSaving) return;

    const today = new Date();

    const date = [
      today.getFullYear(),
      String(today.getMonth() + 1).padStart(2, "0"),
      String(today.getDate()).padStart(2, "0"),
    ].join("-");

    try {
      setIsSaving(true);

      const createdConsultation = await createConsultation({
        petId: pet.id,
        date,
        reason: reason.trim(),
        diagnosis: diagnosis.trim(),
        treatment: treatment.trim(),
        observations: observations.trim(),
      });

      addConsultation(createdConsultation);

      navigate(`/historia-clinica/${pet.id}`);
    } catch (error) {
      console.error("Error creando consulta:", error);
    } finally {
      setIsSaving(false);
    }
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

      <form
        className="new-consultation-page__form"
        onSubmit={handleSubmit}
      >
        <InputText
          id="reason"
          label="Motivo de consulta"
          placeholder="Ej: Control general"
          value={reason}
          onChange={(event) => setReason(event.target.value)}
          onBlur={() => setReasonTouched(true)}
          error={
            reasonTouched && !isReasonValid
              ? "Ingresá un motivo de al menos 3 caracteres"
              : undefined
          }
        />

        <Textarea
          id="diagnosis"
          label="Diagnóstico"
          placeholder="Ingresá el diagnóstico del paciente"
          value={diagnosis}
          onChange={(event) => setDiagnosis(event.target.value)}
          onBlur={() => setDiagnosisTouched(true)}
          error={
            diagnosisTouched && !isDiagnosisValid
              ? "Ingresá un diagnóstico de al menos 3 caracteres"
              : undefined
          }
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
            disabled={isSaving}
            onClick={() =>
              navigate(`/historia-clinica/${pet?.id}`)
            }
          >
            Cancelar
          </Button>

          <Button
            type="submit"
            disabled={!isFormValid}
            loading={isSaving}
            loadingText="Guardando..."
          >
            Guardar consulta
          </Button>
        </div>
      </form>
    </div>
  );
}