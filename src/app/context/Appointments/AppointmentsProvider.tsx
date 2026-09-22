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
  const [isLoading, setIsLoading] = useState(true);
  const [updatingAppointmentId, setUpdatingAppointmentId] = useState<
    string | null
  >(null);

  useEffect(() => {
    const loadAppointments = async () => {
      try {
        setIsLoading(true);

        const appointmentsData = await getAppointments();

        setAppointments(appointmentsData);
      } catch (error) {
        console.error("Error cargando turnos:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadAppointments();
  }, []);

  const changeStatus = async (id: string, newStatus: AppointmentStatus) => {
    if (updatingAppointmentId === id) return;

    try {
      setUpdatingAppointmentId(id);

      const updatedAppointment = await updateAppointmentStatus(id, newStatus);

      setAppointments((currentAppointments) =>
        currentAppointments.map((appointment) =>
          appointment.id === id ? updatedAppointment : appointment,
        ),
      );
    } catch (error) {
      console.error("Error actualizando estado del turno:", error);
    } finally {
      setUpdatingAppointmentId(null);
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
        isLoading,
        updatingAppointmentId,
        changeStatus,
        addAppointment,
      }}
    >
      {children}
    </AppointmentsContext.Provider>
  );
}
