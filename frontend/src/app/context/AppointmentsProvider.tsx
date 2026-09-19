import { useState, type ReactNode } from "react";

import { AppointmentsContext } from "./AppointmentsContext";

import type {
  Appointment,
  AppointmentStatus,
} from "../../shared/types/appointment";

import { appointments as initialAppointments } from "../../shared/mocks/appointments";

type AppointmentsProviderProps = {
  children: ReactNode;
};

export function AppointmentsProvider({
  children,
}: AppointmentsProviderProps) {
  const [appointments, setAppointments] =
    useState<Appointment[]>(initialAppointments);

  const changeStatus = (
    id: string,
    newStatus: AppointmentStatus
  ) => {
    setAppointments((currentAppointments) =>
      currentAppointments.map((appointment) =>
        appointment.id === id
          ? { ...appointment, status: newStatus }
          : appointment
      )
    );
  };

  return (
    <AppointmentsContext.Provider
      value={{
        appointments,
        changeStatus,
      }}
    >
      {children}
    </AppointmentsContext.Provider>
  );
}