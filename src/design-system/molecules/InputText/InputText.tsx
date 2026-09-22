import type { InputHTMLAttributes } from "react";

import "./InputText.css";
import Input from "../../atoms/Input/Input";

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export function InputText({
  label,
  id,
  error,
  ...inputProps
}: InputTextProps) {
  return (
    <div className="input-text">
      <label
        className="input-text__label"
        htmlFor={id}
      >
        {label}
      </label>

      <Input
        id={id}
        error={error}
        {...inputProps}
      />
    </div>
  );
}