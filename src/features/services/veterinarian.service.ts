import { API_URL } from "../../shared/config/api.config";
import type { Veterinarian } from "../../shared/types/veterinarian";

export async function getVeterinarians(): Promise<Veterinarian[]> {
  const response = await fetch(`${API_URL}/veterinarians`);

  if (!response.ok) {
    throw new Error("Error al obtener los veterinarios");
  }

  return response.json();
}

export async function createVeterinarian(
  name: string,
): Promise<Veterinarian> {
  const response = await fetch(`${API_URL}/veterinarians`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  });

  if (!response.ok) {
    throw new Error("Error al crear el veterinario");
  }

  return response.json();
}