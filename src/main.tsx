import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";

import { router } from "./app/router/router";
import "./design-system/index.css";

import { AppointmentsProvider } from "./app/context/Appointments/AppointmentsProvider";
import { ClientsProvider } from "./app/context/clients/ClientsProvider";
import { ConsultationsProvider } from "./app/context/consultations/ConsultationsProvider";
import { VeterinariansProvider } from "./app/context/Veterinarians/VeterinariansProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppointmentsProvider>
      <ClientsProvider>
        <ConsultationsProvider>
          <VeterinariansProvider>
            <RouterProvider router={router} />
          </VeterinariansProvider>
        </ConsultationsProvider>
      </ClientsProvider>
    </AppointmentsProvider>
  </StrictMode>,
);