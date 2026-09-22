import type { TextareaHTMLAttributes } from "react";

import "./Textarea.css";

interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export function Textarea({
  label,
  id,
  error,
  ...textareaProps
}: TextareaProps) {
  return (
    <div className="textarea">
      <label
        className="textarea__label"
        htmlFor={id}
      >
        {label}
      </label>

      <textarea
        id={id}
        className={`textarea__field ${
          error ? "textarea__field--error" : ""
        }`}
        aria-invalid={Boolean(error)}
        {...textareaProps}
      />

      {error && (
        <span className="textarea__error">
          {error}
        </span>
      )}
    </div>
  );
}