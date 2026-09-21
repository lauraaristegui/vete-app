import type { LucideIcon } from "lucide-react";

import "./NavItem.css";

type NavItemProps = {
  label: string;
  icon: LucideIcon;
  active?: boolean;
};

export function NavItem({
  label,
  icon: Icon,
  active = false,
}: NavItemProps) {
  return (
    <div
      className={`nav-item ${
        active ? "nav-item--active" : ""
      }`}
    >
      <span className="nav-item__icon">
        <Icon size={18} strokeWidth={1.8} />
      </span>

      <span className="nav-item__label">
        {label}
      </span>
    </div>
  );
}