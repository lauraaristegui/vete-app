import type { Client, Pet } from "../../shared/types/client";

const API_URL = "http://localhost:3000";

export async function getClients(): Promise<Client[]> {
  const response = await fetch(`${API_URL}/clients`);

  if (!response.ok) {
    throw new Error("Error al obtener los clientes");
  }

  return response.json();
}

export async function createClient(
  clientData: Omit<Client, "id" | "pets">,
): Promise<Client> {
  const response = await fetch(`${API_URL}/clients`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(clientData),
  });

  if (!response.ok) {
    throw new Error("Error al crear el cliente");
  }

  return response.json();
}

export async function createPet(
  clientId: string,
  petData: Omit<Pet, "id">,
): Promise<Pet> {
  const response = await fetch(`${API_URL}/clients/${clientId}/pets`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(petData),
  });

  if (!response.ok) {
    throw new Error("Error al crear la mascota");
  }

  return response.json();
}

export async function updateClient(
  clientId: string,
  clientData: Partial<Omit<Client, "id" | "pets">>,
): Promise<Client> {
  const response = await fetch(`${API_URL}/clients/${clientId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(clientData),
  });

  if (!response.ok) {
    throw new Error("Error al actualizar el cliente");
  }

  return response.json();
}
