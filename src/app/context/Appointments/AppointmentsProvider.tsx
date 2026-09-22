import { useEffect, useState, type ReactNode } from "react";

import { AppointmentsContext } from "./AppointmentsContext";

import type {
  Appointment,
  AppointmentStatus,
} from "../../../shared/types/appointment";

import {
  getAppointments,
  updateAppointmentStatus,
} from "../../../features/services/appointment.service";

type AppointmentsProviderProps = {
  children: ReactNode;
};

export function AppointmentsProvider({ children }: AppointmentsProviderProps) {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    const loadAppointments = async () => {
      try {
        const appointmentsData = await getAppointments();

        setAppointments(appointmentsData);
      } catch (error) {
        console.error("Error cargando turnos:", error);
      }
    };

    loadAppointments();
  }, []);

  const changeStatus = async (id: string, newStatus: AppointmentStatus) => {
    try {
      const updatedAppointment = await updateAppointmentStatus(id, newStatus);

      setAppointments((currentAppointments) =>
        currentAppointments.map((appointment) =>
          appointment.id === id ? updatedAppointment : appointment,
        ),
      );
    } catch (error) {
      console.error("Error actualizando estado del turno:", error);
    }
  };

  const addAppointment = (appointment: Appointment) => {
    setAppointments((currentAppointments) => [
      ...currentAppointments,
      appointment,
    ]);
  };

  return (
    <AppointmentsContext.Provider
      value={{
        appointments,
        changeStatus,
        addAppointment,
      }}
    >
      {children}
    </AppointmentsContext.Provider>
  );
}
