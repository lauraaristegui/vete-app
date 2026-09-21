import { PetCard } from "../../molecules/PetCard/PetCard";

import { Contact, Mail, Phone, UserRound } from "lucide-react";

import "./SearchResultOwner.css";
import { ActionMenu } from "../../molecules/ActionMenu/ActionMenu";

type Pet = {
  id: string;
  name: string;
  info: string;
  species: "dog" | "cat" | "rabbit";
};

export type SelectedPatient = {
  petName: string;
  ownerName: string;
  dni: string;
  species: "dog" | "cat" | "rabbit";
};

type SearchResultOwnerProps = {
  clientId: string;
  name: string;
  dni: string;
  phone: string;
  email: string;
  pets: Pet[];
  onEdit?: (clientId: string) => void;
  onAddPet?: (clientId: string) => void;
  onViewHistory?: (petId: string) => void;
  onNewAppointment?: (patient: SelectedPatient) => void;
};

export function SearchResultOwner({
  clientId,
  name,
  dni,
  phone,
  email,
  pets,
  onEdit,
  onAddPet,
  onViewHistory,
  onNewAppointment,
}: SearchResultOwnerProps) {
  return (
    <section className="search-result-owner">
      <h2 className="search-result-owner__title">Resultado de búsqueda</h2>

      <div className="search-result-owner__card">
        <div className="search-result-owner__header">
          <div className="search-result-owner__owner">
            <div className="search-result-owner__avatar">
              <UserRound size={20} strokeWidth={1.8} />
            </div>

            <div className="search-result-owner__data">
              <strong>{name}</strong>

              <div className="search-result-owner__details">
                <span className="search-result-owner__detail">
                  <Contact size={14} strokeWidth={1.8} />
                  {dni}
                </span>

                {phone && (
                  <span className="search-result-owner__detail">
                    <Phone size={14} strokeWidth={1.8} />
                    {phone}
                  </span>
                )}

                {email && (
                  <span className="search-result-owner__detail">
                    <Mail size={14} strokeWidth={1.8} />
                    {email}
                  </span>
                )}
              </div>
            </div>
          </div>

          <ActionMenu
            label={`Acciones de ${name}`}
            iconOnly
            options={[
              {
                label: "Editar cliente",
                value: "edit",
              },
              {
                label: "Agregar mascota",
                value: "add-pet",
              },
            ]}
            onSelect={(value) => {
              if (value === "edit") {
                onEdit?.(clientId);
              }

              if (value === "add-pet") {
                onAddPet?.(clientId);
              }
            }}
          />
        </div>

        <div className="search-result-owner__pets-section">
          <div className="search-result-owner__pets-header">
            <h3>Mascota/s</h3>
          </div>

          <div className="search-result-owner__pets">
            {pets.map((pet) => (
              <PetCard
                key={pet.id}
                petName={pet.name}
                petInfo={pet.info}
                ownerName={name}
                species={pet.species}
                variant="compact"
                onViewHistory={() => {
                  onViewHistory?.(pet.id);
                }}
                onNewAppointment={() =>
                  onNewAppointment?.({
                    petName: pet.name,
                    ownerName: name,
                    dni,
                    species: pet.species,
                  })
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
