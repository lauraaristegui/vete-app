import { useState } from "react";
import "./CardConsultation.css";
import Button from "../../atoms/Button/Button";

type CardConsultationProps = {
  date: string;
  reason: string;
  diagnosis: string;
  treatment: string;
  observations: string;
};

export function CardConsultation({
  date,
  reason,
  diagnosis,
  treatment,
  observations,
}: CardConsultationProps) {
   const [isExpanded, setIsExpanded] = useState(false);
  return (
    <article className="consultation-card">
      <div className="consultation-card__content">
        <span className="consultation-card__date">
          {date}
        </span>

        <div className="consultation-card__data">
          <div>
            <span className="consultation-card__label">
              Motivo:
            </span>
            <span>{reason}</span>
          </div>

          <div>
            <span className="consultation-card__label">
              Diagnóstico:
            </span>
            <span>{diagnosis}</span>
          </div>

          {isExpanded && (
            <>
              <div>
                <span className="consultation-card__label">
                  Tratamiento:
                </span>
                <span>
                  {treatment || "Sin tratamiento registrado"}
                </span>
              </div>

              <div>
                <span className="consultation-card__label">
                  Observaciones:
                </span>
                <span>
                  {observations || "Sin observaciones"}
                </span>
              </div>
            </>
          )}
        </div>
      </div>

      <Button
        type="button"
        className="consultation-card__detail"
        onClick={() => setIsExpanded((current) => !current)}
      >
        {isExpanded ? "Ocultar detalle ↑" : "Ver detalle ↓"}
      </Button>
    </article>
  );
}
