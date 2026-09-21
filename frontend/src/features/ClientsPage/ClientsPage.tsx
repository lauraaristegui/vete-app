import { useState } from "react";
import { useNavigate } from "react-router";

import { useClients } from "../../app/context/clients/useClients";

import Button from "../../design-system/atoms/Button/Button";
import Input from "../../design-system/atoms/Input/Input";
import { PageHeader } from "../../design-system/molecules/PageHeader/PageHeader";
import { ClientCard } from "../../design-system/organisms/ClientCard/ClientCard";

import { SearchNoResults } from "../../shared/components/SearchNoResults/SearchNoResults";
import { normalizeText } from "../../shared/utils/normalizeText";

import "./ClientsPage.css";

export function ClientsPage() {
  const navigate = useNavigate();
  const { clients } = useClients();

  const [search, setSearch] = useState("");

  const normalizedSearch = normalizeText(search);

  const filteredClients = clients.filter((client) => {
    if (!normalizedSearch) return false;

    return (
      normalizeText(client.name).includes(normalizedSearch) ||
      normalizeText(client.dni).includes(normalizedSearch) ||
      client.pets.some((pet) =>
        normalizeText(pet.name).includes(normalizedSearch),
      )
    );
  });

  return (
    <div className="clients-page">
      <header className="clients-page__header">
        <PageHeader
          title="Clientes"
          description="Gestioná responsables y sus mascotas"
        />

        <Button variant="secondary" onClick={() => navigate("/clientes/nuevo")}>
          + Nuevo cliente
        </Button>
      </header>

      <div className="clients-page__search">
        <label htmlFor="client-search">
          DNI, nombre del responsable o mascota
        </label>

        <Input
          id="client-search"
          placeholder="Buscar cliente o mascota..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      <div className="clients-page__list">
        {search.trim() !== "" && (
          <>
            {filteredClients.length === 0 ? (
              <SearchNoResults
                search={search}
                description="No encontramos ningún cliente que coincida con"
                showButton={false}
              />
            ) : (
              filteredClients.map((client) => (
                <div className="clients-page__list-item">
                  <ClientCard
                    key={client.id}
                    name={client.name}
                    dni={client.dni}
                    pets={client.pets}
                    onView={() => navigate(`/clientes/${client.id}`)}
                  />
                </div>
              ))
            )}
          </>
        )}
      </div>
    </div>
  );
}
