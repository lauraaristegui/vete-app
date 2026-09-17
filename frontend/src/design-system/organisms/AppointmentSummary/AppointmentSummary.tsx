
import Button from '../../atoms/Button/Button'
import './AppointmentSummary.css'

type AppointmentSummaryProps = {
  veterinarian: string
  date: string
  time: string
  petName: string
  ownerName: string
  dni: string
}

export function AppointmentSummary({
  veterinarian,
  date,
  time,
  petName,
  ownerName,
  dni,
}: AppointmentSummaryProps) {
  return (
    <div className="appointment-summary">
      <h3 className="appointment-summary__title">
        Resumen del turno
      </h3>

      <div className="appointment-summary__data">
        <div>
          <span>Veterinario</span>
          <strong>{veterinarian}</strong>
        </div>

        <div>
          <span>Fecha</span>
          <strong>{date}</strong>
        </div>

        <div>
          <span>Hora</span>
          <strong>{time}</strong>
        </div>
      </div>

      <div className="appointment-summary__patient">
        <div className="appointment-summary__avatar" />

        <strong>{petName}</strong>

        <div className="appointment-summary__owner">
          <span>Responsable</span>
          <span>{ownerName}</span>
        </div>

        <span>DNI {dni}</span>
      </div>

      <div className="appointment-summary__actions">
        <Button variant="primary">
          Confirmar consulta
        </Button>

        <Button variant="neutral">
          Cancelar
        </Button>
      </div>
    </div>
  )
}