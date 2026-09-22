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
      {/* Hora */}
      <span className="appointment-row__time">
        {time}
      </span>

      {/* Paciente */}
      <div className="appointment-row__patient">
        <img
          className="appointment-row__patient-avatar"
          src={petImages[species]}
          alt=""
        />

        <span>{petName}</span>
      </div>

      {/* Responsable */}
      <div className="appointment-row__owner">
        <span className="appointment-row__mobile-label">
          Responsable
        </span>

        <span>{ownerName}</span>
      </div>

      {/* DNI */}
      <div className="appointment-row__dni">
        <span className="appointment-row__mobile-label">
          DNI
        </span>

        <span>{dni}</span>
      </div>

      {/* Estado */}
      <div className="appointment-row__status">
        <Status status={status} />
      </div>

      {/* Acciones - solo Agenda */}
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
              onSelect={(value) =>
                onStatusChange?.(
                  value as AppointmentStatus,
                )
              }
            />
          )}
        </div>
      )}
    </div>
  );
}