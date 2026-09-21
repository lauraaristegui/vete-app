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

      El frontend utiliza React Context para mantener el estado actual de la
aplicación y sincronizar inmediatamente los cambios en la interfaz.

El BFF centraliza el acceso a datos y utiliza una arquitectura por capas:

Route → Controller → Service → Repository

SQLite funciona como fuente de persistencia de los datos del MVP.

🗄️ Modelo de datos

Las principales relaciones del dominio son:

Client
  │
  └── Pet
       │
       ├── Appointment
       │
       └── Consultation

Cada cliente puede tener múltiples mascotas.

Cada mascota puede tener múltiples turnos y consultas veterinarias.

La historia clínica se construye a partir del conjunto de consultas
registradas para cada mascota.

Actualmente se persisten en SQLite:

Clients
Pets
Appointments
Consultations
⚛️ Frontend

El frontend está desarrollado con:

React
TypeScript
React Router
Context API
CSS
Design System propio

La estructura sigue una organización basada en features y componentes
reutilizables:

src/
├── app/
├── assets/
├── design-system/
├── features/
├── shared/
└── main.tsx

El Design System contiene componentes reutilizables independientes del
dominio, mientras que las funcionalidades específicas de negocio se
organizan dentro de features.

🔌 BFF

El proyecto incluye un BFF desarrollado con:

Node.js
Express
SQLite
REST APIs

La arquitectura del BFF separa responsabilidades entre:

Routes
  ↓
Controllers
  ↓
Services
  ↓
Repositories
  ↓
SQLite

Entre los endpoints implementados se encuentran:

Clients
GET    /clients
GET    /clients/:id
POST   /clients
PATCH  /clients/:id
POST   /clients/:clientId/pets

Pets
GET    /pets/:petId
PATCH  /pets/:petId

Appointments
GET    /appointments
POST   /appointments
PATCH  /appointments/:id/status

Consultations
GET    /consultations
POST   /consultations
📅 Gestión de turnos

La Agenda permite:

Crear nuevos turnos.
Crear turnos para pacientes existentes.
Crear cliente, mascota y turno dentro de un mismo flujo.
Buscar turnos por paciente, responsable o DNI.
Navegar entre fechas.
Visualizar estados de atención.
Actualizar el estado de un turno.
Mantener los cambios persistidos después de recargar la aplicación.

El ciclo de estados implementado contempla:

Pendiente
   ↓
Recepcionado
   ↓
En consulta
   ↓
Atendido

Además se contemplan los estados:

Cancelado.
Ausente.
🩺 Historia clínica

Cada mascota posee una historia clínica longitudinal construida a partir de
sus consultas veterinarias.

Desde la historia clínica es posible:

Consultar las consultas anteriores.
Visualizar motivo y diagnóstico.
Expandir el detalle de tratamiento y observaciones.
Registrar una nueva consulta.
Persistir las consultas en SQLite.

Cada consulta contiene:

Fecha
Motivo
Diagnóstico
Tratamiento
Observaciones
✅ Validaciones

Los principales formularios incorporan validaciones de interfaz.

Entre ellas:

Validación de nombres.
Validación y formato de DNI.
Validación de email.
Campos numéricos.
Validación de datos de mascotas.
Validación de motivo y diagnóstico de consultas.
Feedback visual después de interactuar con campos inválidos.
Bloqueo del submit cuando los datos obligatorios no son válidos.
📌 Estado del proyecto
MVP 1
 UX Research
 UX Design
 User Flows
 Wireframes
 Design System
 High-Fidelity Screens
 Prototipo interactivo
 Arquitectura Frontend
 Desarrollo Frontend
 BFF
 API REST
 Persistencia SQLite
 Gestión de clientes
 Gestión de mascotas
 Gestión de turnos
 Persistencia de estados de turnos
 Historia clínica
 Registro de consultas
 Validaciones principales
Próximas etapas
 Revisión y sincronización final de Figma con el producto implementado.
 Testing automatizado.
 Product Analytics.
 CI/CD.
 Deploy.
Futuras versiones
 Dashboard administrativo.
 Métricas de pacientes y consultas.
 Inventario y control de stock.
 Pet Shop.
 Reportes operativos y comerciales.
🚀 Estado actual

MVP 1 funcionalmente completo.

Los principales flujos de Recepción, Agenda, Clientes, Mascotas e Historia
Clínica están implementados y conectados al BFF.

Los datos principales del producto se almacenan en SQLite y permanecen
disponibles después de recargar la aplicación.

La siguiente etapa está enfocada en realizar una revisión final de UI,
sincronizar Figma con la implementación y preparar el proyecto para testing,
automatización y deploy.

🛠️ Tecnologías
Frontend
React
TypeScript
React Router
Context API
CSS
Backend / BFF
Node.js
Express
REST API
Persistencia
SQLite
node:sqlite
Diseño
Figma
UX Research
UX Design
UI Design
Design Systems
Prototipado
Herramientas
Git
GitHub
Postman
📂 Estructura general
vete-app/
├── bff/
├── docs/
│   ├── ux/
│   └── ui/
├── frontend/
├── CHANGELOG.md
└── README.md

La documentación de UX/UI se mantiene separada de la implementación para
conservar el README enfocado en la presentación general y técnica del
producto.

📈 Evolución

El desarrollo y las decisiones técnicas del proyecto se documentan en:

📄 CHANGELOG.md

El proyecto comenzó desde la investigación y definición del problema y
evolucionó progresivamente hacia un producto funcional con frontend, BFF y
persistencia.

👩‍💻 Autora

María Laura Aristegui
Frontend Software Engineer

Proyecto personal desarrollado como parte de mi portfolio profesional.
```
