import type {
  Appointment,
  AppointmentStatus,
} from "../../../shared/types/appointment";

import { AppointmentRow } from "../AppointmentRow/AppointmentRow";

import "./AppointmentList.css";

type AppointmentListProps = {
  appointments: Appointment[];
  showActions?: boolean;
  onStatusChange?: (id: string, status: AppointmentStatus) => void;
};

export function AppointmentList({
  appointments,
  showActions = true,
  onStatusChange,
}: AppointmentListProps) {
  return (
    <div className="appointment-list">
      <div
        className={`appointment-list__header ${
          showActions
            ? "appointment-list__header--with-actions"
            : "appointment-list__header--without-actions"
        }`}
      >
        <span>Hora</span>
        <span>Paciente</span>
        <span>Responsable</span>
        <span>DNI</span>
        <span>Estado</span>

        {showActions && <span>Acciones</span>}
      </div>

      <div className="appointment-list__body">
        {appointments.map((appointment) => (
          <AppointmentRow
            key={appointment.id}
            time={appointment.time}
            petName={appointment.petName}
            species={appointment.species}
            ownerName={appointment.ownerName}
            dni={appointment.dni}
            status={appointment.status}
            showActions={showActions}
            onStatusChange={(status) =>
              onStatusChange?.(appointment.id, status)
            }
          />
        ))}
      </div>
    </div>
  );
}
