import { useState } from "react";
import { useNavigate, useLocation } from "react-router";

import { useAppointments } from "../../app/context/Appointments/useAppointments";
import { useVeterinarians } from "../../app/context/Veterinarians/useVeterinarians";

import Button from "../../design-system/atoms/Button/Button";
import { Loading } from "../../design-system/atoms/Loading/Loading";
import { TimeSlot } from "../../design-system/atoms/TimeSlot/TimeSlot";
import { Calendar } from "../../design-system/molecules/Calendar/Calendar";
import { PageHeader } from "../../design-system/molecules/PageHeader/PageHeader";
import { Select } from "../../design-system/molecules/Select/Select";
import { AppointmentSummary } from "../../design-system/organisms/AppointmentSummary/AppointmentSummary";

import { createClient, createPet } from "../services/client.service";
import { createAppointment } from "../services/appointment.service";

import {
  NewPatientForm,
  type NewPatientData,
} from "../../shared/components/ NewPatientForm/NewPatientForm";

import { VeterinarianForm } from "../../shared/components/VeterinarianForm/VeterinarianForm";

import "./NewAppointmentPage.css";

export function NewAppointmentPage() {
  const { appointments, addAppointment } = useAppointments();

  const {
    veterinarians,
    isLoading: isLoadingVeterinarians,
    addVeterinarian,
  } = useVeterinarians();

  const [isCreatingAppointment, setIsCreatingAppointment] = useState(false);

  const [veterinarianId, setVeterinarianId] = useState("");

  const [showVeterinarianForm, setShowVeterinarianForm] = useState(false);

  const [isSavingVeterinarian, setIsSavingVeterinarian] = useState(false);

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const existingPatient = location.state?.patient ?? null;

  const [isDateConfirmed, setIsDateConfirmed] = useState(false);
  const [isScheduleConfirmed, setIsScheduleConfirmed] = useState(false);

  const [patientData, setPatientData] = useState<NewPatientData | null>(
    existingPatient,
  );

  const activeVeterinarians = veterinarians.filter(
    (veterinarian) => veterinarian.active,
  );

  const selectedVeterinarian = veterinarians.find(
    (veterinarian) => veterinarian.id === veterinarianId,
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
        appointment.veterinarianId === veterinarianId &&
        appointment.status !== "cancelled" &&
        appointment.status !== "no-show",
    )
    .map((appointment) => appointment.time);

  const handleVeterinarianChange = (selectedVeterinarianId: string) => {
    setVeterinarianId(selectedVeterinarianId);

    setTime("");
    setIsDateConfirmed(false);
    setIsScheduleConfirmed(false);
  };

  const handleAddVeterinarian = async (name: string) => {
    if (isSavingVeterinarian) return;

    try {
      setIsSavingVeterinarian(true);

      const createdVeterinarian = await addVeterinarian(name);

      // El nuevo veterinario queda seleccionado.
      setVeterinarianId(createdVeterinarian.id);

      setShowVeterinarianForm(false);

      // Reiniciamos agenda porque cambió el veterinario.
      setDate("");
      setTime("");
      setIsDateConfirmed(false);
      setIsScheduleConfirmed(false);
    } catch (error) {
      console.error("Error creando veterinario:", error);
    } finally {
      setIsSavingVeterinarian(false);
    }
  };

  const handleDateChange = (selectedDate: string) => {
    setDate(selectedDate);
    setTime("");
    setIsDateConfirmed(true);
    setIsScheduleConfirmed(false);
  };

  const handleTimeSelect = (selectedTime: string) => {
    setTime(selectedTime);
    setIsScheduleConfirmed(false);
  };

  const handleConfirmAppointment = async () => {
    if (!patientData || !veterinarianId || isCreatingAppointment) {
      return;
    }

    try {
      setIsCreatingAppointment(true);

      let petId = patientData.petId;

      // Si no tiene petId, es un cliente/paciente nuevo.
      if (!petId) {
        const createdClient = await createClient({
          name: patientData.ownerName,
          dni: patientData.dni,
          phone: patientData.phone,
          email: patientData.email,
          address: patientData.address,
        });

        const createdPet = await createPet(createdClient.id, {
          name: patientData.petName,
          species: patientData.species,
          breed: patientData.breed,
          age: patientData.age,
        });

        petId = createdPet.id;
      }

      const createdAppointment = await createAppointment({
        petId,
        date,
        time,
        veterinarianId,
      });

      addAppointment(createdAppointment);

      navigate("/agenda");
    } catch (error) {
      console.error("Error creando turno:", error);
    } finally {
      setIsCreatingAppointment(false);
    }
  };

  return (
    <section className="new-appointment-page">
      <PageHeader title="Agenda" description="Nuevo turno" />

      {/* Veterinario */}
      <div className="new-appointment-page__content">
        {isLoadingVeterinarians ? (
          <Loading text="Cargando veterinarios..." />
        ) : (
          <>
            <Select
              label="Veterinario"
              value={veterinarianId}
              disabled={showVeterinarianForm}
              onChange={(event) => handleVeterinarianChange(event.target.value)}
            >
              <option value="">Seleccionar veterinario</option>

              {activeVeterinarians.map((veterinarian) => (
                <option key={veterinarian.id} value={veterinarian.id}>
                  {veterinarian.name}
                </option>
              ))}
            </Select>

            {!showVeterinarianForm && (
              <div className="new-appointment-page__veterinarian-action">
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => setShowVeterinarianForm(true)}
                >
                  + Agregar veterinario
                </Button>
              </div>
            )}

            {showVeterinarianForm && (
              <VeterinarianForm
                loading={isSavingVeterinarian}
                onSubmit={handleAddVeterinarian}
                onCancel={() => setShowVeterinarianForm(false)}
              />
            )}
          </>
        )}
      </div>

      {/* Calendario + horarios */}
      {veterinarianId && !showVeterinarianForm && !isScheduleConfirmed && (
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

      {/* Formulario de nuevo paciente */}
      {isScheduleConfirmed && !patientData && (
        <NewPatientForm onContinue={(patient) => setPatientData(patient)} />
      )}

      {/* Resumen final */}
      {isScheduleConfirmed && patientData && selectedVeterinarian && (
        <div className="new-appointment-page__summary">
          <AppointmentSummary
            veterinarian={selectedVeterinarian.name}
            date={date}
            time={time}
            petName={patientData.petName}
            ownerName={patientData.ownerName}
            dni={patientData.dni}
            species={patientData.species}
            loading={isCreatingAppointment}
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
