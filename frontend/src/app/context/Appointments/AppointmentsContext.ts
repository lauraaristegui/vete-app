import { createContext } from "react";
import type { Appointment, AppointmentStatus } from "../../../shared/types/appointment";



export type AppointmentsContextType = {
  appointments: Appointment[];
  changeStatus: (
    id: string,
    newStatus: AppointmentStatus
  ) => void;
  addAppointment: (appointment: Appointment) => void;
};

export const AppointmentsContext =
  createContext<AppointmentsContextType | undefined>(undefined);