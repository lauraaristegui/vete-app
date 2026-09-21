import { useState } from "react";

import Button from "../../../design-system/atoms/Button/Button";
import Input from "../../../design-system/atoms/Input/Input";
import { Select } from "../../../design-system/molecules/Select/Select";

import type { PetSpecies } from "../../types/client";

import "./PetForm.css";

export type PetFormData = {
  name: string;
  species: PetSpecies;
  breed: string;
  age: string;
};

type PetFormProps = {
  onSubmit: (data: PetFormData) => void;
  submitLabel?: string;
};

export function PetForm({
  onSubmit,
  submitLabel = "Agregar mascota",
}: PetFormProps) {
  const [name, setName] = useState("");
  const [species, setSpecies] =
    useState<PetSpecies>("dog");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");

  const canSubmit = name.trim() !== "";

  const handleSubmit = () => {
    if (!canSubmit) return;

    onSubmit({
      name,
      species,
      breed,
      age,
    });
  };

  return (
    <div className="pet-form">
      <div className="pet-form__header">
        <div className="pet-form__icon">🐾</div>

        <div>
          <h2>Datos de la mascota</h2>
          <p>
            Completá la información de la nueva mascota.
          </p>
        </div>
      </div>

      <div className="pet-form__field">
        <label htmlFor="pet-name">
          Nombre *
        </label>

        <Input
          id="pet-name"
          value={name}
          onChange={(event) =>
            setName(event.target.value)
          }
          placeholder="Ej. Luna"
        />
      </div>

      <div className="pet-form__row">
        <Select
          label="Especie *"
          value={species}
          onChange={(event) =>
            setSpecies(
              event.target.value as PetSpecies,
            )
          }
        >
          <option value="dog">Perro</option>
          <option value="cat">Gato</option>
          <option value="rabbit">Conejo</option>
        </Select>

        <div className="pet-form__field">
          <label htmlFor="pet-breed">
            Raza
          </label>

          <Input
            id="pet-breed"
            value={breed}
            onChange={(event) =>
              setBreed(event.target.value)
            }
            placeholder="Ej. Golden Retriever"
          />
        </div>

        <div className="pet-form__field">
          <label htmlFor="pet-age">
            Edad
          </label>

          <Input
            id="pet-age"
            value={age}
            onChange={(event) =>
              setAge(event.target.value)
            }
            placeholder="Ej. 2 años"
          />
        </div>
      </div>

      <div className="pet-form__actions">
        <Button
          variant="primary"
          disabled={!canSubmit}
          onClick={handleSubmit}
        >
          {submitLabel}
        </Button>
      </div>
    </div>
  );
}