# 🐾 VeteApp

> 🚀 Proyecto personal de diseño y desarrollo de una plataforma de gestión veterinaria.

VeteApp es una aplicación de gestión veterinaria diseñada y desarrollada
desde cero como proyecto personal.

El proyecto recorre el proceso completo de creación de producto:

**UX Research → UX Design → UI Design → Arquitectura → Desarrollo → Persistencia**

Actualmente, el **MVP 1 se encuentra funcionalmente completo**, con los
principales flujos de gestión veterinaria implementados y persistidos mediante
un BFF desarrollado con Node.js, Express y SQLite.

---

## 🎯 Objetivo

VeteApp busca centralizar la gestión diaria de una veterinaria, facilitando
el trabajo del personal de recepción y de los profesionales veterinarios.

El MVP 1 permite:

- Gestionar clientes y mascotas.
- Buscar pacientes por nombre, responsable o DNI.
- Crear y administrar turnos.
- Gestionar el estado de atención de los turnos.
- Consultar información del paciente.
- Acceder a la historia clínica de cada mascota.
- Registrar nuevas consultas veterinarias.
- Registrar diagnóstico, tratamiento y observaciones.
- Mantener la información persistida entre sesiones.

La gestión de inventario, stock, pet shop y métricas operativas queda
contemplada para futuras versiones.

---

## 👥 Usuarios

Durante la etapa de UX se definieron tres perfiles principales:

**Mariana — Recepcionista**  
Gestiona clientes, mascotas y turnos.

**Agostina — Veterinaria**  
Consulta información del paciente, accede a su historia clínica y registra
nuevas consultas.

**Carlos — Dueño de mascota**  
Representa las necesidades del cliente que lleva sus mascotas a la veterinaria.

---

## 🔎 Proceso UX

El producto fue diseñado partiendo del problema y las necesidades de los
usuarios antes de comenzar con la implementación.

El proceso incluyó:

**Visión del producto → Definición del problema → Necesidades de usuario →
User Personas → Business Flow → User Journeys → User Flows → Wireframes**

La documentación de esta etapa se encuentra en:

📁 `docs/ux`

---

## 🎨 UI Design

Una vez definidos los principales flujos del producto, se desarrolló la
interfaz visual de VeteApp en Figma.

La etapa incluyó:

- Wireframes.
- Definición de identidad visual.
- Paleta de colores y variables.
- Tipografía.
- Espaciado y border radius.
- Estados semánticos.
- Design System.
- Componentes reutilizables.
- High-Fidelity Screens.
- Prototipo interactivo.

### 🧩 Design System

Se construyó un Design System reutilizable que luego fue trasladado al
frontend mediante componentes React.

Entre los componentes desarrollados se encuentran:

- Button
- Input
- InputText
- Textarea
- Select
- PageHeader
- PatientHeader
- PetCard
- AppointmentList
- AppointmentRow
- AppointmentSummary
- CardConsultation
- ActionMenu
- Calendar
- TimeSlot

La documentación visual se encuentra en:

📁 `docs/ui/design-system`

### 🖥️ Principales módulos

El MVP 1 incluye:

- Recepción.
- Agenda.
- Clientes.
- Mascotas.
- Historia clínica.
- Registro de consultas.

Las pantallas diseñadas se encuentran en:

📁 `docs/ui/high-fidelity-screens`

---

## 🏗️ Arquitectura

VeteApp utiliza una arquitectura separada entre frontend, BFF y persistencia.

```text
React + TypeScript
        ↓
React Context
        ↓
Frontend Services
        ↓
     REST / HTTP
        ↓
Node.js + Express BFF
        ↓
      Routes
        ↓
    Controllers
        ↓
     Services
        ↓
   Repositories
        ↓
      SQLite