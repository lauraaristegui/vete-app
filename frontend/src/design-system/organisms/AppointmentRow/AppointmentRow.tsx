import type { AppointmentStatus } from "../../../shared/types/appointment";
import { Status } from "../../atoms/Status/Status";
import { ActionMenu } from "../../molecules/ActionMenu/ActionMenu";
import "./AppointmentRow.css";

type AppointmentRowProps = {
  time: string;
  petName: string;
  ownerName: string;
  dni: string;
  status: AppointmentStatus;
  onStatusChange?: (status: AppointmentStatus) => void;
};

export function AppointmentRow({
  time,
  petName,
  ownerName,
  dni,
  status,
  onStatusChange,
}: AppointmentRowProps) {
  return (
    <div className="appointment-row">
      <span>{time}</span>
      <span>{petName}</span>
      <span>{ownerName}</span>
      <span>{dni}</span>

      <Status status={status} />

      <div className="appointment-row__action">
        {status === "pending" && (
          <div className="appointment-row__actions">
            <ActionMenu
              label="Elegir acción"
              options={[
                { label: "Recepcionar", value: "received" },
                { label: "Marcar como ausente", value: "no-show" },
                { label: "Cancelar turno", value: "cancelled" },
              ]}
              onSelect={(value) => onStatusChange?.(value as AppointmentStatus)}
            />
          </div>
        )}
      </div>
    </div>
  );
}
