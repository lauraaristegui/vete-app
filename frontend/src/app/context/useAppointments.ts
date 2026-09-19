import { useContext } from "react";
import { AppointmentsContext } from "./AppointmentsContext";

export function useAppointments() {
  const context = useContext(AppointmentsContext);

  if (!context) {
    throw new Error(
      "useAppointments must be used within an AppointmentsProvider"
    );
  }

  return context;
}