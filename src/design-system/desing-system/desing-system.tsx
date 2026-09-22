import { Textarea } from "../molecules/Textarea/Textarea";
import { PetCard } from "../molecules/PetCard/PetCard";
import { CardConsultation } from "../organisms/CardConsultation/CardConsultation";
import { PatientHeader } from "../organisms/PatientHeader/PatientHeader";
import { SearchResultOwner } from "../organisms/SearchResultOwner/SearchResultOwner";
import { TimeSlot } from "../atoms/TimeSlot/TimeSlot";
import { InputText } from "../molecules/InputText/InputText";
import { NavItem } from "../molecules/NavItem/NavItem";
import { Select } from "../molecules/Select/Select";
import { AppointmentRow } from "../organisms/AppointmentRow/AppointmentRow";
import { Form } from "../organisms/Form/Form";
import { AppointmentSummary } from "../organisms/AppointmentSummary/AppointmentSummary";

import Input from "../atoms/Input/Input";
import Button from "../atoms/Button/Button";

function DesignSystem() {
  return (
    <>
      <h1>VeteApp Design-System</h1>
      <div className="app-container">
        <div className="atoms-test">
          <span>Atoms</span>

          <div className="button-group">
            <Button variant="primary" onClick={() => console.log("Guardar")}>
              Guardar
            </Button>
            <Button variant="secondary">Agregar mascota</Button>
            <Button variant="neutral">Cancelar</Button>
            <Button variant="destructive">Eliminar</Button>
            <Button
              variant="primary"
              disabled
              onClick={() => console.log("Guardar")}
              type="button"
            >
              Guardar
            </Button>
          </div>
          <div className="input-test">
            <Input placeholder="Buscar cliente o mascota..." />
          </div>

          <div>
            <Textarea label="Motivo de la consulta" />
          </div>
          <div className="time-slot">
            <TimeSlot state="available">09:00</TimeSlot>
            <TimeSlot state="selected">09:00</TimeSlot>
            <TimeSlot disabled>09:00</TimeSlot>
          </div>
        </div>
        <div className="molecules-test">
          <span>Molecules</span>

          <div>
            <InputText
              id="dni"
              label="DNI"
              placeholder="Ej: 31.876.876"
              name="dni"
              required
              disabled
            />

            <InputText
              id="owner-name"
              label="Nombre y apellido"
              placeholder="Ej: Rosario Gómez"
            />
          </div>
          <div>
            <NavItem label="Dashboard" />
            <NavItem label="Dashboard" active />
          </div>
          <div>
            <PetCard
              petName="Luna"
              petInfo="Caniche · 2 años"
              ownerName="Laura Gomez"
            />
          </div>
          <div>
            <Select label="Veterinario" defaultValue="">
              <option value="" disabled>
                Seleccionar veterinario
              </option>

              <option value="agostina">Dra. Agostina Pérez</option>
            </Select>
          </div>
        </div>
        <div className="organisms-test">
          <span>Organims</span>
          <div className="appointment-test">
            <AppointmentRow
              time="09:00"
              petName="Luna"
              ownerName="Laura Gomez"
              dni="32.222.22"
              status="pending"
            />

            <AppointmentRow
              time="10:00"
              petName="Mía"
              ownerName="Josefina Boldrini"
              dni="33.444.555"
              status="in-consultation"
            />

            <AppointmentRow
              time="11:00"
              petName="Toby"
              ownerName="Carlos López"
              dni="28.555.444"
              status="received"
            />
          </div>
          <div className="form-test">
            <Form
              state="withData"
              name="Rosario Gómez"
              dni="35.987.987"
              phone="2235076589"
              email="email@email.com"
              address="Constitución 980"
            />

            <Form state="empty" />
          </div>
          <div>
            <AppointmentSummary
              veterinarian="Dra. Agostina Pérez"
              date="Jue, 17 Sep"
              time="10:00"
              petName="Luna"
              ownerName="Laura Gomez"
              dni="36.547.658"
            />
          </div>
          <div>
            <CardConsultation
              date="12/09/2026"
              reason="Vómitos desde ayer"
              diagnosis="Gastritis leve"
            />
          </div>
          <div>
            <SearchResultOwner
              name="Laura Gomez"
              dni="36.547.658"
              phone="2494 123456"
              email="laura@email.com"
              pets={[
                {
                  id: "1",
                  name: "Luna",
                  info: "Caniche · 2 años",
                },
                {
                  id: "2",
                  name: "Mía",
                  info: "Mestiza · 4 años",
                },
              ]}
            />
          </div>
          <div>
            <PatientHeader
              petName="Luna"
              petInfo="Caniche · 2 años"
              ownerName="Laura Gomez"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default DesignSystem;
