import { createContext } from "react";
import type { Client, Pet } from "../../../shared/types/client";

export type ClientsContextType = {
  clients: Client[];

  addClient: (client: Client) => void;

  updateClient: (
    clientId: string,
    data: Partial<Omit<Client, "id" | "pets">>,
  ) => void;

  addPet: (
    clientId: string,
    pet: Pet,
  ) => void;
};
export const ClientsContext =
  createContext<ClientsContextType | undefined>(undefined);