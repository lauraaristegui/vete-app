import { useState } from "react";

import type { Consultation } from "../../../shared/types/consultation";
import { ConsultationsContext } from "./ConsultationsContext";

type ConsultationsProviderProps = {
  children: React.ReactNode;
};

const initialConsultations: Consultation[] = [
  {
    id: "1",
    petId: "1",
    date: "2026-09-18",
    reason: "Control general",
    diagnosis: "Paciente en buen estado general.",
    treatment: "",
    observations: "",
  },
  {
    id: "2",
    petId: "1",
    date: "2026-08-04",
    reason: "Control dermatológico",
    diagnosis: "Dermatitis leve.",
    treatment: "",
    observations: "",
  },
];

export function ConsultationsProvider({
  children,
}: ConsultationsProviderProps) {
  const [consultations, setConsultations] =
    useState<Consultation[]>(initialConsultations);

  const addConsultation = (
    consultation: Consultation,
  ) => {
    setConsultations((currentConsultations) => [
      ...currentConsultations,
      consultation,
    ]);
  };

  return (
    <ConsultationsContext.Provider
      value={{
        consultations,
        addConsultation,
      }}
    >
      {children}
    </ConsultationsContext.Provider>
  );
}