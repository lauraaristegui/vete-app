import { createBrowserRouter } from "react-router";
import { AppLayout } from "../layout/AppLayout";
import { ReceptionPage } from "../../features/ReceptionPage/ReceptionPage";
import { AgendaPage } from "../../features/AgendaPage/AgendaPage";


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
        path: "clientes",
        element: <h1>Clientes</h1>,
      },
      {
        path: "historia-clinica",
        element: <h1>Historia clínica</h1>,
      },
    ],
  },
]);
