import type { TextareaHTMLAttributes } from "react";

import "./Textarea.css";

interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export function Textarea({
  label,
  id,
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
        className="textarea__field"
        {...textareaProps}
      />
    </div>
  );
}