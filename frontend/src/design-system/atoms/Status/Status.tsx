import type { AppointmentStatus } from '../../../shared/types/appointment';
import './Status.css'


const statusLabels: Record<AppointmentStatus, string> = {
  pending: "Pendiente",
  received: "Recepcionado",
  "in-consultation": "En consulta",
  completed: "Atendido",
  cancelled: "Cancelado",
  "no-show": "Ausente",
};
export function Status({ status }: { status: AppointmentStatus }) {
  return (
    <span className={`status status--${status}`}>
      {statusLabels[status]}
    </span>
  )
}