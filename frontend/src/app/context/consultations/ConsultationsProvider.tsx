import { useEffect, useState } from "react";

import type { Consultation } from "../../../shared/types/consultation";
import { getConsultations } from "../../../features/services/consultation.service";

import { ConsultationsContext } from "./ConsultationsContext";

type ConsultationsProviderProps = {
  children: React.ReactNode;
};

export function ConsultationsProvider({
  children,
}: ConsultationsProviderProps) {
  const [consultations, setConsultations] = useState<Consultation[]>([]);

  useEffect(() => {
    const loadConsultations = async () => {
      try {
        const consultationsData = await getConsultations();

        setConsultations(consultationsData);
      } catch (error) {
        console.error("Error cargando consultas:", error);
      }
    };

    loadConsultations();
  }, []);

  const addConsultation = (consultation: Consultation) => {
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