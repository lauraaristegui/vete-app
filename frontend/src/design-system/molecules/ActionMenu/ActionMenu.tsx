import { useState } from "react";
import Button from "../../atoms/Button/Button";
import "./ActionMenu.css";

type ActionMenuOption = {
  label: string;
  value: string;
};

type ActionMenuProps = {
  label: string;
  options: ActionMenuOption[];
  onSelect: (value: string) => void;
};

export function ActionMenu({
  label,
  options,
  onSelect,
}: ActionMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value: string) => {
    onSelect(value);
    setIsOpen(false);
  };

  return (
    <div className="action-menu">
      <Button
        variant="secondary"
        onClick={() => setIsOpen((current) => !current)}
      >
        {label} ▾
      </Button>

      {isOpen && (
        <div className="action-menu__options">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              className="action-menu__option"
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}