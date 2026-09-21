import { createContext } from "react";

import type { Consultation } from "../../../shared/types/consultation";

export type ConsultationsContextType = {
  consultations: Consultation[];
  addConsultation: (consultation: Consultation) => void;
};

export const ConsultationsContext =
  createContext<ConsultationsContextType | undefined>(undefined);