import type { ButtonHTMLAttributes, ReactNode } from "react";
import "./Button.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "neutral" | "destructive";
  loading?: boolean;
  loadingText?: string;
};

function Button({
  children,
  variant = "primary",
  loading = false,
  loadingText = "Cargando...",
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`button button--${variant} ${
        loading ? "button--loading" : ""
      }`}
      disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {loading ? (
        <>
          <span className="button__spinner" aria-hidden="true" />
          <span>{loadingText}</span>
        </>
      ) : (
        children
      )}
    </button>
  );
}

export default Button;
