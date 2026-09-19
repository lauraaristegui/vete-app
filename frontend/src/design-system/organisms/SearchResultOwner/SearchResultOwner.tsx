import Button from "../../atoms/Button/Button";
import { PetCard } from "../../molecules/PetCard/PetCard";
import "./SearchResultOwner.css";


type Pet = {
  id: string;
  name: string;
  info: string;
  species: "dog" | "cat" | "rabbit";
};

type SearchResultOwnerProps = {
  name: string;
  dni: string;
  phone: string;
  email: string;
  pets: Pet[];
};

export function SearchResultOwner({
  name,
  dni,
  phone,
  email,
  pets,
}: SearchResultOwnerProps) {
  return (
    <section className="search-result-owner">
      <div className="search-result-owner__header">
        <h3>Resultado de búsqueda</h3>

        <Button variant="secondary">Editar cliente</Button>
      </div>

      <div className="search-result-owner__data">
        <strong>{name}</strong>

        <div className="search-result-owner__details">
          <div>
            <span>DNI</span>
            <span>{dni}</span>
          </div>

          <div>
            <span>Cel.</span>
            <span>{phone}</span>
          </div>

          <div>
            <span>Email</span>
            <span>{email}</span>
          </div>
        </div>
      </div>

      <div className="search-result-owner__pets-header">
        <h3>Mascota/s</h3>

        <Button variant="secondary">+ Agrega mascota</Button>
      </div>

      <div className="search-result-owner__pets">
        {pets.map((pet) => (
          <PetCard
            key={pet.id}
            petName={pet.name}
            petInfo={pet.info}
            ownerName={name}
            species={pet.species}
          />
        ))}
      </div>
    </section>
  );
}
