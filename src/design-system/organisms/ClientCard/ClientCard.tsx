
import Button from "../../atoms/Button/Button";
import "./ClientCard.css";

type ClientPet = {
  id: string;
  name: string;
};

type ClientCardProps = {
  name: string;
  dni: string;
  pets: ClientPet[];
  onView: () => void;
};

export function ClientCard({
  name,
  dni,
  pets,
  onView,
}: ClientCardProps) {
  return (
    <article className="client-card">
      <div className="client-card__content">
        <div className="client-card__avatar">
          <span>👤</span>
        </div>

        <div className="client-card__info">
          <h3>{name}</h3>
          <span className="client-card__dni">
            DNI {dni}
          </span>

          <div className="client-card__pets">
            <span className="client-card__pets-label">
              Mascotas
            </span>

            <div className="client-card__pet-list">
              {pets.map((pet) => (
                <span
                  key={pet.id}
                  className="client-card__pet"
                >
                  🐾 {pet.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Button variant="secondary" onClick={onView}>
        Ver cliente →
      </Button>
    </article>
  );
}