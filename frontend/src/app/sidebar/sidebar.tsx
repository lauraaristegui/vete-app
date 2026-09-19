import { NavLink } from "react-router";
import { NavItem } from "../../design-system/molecules/NavItem/NavItem";
import "./sidebar.css";

export function Sidebar() {
  return (
    <nav className="sidebar">
      <div className="sidebar__brand">VeteApp</div>

      <div className="sidebar__navigation">
        <NavLink to="/">
          {({ isActive }) => <NavItem label="Recepción" active={isActive} />}
        </NavLink>

        <NavLink to="/agenda">
          {({ isActive }) => <NavItem label="Agenda" active={isActive} />}
        </NavLink>

        <NavLink to="/clientes">
          {({ isActive }) => <NavItem label="Clientes" active={isActive} />}
        </NavLink>

        <NavLink to="/historia-clinica">
          {({ isActive }) => (
            <NavItem label="Historia clínica" active={isActive} />
          )}
        </NavLink>
      </div>
    </nav>
  );
}
