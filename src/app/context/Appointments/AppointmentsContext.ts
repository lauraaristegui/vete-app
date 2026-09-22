import { createContext } from "react";
import type {
  Appointment,
  AppointmentStatus,
} from "../../../shared/types/appointment";

export type AppointmentsContextType = {
  appointments: Appointment[];
  isLoading: boolean;
  updatingAppointmentId: string | null;
  changeStatus: (
    id: string,
    newStatus: AppointmentStatus,
  ) => Promise<void>;
  addAppointment: (appointment: Appointment) => void;
};

export const AppointmentsContext = createContext<
  AppointmentsContextType | undefined
>(undefined);