import './Status.css'

export type StatusType =
  | 'pending'
  | 'in-consultation'
  | 'received'

type StatusProps = {
  status: StatusType
}

const statusLabels: Record<StatusType, string> = {
  pending: 'Pendiente',
  'in-consultation': 'En consulta',
  received: 'Recepcionado',
}

export function Status({ status }: StatusProps) {
  return (
    <span className={`status status--${status}`}>
      {statusLabels[status]}
    </span>
  )
}