import type { PetSpecies } from "../../../shared/types/client";

import dogImage from "../../../assets/golden-retriever.png";
import catImage from "../../../assets/cat.png";
import rabbitImage from "../../../assets/rabbit.png";

import "./PatientHeader.css";

const petImages: Record<PetSpecies, string> = {
  dog: dogImage,
  cat: catImage,
  rabbit: rabbitImage,
};

type PatientHeaderProps = {
  petName: string;
  petInfo: string;
  ownerName: string;
  species: PetSpecies;
};

export function PatientHeader({
  petName,
  petInfo,
  ownerName,
  species,
}: PatientHeaderProps) {
  return (
    <div className="patient-header">
      <div className="patient-header__avatar">
        <img
          src={petImages[species]}
          alt=""
        />
      </div>

      <div className="patient-header__info">
        <h2>{petName}</h2>

        <span className="patient-header__pet-info">
          {petInfo}
        </span>

        <span className="patient-header__owner">
          Responsable: {ownerName}
        </span>
      </div>
    </div>
  );
}