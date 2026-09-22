import { useContext } from "react";

import { VeterinariansContext } from "./VeterinariansContext";

export function useVeterinarians() {
  const context = useContext(VeterinariansContext);

  if (!context) {
    throw new Error(
      "useVeterinarians debe usarse dentro de VeterinariansProvider",
    );
  }

  return context;
}