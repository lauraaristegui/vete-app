import "./PetCard.css";

import dogImage from "../../../assets/golden-retriever.png";
import catImage from "../../../assets/cat.png";
import rabbitImage from "../../../assets/rabbit.png";

import { ActionMenu } from "../../molecules/ActionMenu/ActionMenu";

type PetSpecies = "dog" | "cat" | "rabbit";

type PetCardProps = {
  petName: string;
  petInfo: string;
  ownerName: string;
  species: PetSpecies;
  variant?: "default" | "compact" | "search";
  onViewHistory?: () => void;
  onNewAppointment?: () => void;
  onEdit?: () => void;
};

const petImages = {
  dog: dogImage,
  cat: catImage,
  rabbit: rabbitImage,
};

export function PetCard({
  petName,
  petInfo,
  ownerName,
  species,
  onViewHistory,
  onNewAppointment,
  onEdit,
  variant = "default",
}: PetCardProps) {
  const isCompact = variant === "compact";
  const isSearch = variant === "search";

  const options = [
    ...(onEdit
      ? [
          {
            label: "Editar mascota",
            value: "edit",
          },
        ]
      : []),

    ...(onViewHistory
      ? [
          {
            label: "Ver historia clínica",
            value: "history",
          },
        ]
      : []),

    ...(onNewAppointment
      ? [
          {
            label: "Nuevo turno",
            value: "appointment",
          },
        ]
      : []),
  ];

  const handleAction = (value: string) => {
    if (value === "edit") {
      onEdit?.();
    }

    if (value === "history") {
      onViewHistory?.();
    }

    if (value === "appointment") {
      onNewAppointment?.();
    }
  };

  return (
    <div
      className={`pet-card ${
        isCompact ? "pet-card--compact" : isSearch ? "pet-card--search" : ""
      }`}
    >
      <div className="pet-card__main">
        <div className="pet-card__header">
          <div className="pet-card__avatar">
            <img src={petImages[species]} alt="" />
          </div>

          <div className="pet-card__pet-info">
            <h3>{petName}</h3>
            <span>{petInfo}</span>

            {isSearch && (
              <span className="pet-card__search-owner">
                Responsable: {ownerName}
              </span>
            )}
          </div>
        </div>

        {!isCompact && !isSearch && (
          <div className="pet-card__owner">
            <span>Responsable</span>
            <span>{ownerName}</span>
          </div>
        )}
      </div>

      {options.length > 0 && (
        <ActionMenu
          label={`Acciones de ${petName}`}
          options={options}
          onSelect={handleAction}
          iconOnly
        />
      )}
    </div>
  );
}
