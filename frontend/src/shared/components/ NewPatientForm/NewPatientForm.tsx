import { useState } from "react";

import "./NewPatientForm.css";
import Button from "../../../design-system/atoms/Button/Button";
import Input from "../../../design-system/atoms/Input/Input";
import { Select } from "../../../design-system/molecules/Select/Select";

export type PetSpecies = "dog" | "cat" | "rabbit";

export type NewPatientData = {
  ownerName: string;
  dni: string;
  phone: string;
  email: string;
  address: string;

  petName: string;
  species: PetSpecies;
  breed: string;
  age: string;
};

type NewPatientFormProps = {
  onContinue: (patient: NewPatientData) => void;
  submitLabel?: string;
};

export function NewPatientForm({
  onContinue,
  submitLabel = "Continuar",
}: NewPatientFormProps) {
  const [ownerName, setOwnerName] = useState("");
  const [dni, setDni] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [petName, setPetName] = useState("");
  const [species, setSpecies] = useState<PetSpecies>("dog");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");

  const handleContinue = () => {
    const patient: NewPatientData = {
      ownerName,
      dni,
      phone,
      petName,
      email,
      address,
      species,
      breed,
      age,
    };

    onContinue(patient);
  };

  const canContinue =
    ownerName.trim() !== "" && dni.trim() !== "" && petName.trim() !== "";

  return (
    <div className="new-patient-form">
      <section className="new-patient-form__section">
        <div className="new-patient-form__section-header">
          <div className="new-patient-form__section-icon">👤</div>

          <div>
            <h2>Datos del responsable</h2>
            <p>
              Completá la información de la persona responsable de la mascota.
            </p>
          </div>
        </div>

        <div className="new-patient-form__field">
          <label htmlFor="owner-name">Nombre y apellido *</label>

          <Input
            id="owner-name"
            value={ownerName}
            onChange={(event) => setOwnerName(event.target.value)}
            placeholder="Ej. María Laura Aristegui"
          />
        </div>

        <div className="new-patient-form__row">
          <div className="new-patient-form__field">
            <label htmlFor="owner-dni">DNI *</label>

            <Input
              id="owner-dni"
              value={dni}
              onChange={(event) => setDni(event.target.value)}
              placeholder="Ej. 31538765"
            />
          </div>

          <div className="new-patient-form__field">
            <label htmlFor="owner-email">Email</label>

            <Input
              id="owner-email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Ej. laura@email.com"
            />
          </div>

          <div className="new-patient-form__field">
            <label htmlFor="owner-address">Dirección</label>

            <Input
              id="owner-address"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              placeholder="Ej. Av. San Martín 123"
            />
          </div>

          <div className="new-patient-form__field">
            <label htmlFor="owner-phone">Teléfono</label>

            <Input
              id="owner-phone"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              placeholder="Ej. 11 1234 5678"
            />
          </div>
        </div>
      </section>

      <section className="new-patient-form__section">
        <div className="new-patient-form__section-header">
          <div className="new-patient-form__section-icon new-patient-form__section-icon--pet">
            🐾
          </div>

          <div>
            <h2>Datos de la mascota</h2>
            <p>Completá la información de la mascota.</p>
          </div>
        </div>

        <div className="new-patient-form__field">
          <label htmlFor="pet-name">Nombre *</label>

          <Input
            id="pet-name"
            value={petName}
            onChange={(event) => setPetName(event.target.value)}
            placeholder="Ej. Luna"
          />
        </div>

        <div className="new-patient-form__pet-row">
          <Select
            label="Especie *"
            value={species}
            onChange={(event) => setSpecies(event.target.value as PetSpecies)}
          >
            <option value="dog">Perro</option>
            <option value="cat">Gato</option>
            <option value="rabbit">Conejo</option>
          </Select>

          <div className="new-patient-form__field">
            <label htmlFor="pet-breed">Raza</label>

            <Input
              id="pet-breed"
              value={breed}
              onChange={(event) => setBreed(event.target.value)}
              placeholder="Ej. Golden Retriever"
            />
          </div>

          <div className="new-patient-form__field">
            <label htmlFor="pet-age">Edad</label>

            <Input
              id="pet-age"
              value={age}
              onChange={(event) => setAge(event.target.value)}
              placeholder="Ej. 2 años"
            />
          </div>
        </div>
      </section>

      <div className="new-patient-form__actions">
        <Button
          variant="primary"
          disabled={!canContinue}
          onClick={handleContinue}
        >
          {submitLabel}
        </Button>
      </div>
    </div>
  );
}
