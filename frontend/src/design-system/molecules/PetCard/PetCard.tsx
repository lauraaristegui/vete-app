import './PetCard.css'

type PetCardProps = {
  petName: string
  petInfo: string
  ownerName: string
}

export function PetCard({
  petName,
  petInfo,
  ownerName,
}: PetCardProps) {
  return (
    <div className="pet-card">

      <div className="pet-card__header">
        <div className="pet-card__avatar" />

        <div>
          <h3>{petName}</h3>
          <span>{petInfo}</span>
        </div>
      </div>

      <div className="pet-card__owner">
        <span>Responsable</span>
        <span>{ownerName}</span>
      </div>

      <button className="pet-card__history">
        Ver historia clínica →
      </button>

    </div>
  )
}