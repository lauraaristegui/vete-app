import { useState, type ReactNode } from "react";

import { ClientsContext, type ClientsContextType } from "./ClientsContext";

import type { Client, Pet } from "../../../shared/types/client";

type ClientsProviderProps = {
  children: ReactNode;
};

const initialClients: Client[] = [
  {
    id: "1",
    name: "Rosario Gomez",
    dni: "36.547.658",
    phone: "2449 123456",
    email: "laura@email.com",
    address: "",
    pets: [
      {
        id: "1",
        name: "Luna",
        breed: "Caniche",
        age: "2 años",
        species: "dog",
      },
      {
        id: "2",
        name: "Mía",
        breed: "Dálmata",
        age: "2 años",
        species: "dog",
      },
    ],
  },
];

export function ClientsProvider({ children }: ClientsProviderProps) {
  const [clients, setClients] = useState<Client[]>(initialClients);

  const addClient = (client: Client) => {
    setClients((currentClients) => [...currentClients, client]);
  };

  const addPet = (clientId: string, pet: Pet) => {
    setClients((currentClients) =>
      currentClients.map((client) =>
        client.id === clientId
          ? {
              ...client,
              pets: [...client.pets, pet],
            }
          : client,
      ),
    );
  };

  const updateClient = (clientId: string, data: Partial<Client>) => {
    setClients((currentClients) =>
      currentClients.map((client) =>
        client.id === clientId ? { ...client, ...data } : client,
      ),
    );
  };

  const value: ClientsContextType = {
    clients,
    addClient,
    updateClient,
    addPet,
  };

  return (
    <ClientsContext.Provider value={value}>{children}</ClientsContext.Provider>
  );
}
