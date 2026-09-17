import './CardConsultation.css'

type CardConsultationProps = {
  date: string
  reason: string
  diagnosis: string
}

export function CardConsultation({
  date,
  reason,
  diagnosis,
}: CardConsultationProps) {
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
              Diagnóstico
            </span>
            <span>{diagnosis}</span>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="consultation-card__detail"
      >
        Ver detalle →
      </button>
    </article>
  )
}