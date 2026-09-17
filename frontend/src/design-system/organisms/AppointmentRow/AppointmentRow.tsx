import Button from "../../atoms/Button/Button";
import { Status, type StatusType } from "../../atoms/Status/Status";
import "./AppointmentRow.css";

type AppointmentRowProps = {
  time: string;
  petName: string;
  ownerName: string;
  dni: string;
  status: StatusType;
};

export function AppointmentRow({
  time,
  petName,
  ownerName,
  dni,
  status,
}: AppointmentRowProps) {
  return (
  <div className="appointment-row">
    <span>{time}</span>
    <span>{petName}</span>
    <span>{ownerName}</span>
    <span>{dni}</span>

    <Status status={status} />

    <div className="appointment-row__action">
      {status === 'pending' && (
        <Button variant="secondary">
          Recepcionar
        </Button>
      )}
    </div>
  </div>
)
}
