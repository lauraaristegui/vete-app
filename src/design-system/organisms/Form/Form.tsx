import { InputText } from '../../molecules/InputText/InputText'
import './Form.css'

type FormState = 'withData' | 'empty'

type FormProps = {
  state: FormState
  name?: string
  dni?: string
  phone?: string
  email?: string
  address?: string
}

export function Form({
  state,
  name,
  dni,
  phone,
  email,
  address,
}: FormProps) {
  if (state === 'withData') {
    return (
      <div className="form form--with-data">
        <div>
          <strong>Nombre y apellido</strong>
          <span>{name}</span>
        </div>

        <div>
          <strong>DNI</strong>
          <span>{dni}</span>
        </div>

        <div>
          <strong>Celular</strong>
          <span>{phone}</span>
        </div>

        <div>
          <strong>Email</strong>
          <span>{email}</span>
        </div>

        <div>
          <strong>Dirección</strong>
          <span>{address}</span>
        </div>
      </div>
    )
  }

  return (
    <div className="form form--empty">
      <InputText
        label="Nombre y apellido"
        placeholder="Ej: Rosario Gómez"
      />

      <InputText
        label="DNI"
        placeholder="Ej: 31.876.876"
      />

      <InputText
        label="Celular"
        placeholder="Ej: 2235645678"
      />

      <InputText
        label="Email"
        placeholder="Ej: email@email.com"
      />

      <div className="form__address">
        <InputText
          label="Dirección"
          placeholder="Ej: Constitución 764"
        />
      </div>
    </div>
  )
}