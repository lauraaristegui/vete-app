import { useEffect, useState, type ReactNode } from "react";

import { VeterinariansContext } from "./VeterinariansContext";

import type { Veterinarian } from "../../../shared/types/veterinarian";

import {
  getVeterinarians,
  createVeterinarian,
} from "../../../features/services/veterinarian.service";

type VeterinariansProviderProps = {
  children: ReactNode;
};

export function VeterinariansProvider({
  children,
}: VeterinariansProviderProps) {
  const [veterinarians, setVeterinarians] = useState<Veterinarian[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadVeterinarians = async () => {
      try {
        setIsLoading(true);

        const veterinariansData = await getVeterinarians();

        setVeterinarians(veterinariansData);
      } catch (error) {
        console.error("Error cargando veterinarios:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadVeterinarians();
  }, []);

  const addVeterinarian = async (
    name: string,
  ): Promise<Veterinarian> => {
    const createdVeterinarian = await createVeterinarian(name);

    setVeterinarians((currentVeterinarians) => [
      ...currentVeterinarians,
      createdVeterinarian,
    ]);

    return createdVeterinarian;
  };

  return (
    <VeterinariansContext.Provider
      value={{
        veterinarians,
        isLoading,
        addVeterinarian,
      }}
    >
      {children}
    </VeterinariansContext.Provider>
  );
}