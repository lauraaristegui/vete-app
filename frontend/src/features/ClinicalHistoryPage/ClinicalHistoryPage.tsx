import { useState } from "react";
import { useNavigate } from "react-router";

import { useClients } from "../../app/context/clients/useClients";

import Input from "../../design-system/atoms/Input/Input";
import { PageHeader } from "../../design-system/molecules/PageHeader/PageHeader";


import { normalizeText } from "../../shared/utils/normalizeText";

import "./ClinicalHistoryPage.css";
import { PetCard } from "../../design-system/molecules/PetCard/PetCard";

export function ClinicalHistoryPage() {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();
  const { clients } = useClients();

  const normalizedSearch = normalizeText(search);

  const results = clients.flatMap((client) =>
    client.pets
      .filter((pet) => {
        if (!normalizedSearch) {
          return false;
        }

        return (
          normalizeText(pet.name).includes(normalizedSearch) ||
          normalizeText(client.name).includes(normalizedSearch) ||
          normalizeText(client.dni).includes(normalizedSearch)
        );
      })
      .map((pet) => ({
        pet,
        client,
      })),
  );

  return (
    <div className="clinical-history-page">
      <PageHeader
        title="Historia clínica"
        description="Buscá un paciente para consultar su historia clínica."
      />

      <section className="clinical-history-page__search">
        <label
          className="clinical-history-page__search-label"
          htmlFor="clinical-history-search"
        >
          Paciente, responsable o DNI
        </label>

        <Input
          placeholder="Ej: Luna, Rosario Gomez o 36.547.658"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </section>

      {search.trim() !== "" && (
        <section className="clinical-history-page__results">
          <h2>Resultados de búsqueda</h2>

          {results.map(({ pet, client }) => (
            <PetCard
              key={pet.id}
              variant="search"
              petName={pet.name}
              petInfo={[pet.breed, pet.age].filter(Boolean).join(" • ")}
              ownerName={client.name}
              species={pet.species}
              onViewHistory={() =>
                navigate(`/historia-clinica/${pet.id}`)
              }
            />
          ))}
        </section>
      )}
    </div>
  );
}