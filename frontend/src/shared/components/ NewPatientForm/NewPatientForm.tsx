import { useState } from "react";

import "./NewPatientForm.css";

import Button from "../../../design-system/atoms/Button/Button";
import Input from "../../../design-system/atoms/Input/Input";
import { Select } from "../../../design-system/molecules/Select/Select";

import {
  formatDni,
  isValidDni,
  isValidEmail,
  isValidName,
  onlyLetters,
  onlyNumbers,
} from "../../utils/formValidation";

export type PetSpecies = "dog" | "cat" | "rabbit";

export type NewPatientData = {
  petId?: string;

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

  const [touched, setTouched] = useState({
    ownerName: false,
    dni: false,
    email: false,
    petName: false,
  });

  const markAsTouched = (field: keyof typeof touched) => {
    setTouched((current) => ({
      ...current,
      [field]: true,
    }));
  };
  const canContinue =
    isValidName(ownerName) &&
    isValidDni(dni) &&
    isValidEmail(email) &&
    isValidName(petName);

  const handleContinue = () => {
    if (!canContinue) return;

    const patient: NewPatientData = {
      ownerName: ownerName.trim(),
      dni,
      phone,
      email: email.trim(),
      address: address.trim(),

      petName: petName.trim(),
      species,
      breed: breed.trim(),
      age,
    };

    onContinue(patient);
  };

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
            onChange={(event) => setOwnerName(onlyLetters(event.target.value))}
            onBlur={() => markAsTouched("ownerName")}
            error={
              touched.ownerName && !isValidName(ownerName)
                ? "Ingresá un nombre de al menos 3 letras."
                : undefined
            }
            placeholder="Ej. María Laura Aristegui"
          />
        </div>

        <div className="new-patient-form__row">
          <div className="new-patient-form__field">
            <label htmlFor="owner-dni">DNI *</label>

            <Input
              id="owner-dni"
              value={dni}
              onChange={(event) => setDni(formatDni(event.target.value))}
              onBlur={() => markAsTouched("dni")}
              error={
                touched.dni && !isValidDni(dni)
                  ? "Ingresá un DNI válido."
                  : undefined
              }
              placeholder="Ej. 31.538.765"
            />
          </div>

          <div className="new-patient-form__field">
            <label htmlFor="owner-email">Email</label>

            <Input
              id="owner-email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              onBlur={() => markAsTouched("email")}
              error={
                touched.email && !isValidEmail(email)
                  ? "Ingresá un email válido."
                  : undefined
              }
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
              onChange={(event) => setPhone(onlyNumbers(event.target.value))}
              placeholder="Ej. 1123456789"
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
            onChange={(event) => setPetName(onlyLetters(event.target.value))}
            onBlur={() => markAsTouched("petName")}
            error={
              touched.petName && !isValidName(petName)
                ? "Ingresá un nombre de al menos 3 letras."
                : undefined
            }
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
              onChange={(event) => setBreed(onlyLetters(event.target.value))}
              placeholder="Ej. Golden Retriever"
            />
          </div>

          <div className="new-patient-form__field">
            <label htmlFor="pet-age">Edad</label>
            <Input
              id="pet-age"
              value={age}
              onChange={(event) =>
                setAge(onlyNumbers(event.target.value).slice(0, 2))
              }
              inputMode="numeric"
              placeholder="Ej. 2"
              suffix="años"
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
