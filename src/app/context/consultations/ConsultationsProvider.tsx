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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadConsultations = async () => {
      try {
        setIsLoading(true);

        const consultationsData = await getConsultations();
        setConsultations(consultationsData);
      } catch (error) {
        console.error("Error cargando consultas:", error);
      } finally {
        setIsLoading(false);
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
        isLoading,
        addConsultation,
      }}
    >
      {children}
    </ConsultationsContext.Provider>
  );
}
