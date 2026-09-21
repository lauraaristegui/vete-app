import { useContext } from "react";

import { ConsultationsContext } from "./ConsultationsContext";

export function useConsultations() {
  const context = useContext(ConsultationsContext);

  if (!context) {
    throw new Error(
      "useConsultations debe usarse dentro de ConsultationsProvider",
    );
  }

  return context;
}