import './PatientHeader.css'

type PatientHeaderProps = {
  petName: string
  petInfo: string
  ownerName: string
}

export function PatientHeader({
  petName,
  petInfo,
  ownerName,
}: PatientHeaderProps) {
  return (
    <div className="patient-header">
      <div className="patient-header__avatar" />

      <div className="patient-header__info">
        <h2>{petName}</h2>

        <span className="patient-header__pet-info">
          {petInfo}
        </span>

        <span className="patient-header__owner">
          Responsable: {ownerName}
        </span>
      </div>
    </div>
  )
}