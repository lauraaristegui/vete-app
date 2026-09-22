import type { Pet } from "../../shared/types/client";

import { API_URL } from "../../shared/config/api.config";

export async function updatePet(
  petId: string,
  petData: Omit<Pet, "id">,
): Promise<Pet> {
  const response = await fetch(`${API_URL}/pets/${petId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(petData),
  });

  if (!response.ok) {
    throw new Error("Error al actualizar la mascota");
  }

  return response.json();
}