export type AppointmentStatus =
  | "pending"
  | "received"
  | "in-consultation"
  | "completed"
  | "cancelled"
  | "no-show"

export type PetSpecies = "dog" | "cat" | "rabbit";

export type Appointment = {
  id: string;
  date: string;
  time: string;
  petName: string;
  ownerName: string;
  dni: string;
  status: AppointmentStatus;
  species: PetSpecies;
  veterinarian: string;
};