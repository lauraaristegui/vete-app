import { useState } from "react";
import { Outlet } from "react-router";
import { Menu, X } from "lucide-react";

import { Sidebar } from "../sidebar/sidebar";
import pawImage from "../../assets/pawprint.png";

import "./AppLayout.css";

export function AppLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="app-layout">
      {/* Sidebar desktop + drawer mobile */}
      <aside
        className={`app-layout__sidebar ${
          isMenuOpen ? "app-layout__sidebar--open" : ""
        }`}
      >
        <button
          type="button"
          className="app-layout__close-menu"
          aria-label="Cerrar menú"
          onClick={closeMenu}
        >
          <X size={24} />
        </button>

        <div onClick={closeMenu}>
          <Sidebar />
        </div>
      </aside>

      {/* Overlay mobile */}
      {isMenuOpen && (
        <button
          type="button"
          className="app-layout__overlay"
          aria-label="Cerrar menú"
          onClick={closeMenu}
        />
      )}

      <div className="app-layout__main">
        {/* Header solo mobile */}
        <header className="app-layout__mobile-header">
          <div className="app-layout__mobile-brand">
            <img
              src={pawImage}
              alt=""
              className="app-layout__mobile-brand-icon"
            />

            <span>VeteApp</span>
          </div>

          <button
            type="button"
            className="app-layout__menu-button"
            aria-label="Abrir menú"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </header>

        <main className="app-layout__content">
          <div className="app-layout__content-container">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}