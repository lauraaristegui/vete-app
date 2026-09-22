import type {
  AppointmentStatus,
  PetSpecies,
} from "../../../shared/types/appointment";

import dogImage from "../../../assets/golden-retriever.png";
import catImage from "../../../assets/cat.png";
import rabbitImage from "../../../assets/rabbit.png";

import { Status } from "../../atoms/Status/Status";
import { ActionMenu } from "../../molecules/ActionMenu/ActionMenu";

import "./AppointmentRow.css";

type AppointmentRowProps = {
  time: string;
  petName: string;
  ownerName: string;
  dni: string;
  species: PetSpecies;
  status: AppointmentStatus;
  onStatusChange?: (status: AppointmentStatus) => void;
  showActions?: boolean;
  isUpdating?: boolean;
};
const petImages: Record<PetSpecies, string> = {
  dog: dogImage,
  cat: catImage,
  rabbit: rabbitImage,
};

export function AppointmentRow({
  time,
  petName,
  ownerName,
  dni,
  species,
  status,
  onStatusChange,
  showActions = true,
  isUpdating = false,
}: AppointmentRowProps) {
  return (
    <div
      className={`appointment-row ${
        showActions
          ? "appointment-row--with-actions"
          : "appointment-row--without-actions"
      }`}
    >
      <span className="appointment-row__time">{time}</span>

      <div className="appointment-row__patient">
        <img
          className="appointment-row__patient-avatar"
          src={petImages[species]}
          alt=""
        />

        <span>{petName}</span>
      </div>

      <span>{ownerName}</span>

      <span>{dni}</span>

      <div className="appointment-row__status">
        <Status status={status} />
      </div>

      {showActions && (
        <div className="appointment-row__action">
          {status === "pending" && (
            <ActionMenu
              label="Elegir acción"
              loading={isUpdating}
              options={[
                {
                  label: "Recepcionar",
                  value: "received",
                },
                {
                  label: "Marcar como ausente",
                  value: "no-show",
                },
                {
                  label: "Cancelar turno",
                  value: "cancelled",
                },
              ]}
              onSelect={(value) => onStatusChange?.(value as AppointmentStatus)}
            />
          )}
        </div>
      )}
    </div>
  );
}
