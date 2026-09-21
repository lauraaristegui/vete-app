import { useContext } from "react";
import { ClientsContext } from "./ClientsContext";


 export function useClients() {
  const context = useContext(ClientsContext);

  if (!context) {
    throw new Error(
      "useClients debe usarse dentro de ClientsProvider",
    );
  }

  return context;
}
