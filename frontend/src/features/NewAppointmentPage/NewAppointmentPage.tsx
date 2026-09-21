import { useState } from "react";
import { useNavigate, useLocation } from "react-router";

import { useAppointments } from "../../app/context/Appointments/useAppointments";

import Button from "../../design-system/atoms/Button/Button";
import { TimeSlot } from "../../design-system/atoms/TimeSlot/TimeSlot";
import { Calendar } from "../../design-system/molecules/Calendar/Calendar";
import { PageHeader } from "../../design-system/molecules/PageHeader/PageHeader";
import { Select } from "../../design-system/molecules/Select/Select";
import { AppointmentSummary } from "../../design-system/organisms/AppointmentSummary/AppointmentSummary";

import {
  NewPatientForm,
  type NewPatientData,
} from "../../shared/components/ NewPatientForm/NewPatientForm";

import "./NewAppointmentPage.css";

export function NewAppointmentPage() {
  const { appointments, addAppointment } = useAppointments();

  // Datos del turno
  const [veterinarian, setVeterinarian] = useState("Dra. Agostina Pérez");

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const existingPatient = location.state?.patient ?? null;

  // Control del flujo
  const [isDateConfirmed, setIsDateConfirmed] = useState(false);

  const [isScheduleConfirmed, setIsScheduleConfirmed] = useState(false);

  const [patientData, setPatientData] = useState<NewPatientData | null>(
    existingPatient,
  );

  const timeSlots = [
    { time: "09:00" },
    { time: "10:00" },
    { time: "11:00" },
    { time: "12:00" },
    { time: "13:00" },
    { time: "14:00" },
    { time: "16:00" },
    { time: "17:00" },
    { time: "18:00" },
    { time: "19:00" },
    { time: "20:00" },
    { time: "21:00" },
  ];

  const reservedTimes = appointments
    .filter(
      (appointment) =>
        appointment.date === date &&
        appointment.veterinarian === veterinarian &&
        appointment.status !== "cancelled" &&
        appointment.status !== "no-show",
    )
    .map((appointment) => appointment.time);

  const handleDateChange = (selectedDate: string) => {
    setDate(selectedDate);

    // Si cambia la fecha, descartamos cualquier horario anterior.
    setTime("");
    setIsDateConfirmed(true);
    setIsScheduleConfirmed(false);
  };

  const handleTimeSelect = (selectedTime: string) => {
    setTime(selectedTime);

    // Si cambia el horario, debe confirmarse nuevamente.
    setIsScheduleConfirmed(false);
  };

  const handleConfirmAppointment = () => {
    if (!patientData) return;

    const newAppointment = {
      id: crypto.randomUUID(),
      date,
      time,
      veterinarian,
      petName: patientData.petName,
      ownerName: patientData.ownerName,
      dni: patientData.dni,
      species: patientData.species,
      status: "pending" as const,
    };

    addAppointment(newAppointment);

    navigate("/agenda");
  };

  return (
    <section className="new-appointment-page">
      <PageHeader title="Agenda" description="Nuevo turno" />

      {/* Veterinario */}
      <div className="new-appointment-page__content">
        <Select
          label="Veterinario"
          value={veterinarian}
          onChange={(event) => setVeterinarian(event.target.value)}
        >
          <option value="Dra. Agostina Pérez">Dra. Agostina Pérez</option>
        </Select>
      </div>

      {/* Calendario + horarios */}
      {!isScheduleConfirmed && (
        <div className="new-appointment-page__schedule">
          <div className="new-appointment-page__date">
            <h2>Fecha del turno</h2>

            <Calendar selectedDate={date} onDateChange={handleDateChange} />
          </div>

          {isDateConfirmed && (
            <div className="new-appointment-page__times">
              <h2>Horarios disponibles</h2>

              <div className="new-appointment-page__time-slots">
                {timeSlots.map((slot) => {
                  const isReserved = reservedTimes.includes(slot.time);

                  return (
                    <TimeSlot
                      key={slot.time}
                      state={time === slot.time ? "selected" : "available"}
                      disabled={isReserved}
                      onClick={() => handleTimeSelect(slot.time)}
                    >
                      {slot.time}
                    </TimeSlot>
                  );
                })}
              </div>

              {time && (
                <div className="new-appointment-page__schedule-action">
                  <Button
                    variant="primary"
                    onClick={() => setIsScheduleConfirmed(true)}
                  >
                    Aceptar
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Fecha y horario confirmados */}
      {/* {isScheduleConfirmed && (
        <div className="new-appointment-page__schedule-summary">
          <div>
            <span className="new-appointment-page__schedule-summary-label">
              Fecha y horario
            </span>

            <strong>
              {new Date(`${date}T00:00:00`).toLocaleDateString("es-AR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
              {" · "}
              {time}
            </strong>
          </div>

          <Button
            variant="secondary"
            onClick={() => setIsScheduleConfirmed(false)}
          >
            Modificar
          </Button>
        </div>
      )} */}

      {/* Formulario de nuevo paciente */}
      {isScheduleConfirmed && !patientData && (
        <NewPatientForm onContinue={(patient) => setPatientData(patient)} />
      )}

      {/* Resumen final */}
      {isScheduleConfirmed && patientData && (
        <div className="new-appointment-page__summary">
          <AppointmentSummary
            veterinarian={veterinarian}
            date={date}
            time={time}
            petName={patientData.petName}
            ownerName={patientData.ownerName}
            dni={patientData.dni}
            species={patientData.species}
            onModify={() => {
              setIsScheduleConfirmed(false);
            }}
            onConfirm={handleConfirmAppointment}
          />
        </div>
      )}
    </section>
  );
}
