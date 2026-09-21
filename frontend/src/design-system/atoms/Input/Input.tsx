import type { InputHTMLAttributes } from "react";
import "./Input.css";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  suffix?: string;
  error?: string;
};

function Input({
  className = "",
  suffix,
  error,
  ...props
}: InputProps) {
  return (
    <div className="input-wrapper">
      <div
        className={`input-container ${
          error ? "input-container--error" : ""
        }`}
      >
        <input
          className={`input ${className}`}
          aria-invalid={Boolean(error)}
          {...props}
        />

        {suffix && (
          <span className="input__suffix">
            {suffix}
          </span>
        )}
      </div>

      {error && (
        <span className="input__error">
          {error}
        </span>
      )}
    </div>
  );
}

export default Input;