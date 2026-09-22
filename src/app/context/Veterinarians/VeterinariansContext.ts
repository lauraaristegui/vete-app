import { createContext } from "react";

import type { Veterinarian } from "../../../shared/types/veterinarian";

export type VeterinariansContextType = {
  veterinarians: Veterinarian[];
  isLoading: boolean;
  addVeterinarian: (name: string) => Promise<Veterinarian>;
};

export const VeterinariansContext =
  createContext<VeterinariansContextType | undefined>(undefined);