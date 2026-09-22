import Button from "../../atoms/Button/Button";

import dogImage from "../../../assets/golden-retriever.png";
import catImage from "../../../assets/cat.png";
import rabbitImage from "../../../assets/rabbit.png";

import "./AppointmentSummary.css";

type PetSpecies = "dog" | "cat" | "rabbit";

type AppointmentSummaryProps = {
  veterinarian: string;
  date: string;
  time: string;
  petName: string;
  ownerName: string;
  dni: string;
  species: PetSpecies;
  onConfirm: () => void;
  onModify: () => void;
  loading?: boolean;
};

const petImages = {
  dog: dogImage,
  cat: catImage,
  rabbit: rabbitImage,
};

export function AppointmentSummary({
  veterinarian,
  date,
  time,
  petName,
  ownerName,
  dni,
  species,
  onConfirm,
  onModify,
  loading = false,
}: AppointmentSummaryProps) {
  return (
    <div className="appointment-summary">
      <h3 className="appointment-summary__title">Resumen del turno</h3>

      <div className="appointment-summary__data">
        <div>
          <span>Veterinario</span>
          <strong>{veterinarian}</strong>
        </div>

        <div>
          <span>Fecha</span>
          <strong>{date}</strong>
        </div>

        <div>
          <span>Hora</span>
          <strong>{time}</strong>
        </div>
      </div>

      <div className="appointment-summary__patient">
        <div className="appointment-summary__avatar">
          <img src={petImages[species]} alt={petName} />
        </div>

        <div className="appointment-summary__patient-info">
          <strong>{petName}</strong>

          <span className="appointment-summary__owner">
            Responsable: {ownerName}
          </span>

          <span className="appointment-summary__dni">DNI {dni}</span>
        </div>
      </div>

      <div className="appointment-summary__actions">
        <div className="appointment-summary__actions">
          <Button
            variant="primary"
            onClick={onConfirm}
            loading={loading}
            loadingText="Confirmando..."
          >
            Confirmar consulta
          </Button>

          <Button variant="neutral" onClick={onModify} disabled={loading}>
            Modificar
          </Button>
        </div>
      </div>
    </div>
  );
}
