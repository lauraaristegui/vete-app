import "./PetCard.css";
import dogImage from "../../../assets/golden-retriever.png";
import catImage from "../../../assets/cat.png";
import rabbitImage from "../../../assets/rabbit.png";

type PetSpecies = "dog" | "cat" | "rabbit";

type PetCardProps = {
  petName: string;
  petInfo: string;
  ownerName: string;
  species: PetSpecies;
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
}: PetCardProps) {
  return (
    <div className="pet-card">
      <div className="pet-card__header">
        <div className="pet-card__avatar">
          <img src={petImages[species]} alt="" />
        </div>
        <div>
          <h3>{petName}</h3>
          <span>{petInfo}</span>
        </div>
      </div>

      <div className="pet-card__owner">
        <span>Responsable</span>
        <span>{ownerName}</span>
      </div>

      <button className="pet-card__history">Ver historia clínica →</button>
    </div>
  );
}
