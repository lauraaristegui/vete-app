import './NavItem.css'

type NavItemProps = {
  label: string
  active?: boolean
}

export function NavItem({
  label,
  active = false,
}: NavItemProps) {
  return (
    <button
      className={`nav-item ${active ? 'nav-item--active' : ''}`}
      type="button"
    >
      <span className="nav-item__icon">
        ⌂
      </span>

      <span className="nav-item__label">
        {label}
      </span>
    </button>
  )
}