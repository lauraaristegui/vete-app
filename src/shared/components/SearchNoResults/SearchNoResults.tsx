import Button from "../../../design-system/atoms/Button/Button";
import "./SearchNoResults.css";

type SearchNoResultsProps = {
  search?: string;
  showButton?: boolean;
  title?: string;
  description?: string;
};

export function SearchNoResults({
  search,
  showButton,
  title = "No encontramos resultados",
  description,
}: SearchNoResultsProps) {
  return (
    <div className="search-no-results">
      <h3>{title}</h3>

      {description && (
        <p>
          {description}
          {search && ` "${search}".`}
        </p>
      )}

      {showButton && (
        <Button variant="secondary">
          + Nuevo cliente
        </Button>
      )}
    </div>
  );
}