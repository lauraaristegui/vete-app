import { NavLink } from "react-router";

import { NavItem } from "../../design-system/molecules/NavItem/NavItem";
import pawImage from "../../assets/pawprint.png";
import {
  CalendarDays,
  ClipboardList,
  House,
  Users,
} from "lucide-react";

import "./sidebar.css";

export function Sidebar() {
  return (
    <nav className="sidebar">
      <div className="sidebar__brand">
        <img src={pawImage} alt="" className="sidebar__brand-icon" />

        <span className="sidebar__brand-name">VeteApp</span>
      </div>

      <div className="sidebar__navigation">
        <NavLink to="/">
          {({ isActive }) => (
            <NavItem label="Recepción" icon={House} active={isActive} />
          )}
        </NavLink>

        <NavLink to="/agenda">
          {({ isActive }) => (
            <NavItem label="Agenda" icon={CalendarDays} active={isActive} />
          )}
        </NavLink>

        <NavLink to="/clientes">
          {({ isActive }) => (
            <NavItem label="Clientes" icon={Users} active={isActive} />
          )}
        </NavLink>

        <NavLink to="/historia-clinica">
          {({ isActive }) => (
            <NavItem
              label="Historia clínica"
              icon={ClipboardList}
              active={isActive}
            />
          )}
        </NavLink>
      </div>
    </nav>
  );
}
