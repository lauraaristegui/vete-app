import './Textarea.css'

type TextareaProps = {
  label: string
  placeholder?: string
  value?: string
  disabled?: boolean
}

export function Textarea({
  label,
  placeholder,
  value,
  disabled = false,
}: TextareaProps) {
  return (
    <div className="textarea">
      <label className="textarea__label">
        {label}
      </label>

      <textarea
        className="textarea__field"
        placeholder={placeholder}
        value={value}
        disabled={disabled}
      />
    </div>
  )
}