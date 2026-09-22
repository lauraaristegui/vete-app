import { useEffect, useState, type ReactNode } from "react";

import { ClientsContext, type ClientsContextType } from "./ClientsContext";

import type { Client, Pet } from "../../../shared/types/client";
import { getClients } from "../../../features/services/client.service";

type ClientsProviderProps = {
  children: ReactNode;
};

export function ClientsProvider({ children }: ClientsProviderProps) {
  const [clients, setClients] = useState<Client[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadClients = async () => {
      try {
        setIsLoading(true);

        const clientsData = await getClients();
        setClients(clientsData);
      } catch (error) {
        console.error("Error obteniendo clientes:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadClients();
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
    isLoading,
    addClient,
    updateClient,
    updatePet,
    addPet,
  };

  return (
    <ClientsContext.Provider value={value}>{children}</ClientsContext.Provider>
  );
}
