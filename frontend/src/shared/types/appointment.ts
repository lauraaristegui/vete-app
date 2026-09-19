export type AppointmentStatus =
  | "pending"
  | "received"
  | "in-consultation"
  | "completed"
  | "cancelled"
  | "no-show"

export type Appointment = {
  id: string;
  time: string;
  petName: string;
  ownerName: string;
  dni: string;
  status: AppointmentStatus;
};

