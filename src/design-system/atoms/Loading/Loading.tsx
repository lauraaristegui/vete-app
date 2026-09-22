import "./Loading.css";

type LoadingProps = {
  text?: string;
};

export function Loading({ text = "Cargando..." }: LoadingProps) {
  return (
    <div className="loading" role="status" aria-live="polite">
      <span className="loading__spinner" aria-hidden="true" />
      <span className="loading__text">{text}</span>
    </div>
  );
}