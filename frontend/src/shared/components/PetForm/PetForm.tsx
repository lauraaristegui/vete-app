import { useState } from "react";

import Button from "../../../design-system/atoms/Button/Button";
import Input from "../../../design-system/atoms/Input/Input";
import { Select } from "../../../design-system/molecules/Select/Select";

import type { PetSpecies } from "../../types/client";

import {
  isValidName,
  onlyLetters,
  onlyNumbers,
} from "../../utils/formValidation";

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
  initialData?: PetFormData;
};

export function PetForm({
  onSubmit,
  submitLabel = "Agregar mascota",
  initialData,
}: PetFormProps) {
  const [name, setName] = useState(
    initialData?.name ?? "",
  );

  const [species, setSpecies] = useState<PetSpecies>(
    initialData?.species ?? "dog",
  );

  const [breed, setBreed] = useState(
    initialData?.breed ?? "",
  );

  const [age, setAge] = useState(
    initialData?.age
      ? onlyNumbers(initialData.age).slice(0, 2)
      : "",
  );

  const [touched, setTouched] = useState({
    name: false,
  });

  const markAsTouched = (
    field: keyof typeof touched,
  ) => {
    setTouched((current) => ({
      ...current,
      [field]: true,
    }));
  };

  const canSubmit = isValidName(name);

  const handleSubmit = () => {
    if (!canSubmit) return;

    onSubmit({
      name: name.trim(),
      species,
      breed: breed.trim(),
      age,
    });
  };

  return (
    <div className="pet-form">
      <div className="pet-form__header">
        <div className="pet-form__icon">
          🐾
        </div>

        <div>
          <h2>Datos de la mascota</h2>

          <p>
            Completá la información de la mascota.
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
            setName(
              onlyLetters(event.target.value),
            )
          }
          onBlur={() =>
            markAsTouched("name")
          }
          error={
            touched.name && !isValidName(name)
              ? "Ingresá un nombre de al menos 3 letras."
              : undefined
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
          <option value="dog">
            Perro
          </option>

          <option value="cat">
            Gato
          </option>

          <option value="rabbit">
            Conejo
          </option>
        </Select>

        <div className="pet-form__field">
          <label htmlFor="pet-breed">
            Raza
          </label>

          <Input
            id="pet-breed"
            value={breed}
            onChange={(event) =>
              setBreed(
                onlyLetters(event.target.value),
              )
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
              setAge(
                onlyNumbers(
                  event.target.value,
                ).slice(0, 2),
              )
            }
            inputMode="numeric"
            placeholder="Ej. 2"
            suffix="años"
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