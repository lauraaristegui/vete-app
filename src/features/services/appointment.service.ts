import type {
  Appointment,
  AppointmentStatus,
} from "../../shared/types/appointment";
import { API_URL } from "../../shared/config/api.config";

export type CreateAppointmentData = {
  petId: string;
  date: string;
  time: string;
  veterinarianId: string;
};

export async function getAppointments(): Promise<Appointment[]> {
  const response = await fetch(`${API_URL}/appointments`);

  if (!response.ok) {
    throw new Error("Error al obtener los turnos");
  }

  return response.json();
}

export async function createAppointment(
  appointmentData: CreateAppointmentData,
): Promise<Appointment> {
  const response = await fetch(`${API_URL}/appointments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(appointmentData),
  });

  if (!response.ok) {
    throw new Error("Error al crear el turno");
  }

  return response.json();
}

export async function updateAppointmentStatus(
  appointmentId: string,
  status: AppointmentStatus,
): Promise<Appointment> {
  const response = await fetch(
    `${API_URL}/appointments/${appointmentId}/status`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status }),
    },
  );

  if (!response.ok) {
    throw new Error("Error al actualizar el estado del turno");
  }

  return response.json();
}