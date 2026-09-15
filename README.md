# 🐾 VeteApp

> 🚀 Proyecto personal de diseño y desarrollo de una plataforma de gestión veterinaria.

VeteApp es una aplicación de gestión veterinaria diseñada y desarrollada
desde cero como proyecto personal.

El proyecto aborda el proceso completo de creación de producto:

**UX Research → UX Design → UI Design → Desarrollo**

Actualmente se encuentra finalizada la primera etapa de **UX/UI y prototipado**,
y comienza la etapa de **desarrollo de la aplicación**.

---

## 🎯 Objetivo del producto

VeteApp busca centralizar la gestión diaria de una veterinaria,
facilitando el trabajo de recepción y profesionales veterinarios.

La plataforma permite gestionar:

- Clientes y mascotas
- Turnos y agenda
- Información de pacientes
- Consultas veterinarias
- Historias clínicas
- Seguimiento de pacientes

El inventario y gestión de stock quedan contemplados para una futura versión.

---

# 🔎 UX Research & UX Design

El proceso comenzó analizando el problema, las necesidades de los usuarios
y los principales flujos de trabajo dentro de una veterinaria.

## 🎯 Visión del producto

Se definieron el propósito, los objetivos y la propuesta inicial del producto.

![Visión de VeteApp](docs/ux/vision.png)

---

## 🔎 Definición del problema

Se analizaron los principales problemas que busca resolver la plataforma.

![Definición del problema](docs/ux/problema.png)

---

## 👥 Necesidades de los usuarios

Se identificaron las principales necesidades de los usuarios de la plataforma.

![Necesidades de usuarios](docs/ux/necesidades-usuarios.png)

---

## 👤 User Personas

Se definieron tres perfiles principales:

- **Mariana — Recepcionista**
- **Agostina — Veterinaria**
- **Carlos — Dueño de mascota**

![User Personas](docs/ux/personas.png)

---

## 📋 Definición del producto

A partir de la investigación se definieron las principales funcionalidades
necesarias para responder a los problemas identificados.

![Información del producto](docs/ux/informacion-producto.png)

---

## 🔄 Business Flow

Se diseñó el flujo general de atención dentro de la veterinaria,
desde la solicitud de un turno hasta el registro de una consulta
en la historia clínica del paciente.

![Business Flow](docs/ux/business-flow.png)

---

# 🗺️ User Journeys

Se analizaron los recorridos de los diferentes perfiles de usuario,
identificando acciones, necesidades, pain points y oportunidades.

### Mariana — Recepcionista

![User Journey Mariana](docs/ux/user-journey-mariana.png)

### Agostina — Veterinaria

![User Journey Agostina](docs/ux/user-journey-agostina.png)

### Carlos — Dueño de mascota

![User Journey Carlos](docs/ux/user-journey-carlos.png)

---

# 🔀 User Flows

Los User Flows permitieron definir cómo los usuarios realizan
las principales tareas dentro de la plataforma.

### Flujo de recepción

![User Flow Mariana](docs/ux/user-flow-mariana.png)

---

# ✏️ Wireframes

Antes de comenzar el diseño visual se desarrollaron wireframes
para validar la estructura, jerarquía de información y navegación.

Los wireframes incluyen los principales módulos de la aplicación:

- Recepción
- Agenda
- Clientes y mascotas
- Historia clínica
- Registro de consultas

Los archivos se encuentran disponibles en:

`docs/ux/wiframes/`

---

# 🎨 UI Design

A partir de los wireframes se desarrollaron las pantallas High-Fidelity
y un Design System reutilizable para mantener consistencia visual
en toda la aplicación.

## 🧩 Design System

El Design System define:

- Paleta de colores
- Tipografía
- Espaciados
- Bordes y radios
- Estados semánticos
- Inputs
- Selects
- Botones y variantes
- Navegación
- Cards
- Componentes de agenda
- Componentes de pacientes
- Componentes clínicos

![Design System](docs/ui/design-system/design%20system.png)

---

# 🖥️ High-Fidelity Screens

## Recepción

Búsqueda y gestión inicial de clientes y mascotas.

![Recepción](docs/ui/High-Fidelity%20Screens/Reception.png)

## Agenda

Gestión de turnos y disponibilidad.

![Agenda](docs/ui/High-Fidelity%20Screens/agenda.png)

## Clientes y mascotas

Administración de información de clientes y sus mascotas.

![Clientes y mascotas](docs/ui/High-Fidelity%20Screens/pet.png)

## Historia clínica

Gestión de consultas e historial clínico de los pacientes.

![Historia clínica](docs/ui/High-Fidelity%20Screens/History%20Clinical.png)

---

# 🔗 Prototipo interactivo

Se desarrolló un prototipo navegable en Figma para validar los principales
flujos antes de comenzar la implementación.

El prototipo permite recorrer, entre otros, el flujo:

**Buscar paciente → Historia clínica → Iniciar consulta → Agregar medicamento → Finalizar consulta → Ver detalle**

👉 **[Ver prototipo interactivo en Figma](PEGAR_ACA_TU_LINK_DE_FIGMA)**

---

# 🏗️ Arquitectura del producto

El MVP se organiza en cuatro áreas principales:

**Recepción → Agenda → Clientes/Mascotas → Historia Clínica**

La relación principal del dominio es:

**Cliente → Mascota → Historia clínica → Consultas**

Esto permite mantener un historial clínico longitudinal para cada paciente.

---

# 📌 Estado del proyecto

- [x] Visión del producto
- [x] Definición del problema
- [x] Necesidades de usuario
- [x] User Personas
- [x] Business Flow
- [x] User Journeys
- [x] User Flows principales
- [x] Wireframes
- [x] Design System
- [x] High-Fidelity Screens
- [x] Prototipo interactivo
- [ ] Arquitectura Frontend
- [ ] Desarrollo Frontend
- [ ] Backend
- [ ] Testing
- [ ] Product Analytics
- [ ] Deploy

---

# 🚀 Próxima etapa

Con el **MVP de UX/UI finalizado**, comienza la etapa de desarrollo.

El siguiente objetivo es transformar el diseño y los flujos definidos
en una aplicación funcional, comenzando por la arquitectura Frontend,
routing, layouts, componentes reutilizables y modelos de dominio.

---

## 🛠️ Tecnologías

### Diseño

- Figma
- UX Research
- UX Design
- UI Design
- Design Systems
- Prototipado

### Desarrollo

La arquitectura y tecnologías de desarrollo serán documentadas
a medida que avance la implementación.

---

## 👩‍💻 Autora

**María Laura Aristegui**  
Frontend Software Engineer

Proyecto personal desarrollado como parte de mi portfolio profesional.