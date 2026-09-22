import { useState } from "react";

import Button from "../../../design-system/atoms/Button/Button";
import Input from "../../../design-system/atoms/Input/Input";

import "./VeterinarianForm.css";

type VeterinarianFormProps = {
  loading?: boolean;
  onSubmit: (name: string) => void;
  onCancel: () => void;
};

export function VeterinarianForm({
  loading = false,
  onSubmit,
  onCancel,
}: VeterinarianFormProps) {
  const [name, setName] = useState("");
  const [touched, setTouched] = useState(false);

  const normalizedName = name.trim();

  const error =
    touched && normalizedName.length < 3
      ? "Ingresá el nombre del veterinario"
      : undefined;

  const canSubmit = normalizedName.length >= 3;

  const handleSubmit = () => {
    setTouched(true);

    if (!canSubmit || loading) return;

    onSubmit(normalizedName);
  };

  return (
    <div className="veterinarian-form">
      <div>
        <label htmlFor="veterinarian-name">
          Nombre del veterinario
        </label>

        <Input
          id="veterinarian-name"
          value={name}
          placeholder="Ej. Dra. Agostina Pérez"
          error={error}
          disabled={loading}
          onChange={(event) => setName(event.target.value)}
          onBlur={() => setTouched(true)}
        />
      </div>

      <div className="veterinarian-form__actions">
        <Button
          type="button"
          variant="neutral"
          disabled={loading}
          onClick={onCancel}
        >
          Cancelar
        </Button>

        <Button
          type="button"
          variant="primary"
          disabled={!canSubmit}
          loading={loading}
          loadingText="Guardando..."
          onClick={handleSubmit}
        >
          Guardar veterinario
        </Button>
      </div>
    </div>
  );
}