import { useEffect, useState, type ReactNode } from "react";

import { ClientsContext, type ClientsContextType } from "./ClientsContext";

import type { Client, Pet } from "../../../shared/types/client";
import { getClients } from "../../../features/services/client.service";

type ClientsProviderProps = {
  children: ReactNode;
};

export function ClientsProvider({ children }: ClientsProviderProps) {
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    getClients()
      .then((clients) => {
        setClients(clients);
      })
      .catch((error) => {
        console.error("Error obteniendo clientes:", error);
      });
  }, []);

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

  const updatePet = (
    clientId: string,
    petId: string,
    petData: Partial<Pet>,
  ) => {
    setClients((currentClients) =>
      currentClients.map((client) =>
        client.id === clientId
          ? {
              ...client,
              pets: client.pets.map((pet) =>
                pet.id === petId ? { ...pet, ...petData } : pet,
              ),
            }
          : client,
      ),
    );
  };

  const value: ClientsContextType = {
    clients,
    addClient,
    updateClient,
    updatePet,
    addPet,
  };

  return (
    <ClientsContext.Provider value={value}>{children}</ClientsContext.Provider>
  );
}
