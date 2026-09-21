import { createBrowserRouter } from "react-router";
import { AppLayout } from "../layout/AppLayout";
import { ReceptionPage } from "../../features/ReceptionPage/ReceptionPage";
import { AgendaPage } from "../../features/AgendaPage/AgendaPage";
import { NewAppointmentPage } from "../../features/NewAppointmentPage/NewAppointmentPage";
import { NewClientPage } from "../../features/NewClientPage/NewClientPage";
import { ClientDetailPage } from "../../features/ClientDetailPage/ClientDetailPage";
import { ClientsPage } from "../../features/ClientsPage/ClientsPage";
import { EditClientPage } from "../../features/EditClientPage/EditClientPage";
import { AddPetPage } from "../../features/AddPetPage/AddPetPage";
import { ClinicalHistoryPage } from "../../features/ClinicalHistoryPage/ClinicalHistoryPage";
import { ClinicalHistoryDetailPage } from "../../features/ClinicalHistoryDetailPage/ClinicalHistoryDetailPage";
import { NewConsultationPage } from "../../features/NewConsultationPage/NewConsultationPage";
import { EditPetPage } from "../../features/EditPetPage/EditPetPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <ReceptionPage />,
      },
      {
        path: "agenda",
        element: <AgendaPage />,
      },
      {
        path: "agenda/nuevo-turno",
        element: <NewAppointmentPage />,
      },
      {
        path: "clientes",
        element: <ClientsPage />,
      },
      {
        path: "clientes/:clientId",
        element: <ClientDetailPage />,
      },
      {
        path: "/clientes/:clientId/editar",
        element: <EditClientPage />,
      },
      {
        path: "clientes/nuevo",
        element: <NewClientPage />,
      },
      {
        path: "/clientes/:clientId/mascotas/nueva",
        element: <AddPetPage />,
      },
      {
        path: "/clientes/:clientId/mascotas/:petId/editar",
        element: <EditPetPage />,
      },
      {
        path: "/historia-clinica",
        element: <ClinicalHistoryPage />,
      },
      {
        path: "/historia-clinica/:petId",
        element: <ClinicalHistoryDetailPage />,
      },
      {
        path: "/historia-clinica/:petId/nueva-consulta",
        element: <NewConsultationPage />,
      },
    ],
  },
]);
