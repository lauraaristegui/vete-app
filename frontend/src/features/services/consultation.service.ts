import type { Consultation } from "../../shared/types/consultation";

const API_URL = "http://localhost:3000";

export type CreateConsultationData = {
  petId: string;
  date: string;
  reason: string;
  diagnosis: string;
  treatment: string;
  observations: string;
};

export async function getConsultations(): Promise<Consultation[]> {
  const response = await fetch(`${API_URL}/consultations`);

  if (!response.ok) {
    throw new Error("Error al obtener las consultas");
  }

  return response.json();
}

export async function createConsultation(
  consultationData: CreateConsultationData,
): Promise<Consultation> {
  const response = await fetch(`${API_URL}/consultations`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(consultationData),
  });

  if (!response.ok) {
    throw new Error("Error al crear la consulta");
  }

  return response.json();
}