import Button from "../../../design-system/atoms/Button/Button";
import "./SearchNoResults.css";

type SearchNoResultsProps = {
  search: string;
  showButton?: boolean;
  description?: string;
};

export function SearchNoResults({ search, showButton, description }: SearchNoResultsProps) {
  return (
    <div className="search-no-results">
      <h3>No encontramos resultados</h3>

      <p>
        {description} "{search}".
      </p>

      {showButton && <Button variant="secondary">+ Nuevo cliente</Button>}
    </div>
  );
}
