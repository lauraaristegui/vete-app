import { useState } from "react";
import { UserRound } from "lucide-react";

import "./OwnerForm.css";

import Input from "../../../design-system/atoms/Input/Input";
import Button from "../../../design-system/atoms/Button/Button";

import {
  formatDni,
  isValidDni,
  isValidEmail,
  isValidName,
  onlyLetters,
  onlyNumbers,
} from "../../utils/formValidation";

export type OwnerFormData = {
  name: string;
  dni: string;
  phone: string;
  email: string;
  address: string;
};

type OwnerFormProps = {
  initialData?: OwnerFormData;
  submitLabel?: string;
  onSubmit: (data: OwnerFormData) => void;
};

export function OwnerForm({
  initialData,
  submitLabel = "Guardar cambios",
  onSubmit,
}: OwnerFormProps) {
  const [name, setName] = useState(
    initialData?.name ?? "",
  );

  const [dni, setDni] = useState(
    initialData?.dni
      ? formatDni(initialData.dni)
      : "",
  );

  const [phone, setPhone] = useState(
    initialData?.phone ?? "",
  );

  const [email, setEmail] = useState(
    initialData?.email ?? "",
  );

  const [address, setAddress] = useState(
    initialData?.address ?? "",
  );

  const [touched, setTouched] = useState({
    name: false,
    dni: false,
    email: false,
  });

  const markAsTouched = (
    field: keyof typeof touched,
  ) => {
    setTouched((current) => ({
      ...current,
      [field]: true,
    }));
  };

  const canSubmit =
    isValidName(name) &&
    isValidDni(dni) &&
    isValidEmail(email);

  const handleSubmit = () => {
    if (!canSubmit) return;

    onSubmit({
      name: name.trim(),
      dni,
      phone,
      email: email.trim(),
      address: address.trim(),
    });
  };

  return (
    <div className="owner-form">
      <div className="owner-form__header">
        <div className="owner-form__icon">
          <UserRound
            size={18}
            strokeWidth={1.8}
          />
        </div>

        <div>
          <h2>Datos del responsable</h2>

          <p>
            Actualizá la información del responsable.
          </p>
        </div>
      </div>

      <div className="owner-form__field">
        <label htmlFor="owner-name">
          Nombre y apellido *
        </label>

        <Input
          id="owner-name"
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
          placeholder="Ej. María Laura Aristegui"
        />
      </div>

      <div className="owner-form__row">
        <div className="owner-form__field">
          <label htmlFor="owner-dni">
            DNI *
          </label>

          <Input
            id="owner-dni"
            value={dni}
            onChange={(event) =>
              setDni(
                formatDni(event.target.value),
              )
            }
            onBlur={() =>
              markAsTouched("dni")
            }
            error={
              touched.dni && !isValidDni(dni)
                ? "Ingresá un DNI válido."
                : undefined
            }
            placeholder="Ej. 31.538.765"
          />
        </div>

        <div className="owner-form__field">
          <label htmlFor="owner-phone">
            Teléfono
          </label>

          <Input
            id="owner-phone"
            value={phone}
            onChange={(event) =>
              setPhone(
                onlyNumbers(event.target.value),
              )
            }
            inputMode="numeric"
            placeholder="Ej. 1123456789"
          />
        </div>

        <div className="owner-form__field">
          <label htmlFor="owner-email">
            Email
          </label>

          <Input
            id="owner-email"
            value={email}
            onChange={(event) =>
              setEmail(event.target.value)
            }
            onBlur={() =>
              markAsTouched("email")
            }
            error={
              touched.email &&
              !isValidEmail(email)
                ? "Ingresá un email válido."
                : undefined
            }
            placeholder="Ej. laura@email.com"
          />
        </div>

        <div className="owner-form__field">
          <label htmlFor="owner-address">
            Dirección
          </label>

          <Input
            id="owner-address"
            value={address}
            onChange={(event) =>
              setAddress(event.target.value)
            }
            placeholder="Ej. Av. San Martín 123"
          />
        </div>
      </div>

      <div className="owner-form__actions">
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