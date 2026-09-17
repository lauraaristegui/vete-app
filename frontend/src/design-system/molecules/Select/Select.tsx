import type { SelectHTMLAttributes } from 'react'
import './Select.css'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string
}

export function Select({
  label,
  children,
  ...props
}: SelectProps) {
  return (
    <label className="select">
      <span className="select__label">{label}</span>

      <div className="select__control">
        <select className="select__field" {...props}>
          {children}
        </select>

        <span className="select__arrow" aria-hidden="true" />
      </div>
    </label>
  )
}
