import type { ButtonHTMLAttributes } from 'react'
import './TimeSlot.css'

type TimeSlotState = 'available' | 'selected'

interface TimeSlotProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  state?: TimeSlotState
}

export function TimeSlot({
  state = 'available',
  className = '',
  children,
  ...props
}: TimeSlotProps) {
  return (
    <button
      className={`time-slot time-slot--${state} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}