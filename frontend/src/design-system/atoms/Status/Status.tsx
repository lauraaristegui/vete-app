import type { AppointmentStatus } from "../../../shared/types/appointment";

import "./Status.css";

const statusLabels: Record<AppointmentStatus, string> = {
  pending: "Pendiente",
  received: "Recepcionado",
  "in-consultation": "En consulta",
  completed: "Atendido",
  cancelled: "Cancelado",
  "no-show": "Ausente",
};

type StatusProps = {
  status: AppointmentStatus;
};

export function Status({ status }: StatusProps) {
  return (
    <span className={`status status--${status}`}>
      {statusLabels[status]}
    </span>
  );
}