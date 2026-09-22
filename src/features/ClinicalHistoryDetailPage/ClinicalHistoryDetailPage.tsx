import { useNavigate, useParams } from "react-router";

import { useClients } from "../../app/context/clients/useClients";
import { PageHeader } from "../../design-system/molecules/PageHeader/PageHeader";

import "./ClinicalHistoryDetailPage.css";
import { PatientHeader } from "../../design-system/organisms/PatientHeader/PatientHeader";
import Button from "../../design-system/atoms/Button/Button";
import { CardConsultation } from "../../design-system/organisms/CardConsultation/CardConsultation";
import { useConsultations } from "../../app/context/consultations/useConsultations";

export function ClinicalHistoryDetailPage() {
  const { petId } = useParams();
  const { clients } = useClients();
  const { consultations } = useConsultations();
  const navigate = useNavigate();

  const client = clients.find((client) =>
    client.pets.some((pet) => pet.id === petId),
  );

  const pet = client?.pets.find((pet) => pet.id === petId);

  if (!client || !pet) {
    return (
      <div className="clinical-history-detail-page">
        <PageHeader
          title="Historia clínica"
          description="Paciente no encontrado"
        />
      </div>
    );
  }

  const petConsultations = consultations
    .filter((consultation) => consultation.petId === pet.id)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="clinical-history-detail-page">
      <PageHeader
        title={`Historia clínica de ${pet.name}`}
        description={`Responsable: ${client.name}`}
      />

      <div className="clinical-history-detail-page__content">
        <PatientHeader
          petName={pet.name}
          petInfo={[pet.breed, pet.age].filter(Boolean).join(" • ")}
          ownerName={client.name}
          species={pet.species}
        />
        <section className="clinical-history-detail-page__history">
          <div className="clinical-history-detail-page__history-header">
            <div>
              <h2>Historial clínico</h2>
              <p>Consultas registradas del paciente.</p>
            </div>

            <Button
              variant="secondary"
              onClick={() =>
                navigate(`/historia-clinica/${pet.id}/nueva-consulta`)
              }
            >
              + Nueva consulta
            </Button>
          </div>

          <div className="clinical-history-detail-page__consultations">
            {petConsultations.map((consultation) => (
              <CardConsultation
                key={consultation.id}
                date={consultation.date}
                reason={consultation.reason}
                diagnosis={consultation.diagnosis}
                treatment={consultation.treatment}
                observations={consultation.observations}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
